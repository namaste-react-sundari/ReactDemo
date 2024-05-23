import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams, useLocation } from "react-router-dom";
import {Menu_API} from "../utils/constant";

const RestaurantMenu = (props) => {
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
  const encodedUrl = queryParams.get("encodedUrl");
  const decodedUrl = decodeURIComponent(encodedUrl);

  const [resData, setResData] = useState({
    res_thumb: null,
    res_id: null,
    rating: {},
    name: null,
    cuisines: [],
  });

  // const {url} = useParams();
  // const decodedUrl = decodeURIComponent(url);

  useEffect(() => {
    fetchMenu();
  }, []);

  const extractPathFromUrl = (url) => {
    const urlObj = new URL(url);
    return urlObj.pathname.replace(/^\/|\/$/g, ""); // Remove leading/trailing slashes
  };

  const fetchMenu = async () => {
    const path = extractPathFromUrl(decodedUrl);
    const data = await fetch(Menu_API+path);
    const json = await data.json();

    const basicInfo = json?.page_data?.sections?.SECTION_BASIC_INFO || {};
    const resDetails = json?.page_data?.sections?.SECTION_RES_DETAILS || {};

    const { res_thumb, res_id, rating, name } = basicInfo;

    const cuisines = resDetails?.CUISINES?.cuisines || [];

    setResData({
      res_thumb,
      res_id,
      rating,
      name,
      cuisines,
    });
  };

  const { res_thumb, res_id, rating, name, cuisines } = resData;

  return resData == null ? (
    <Shimmer />
  ) : (
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
