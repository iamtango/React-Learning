import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-52  px-3">
      <div className=" font-bold text-black">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/shorts">Shorts </Link>
        </h1>
        <h1>
          <Link to="/subscribe">Subscribe</Link>
        </h1>
      </div>
      <div className=" pt-4">
        <h1 className=" font-bold text-black">You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Show More</li>
        </ul>
      </div>
      <div className=" pt-4">
        <h1 className=" font-bold text-black">Subscriptions</h1>
        <ul>
          <li>UFC</li>
          <li>Zero To Mastery</li>
          <li>Akshay Shaini</li>
          <li>Kunal Kushwaha</li>
        </ul>
      </div>
      <div className=" pt-4">
        <h1 className=" font-bold text-black">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
