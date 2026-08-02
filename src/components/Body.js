import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurants from "../hooks/useRestaurants";
import useRestaurantFilter from "../hooks/useRestaurantFilter";

// Body is now only responsible for rendering the restaurant list UI.
// Data fetching lives in useRestaurants, search/filter logic lives in
// useRestaurantFilter, and offline handling lives at the app layout level.
const Body = () => {
  const { restaurants, loading } = useRestaurants();
  const {
    searchText,
    setSearchText,
    filteredList,
    handleSearch,
    handleTopRated,
  } = useRestaurantFilter(restaurants);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;