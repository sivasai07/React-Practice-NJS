import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";

// Fetches the restaurant list once on mount.
// Only responsibility: get the data and expose { restaurants, loading, error }.
const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const data = await fetch(RESTAURANT_API);
      const json = await data.json();

      const list =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurants(list);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { restaurants, loading, error };
};

export default useRestaurants;
