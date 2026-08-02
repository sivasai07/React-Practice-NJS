import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setResInfo(null);
      setError(false);

      const response = await fetch(MENU_API + resId);

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      const json = await response.json();
      setResInfo(json.data);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
      setError(true);
    }
  };

  return { resInfo, error };
};

export default useRestaurantMenu;