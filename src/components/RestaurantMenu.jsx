import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams, useLocation } from 'react-router-dom';
import { useFetchViaURL } from '../utils/useFetchViaURL';

const RestaurantMenu = (props) => {
  const [resData, setResData] = useState({
    res_thumb: null,
    res_id: null,
    rating: {},
    name: null,
    cuisines: [],
  });
  // const [resData, setResData] = useState([]);
  /**
     * json.page_data.sections.SECTION_BASIC_INFO

        res_thumb
        res_id
        rating
        name

        json.page_data.sections.SECTION_RES_DETAILS

        CUISINES.cuisines
     */
  const location = useLocation();
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const encodedUrl = queryParams.get('encodedUrl');
  const decodedUrl = decodeURIComponent(encodedUrl);

  const { responseJSON, error, loading } = useFetchViaURL(decodedUrl);

  useEffect(() => {
    if (responseJSON) {
      const basicInfo =
        responseJSON?.page_data?.sections?.SECTION_BASIC_INFO || {};
      const resDetails =
        responseJSON?.page_data?.sections?.SECTION_RES_DETAILS || {};

      const { res_thumb, res_id, rating, name } = basicInfo;
      const cuisines = resDetails?.CUISINES?.cuisines || [];

      setResData({
        res_thumb,
        res_id,
        rating,
        name,
        cuisines,
      });
    }
  }, [responseJSON]);

  if (loading) return <Shimmer />;
  if (error) return <div>Error: {error.message}</div>;

  const { res_thumb, res_id, rating, name, cuisines } = resData;

  return (
    <div>
      <h1>{name}</h1>
      {res_thumb && <img src={res_thumb} alt={`${name} Thumbnail`} />}
      <p>Rating: {rating?.aggregate_rating}</p>
      <p>Votes: {rating?.votes}</p>
      <p>Restaurant ID: {res_id}</p>
      <h3>Cuisines:</h3>
      <ul>
        {cuisines.map((cuisine, index) => (
          <li key={index}> {cuisine.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
