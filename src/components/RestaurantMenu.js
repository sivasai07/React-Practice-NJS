import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, error } = useRestaurantMenu(resId);

  if (error) {
    return <h2>Unable to load restaurant menu. Please try again.</h2>;
  }

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurantCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const restaurantInfo = restaurantCard?.card?.card?.info;

  const menuCard = resInfo?.cards?.find((card) =>
    card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const regularCards =
    menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards =
    regularCards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards ||
    [];

  return (
    <div className="menu">
      <div className="menu-header">
        <img
          className="menu-res-img"
          src={CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt={restaurantInfo?.name}
        />

        <div className="menu-header-info">
          <h1>{restaurantInfo?.name}</h1>

          <h3 className="menu-cuisines">
            {restaurantInfo?.cuisines?.join(", ")}
          </h3>

          <div className="menu-meta">
            <span className="menu-rating">
              ⭐ {restaurantInfo?.avgRating}
            </span>

            <span className="menu-cost">
              {restaurantInfo?.costForTwoMessage}
            </span>
          </div>
        </div>
      </div>

      <h2 className="menu-title">Menu</h2>

      {itemCards.length === 0 ? (
        <h3>No menu items found</h3>
      ) : (
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li className="menu-item" key={item.card.info.id}>
              <span className="menu-item-name">
                {item.card.info.name}
              </span>

              <span className="menu-item-price">
                ₹
                {(item.card.info.price ||
                  item.card.info.defaultPrice) / 100}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;