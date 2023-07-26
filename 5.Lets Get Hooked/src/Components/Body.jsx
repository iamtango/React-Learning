import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";



function filterData(searchText,restaurants){

  return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText) )

}


 // Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to
// RestaurantCard component as props with unique key as index
const Body =() => {
  
    const [searchTxt , setSearchTxt] =useState();// to create the state variable
    const [restaurants, setRestaurants] =useState(restaurantList);

  return( 
    <>
    <div className="search-container">
      <input type="text" 
            className="search-input"
            placeholder="Search"
            value={searchTxt} 
            onChange={(e)=>{
              setSearchTxt(e.target.value);
            }}
            />
      <button className="search-btn" 
              onClick={()=>{
                //need to filter the data
                // Updating the state - restaurants
                const data = filterData(searchTxt, restaurants);

                //update the state -restaurants
                setRestaurants(data); 

              }} >Search</button>
      {/* <p>{ searchTxt}</p> */}
    </div>
    <div className="restaurant-list">
         {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
    </>
    )};

export default Body;    