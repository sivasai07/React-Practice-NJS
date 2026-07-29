import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

  const [filteredList, setFilteredList] = useState(resList);
  
  useEffect( () => {
    fetchData();},
 )

  return (
    <div className="body">

      <div className="search">
        <input type="text" placeholder="Search restaurants..." />
        <button>Search</button>

        <button 
          className="filter-btn"
          onClick={() => {
            const filtered = resList.filter(
              (res) => res?.data?.avgRating > 4.2
            );
  
            setFilteredList(filtered);
          }}
        >
          Top rated restaurants
        </button>

      </div>


      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard 
            key={restaurant.data.id} 
            resData={restaurant} 
          />
        ))}
      </div>

    </div>
  );
};

export default Body;