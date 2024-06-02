import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
  /**
   * destructuring javascript objects.
   */

  const { resData } = props;
  const { imageUrl, name, url } = resData;

  // if(resData.rating == undefined){
  //     console.log(resData)
  // }
  // console.log(resData,aggregate_rating,rating_subtitle,cuisines)
  // const {aggregate_rating} = resData.rating?.aggregate_rating ?? 0;
  // const {rating_subtitle} = resData.rating?.rating_subtitle ?? 0;
  // const { cuisines } = resData.subtitleData.cuisines?? Array.prototype.map();

  const { aggregate_rating = 0, rating_subtitle = 0 } = resData.rating || {};
  const { cuisines = [] } = resData.subtitleData || {};

  // Encode the URL to safely pass it as a URL parameter
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="restro-card" style={{ background: '#f0f0f0' }}>
      <Link to={`/restaurants?encodedUrl=${encodedUrl}`}>
        <img
          className="restro-card-image"
          src={imageUrl}
          alt="Resturant Logo"
        ></img>
        <h3>{name}</h3>
      </Link>
      <h2>Available Cuisines</h2>
      <p>
        {cuisines && cuisines.length > 0
          ? // Safely map over 'cuisines' if it's defined and has elements
            cuisines.map((cuisine) => cuisine.name).join(', ')
          : // Handle cases where 'cuisines' is undefined or empty
            'No cuisines available'}
      </p>
      <div className="restro-card-rating-and-distance">
        <span>{aggregate_rating} stars</span>
        <span>{rating_subtitle}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
