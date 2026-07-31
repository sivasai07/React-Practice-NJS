import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    setResInfo(null);
    setError(false);
    fetchMenu();
  }, [resId]);

const fetchMenu = async () => {
  const MAX_RETRIES = 5;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(MENU_API + resId);
      const text = await response.text();

      // Swiggy sometimes replies 202 with an empty body on the
      // first hit (bot-protection). Treat that as "not ready yet"
      // and retry instead of crashing on JSON.parse("").
      if (!text) {
        console.log(`Attempt ${attempt}: empty body, retrying...`);
        await new Promise((resolve) => setTimeout(resolve, 300));
        continue;
      }

      const json = JSON.parse(text);
      setResInfo(json.data);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt} failed:`, err);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  console.log("Failed to fetch menu after multiple retries.");
  setError(true);
};
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
      <h1>{restaurantInfo?.name}</h1>

      <img
        src={CDN_URL + restaurantInfo?.cloudinaryImageId}
        alt={restaurantInfo?.name}
        width="250"
      />

      <h3>{restaurantInfo?.cuisines?.join(", ")}</h3>

      <h3>⭐ {restaurantInfo?.avgRating}</h3>

      <h3>{restaurantInfo?.costForTwoMessage}</h3>

      <h2>Menu</h2>

      {itemCards.length === 0 ? (
        <h3>No menu items found</h3>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h4>{item.card.info.name}</h4>
              <p>
                ₹
                {(item.card.info.price ||
                  item.card.info.defaultPrice) / 100}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;