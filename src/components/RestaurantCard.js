import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  return (
    <Link to={"/restaurants/" + id} className="res-card-link">
      <div className="res-card">
        <img
          className="food-img"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <div className="res-info">
          <h3>{name}</h3>
          <h4>{cuisines?.join(", ")}</h4>
          <h4>⭐ {avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} mins</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;