import { useEffect, useState } from "react";

// Owns search text + filtered list + the two filter actions.
// Re-syncs the filtered list whenever the source restaurant list changes
// (e.g. after the initial fetch completes).
const useRestaurantFilter = (restaurants) => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(restaurants);
  }, [restaurants]);

  const handleSearch = () => {
    const filtered = restaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredList(filtered);
  };

  const handleTopRated = () => {
    const filtered = restaurants.filter((res) => res?.info?.avgRating > 4.2);

    setFilteredList(filtered);
  };

  return { searchText, setSearchText, filteredList, handleSearch, handleTopRated };
};

export default useRestaurantFilter;
