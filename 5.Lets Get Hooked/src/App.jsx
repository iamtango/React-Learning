import React from "react"
import  ReactDOM   from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

/* My Food App structure will look like this, 
        1) Header
            - Logo
            - Nav Items(right side)
            - Cart
        2) Body
            - Search bar
            - Restaurants List
                - Restaurant card
                    - Image
                    - Name
                    - Rating
        3) Footer
            - Links
            - Copyrights
   
*/

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to
// RestaurantCard component as props with unique key as index
const Body =() => (
<div className="restaurant-list">
     {restaurantList.map((restaurant) => {
    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
  })}
</div>
);



// // Internal CSS in JS 
// const StyleObj = {
//     background : "green"
// }

const AppLayout = () =>(
// <div style={StyleObj}>
<>
    < Header />
    < Body />
    < Footer /> 
</>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)