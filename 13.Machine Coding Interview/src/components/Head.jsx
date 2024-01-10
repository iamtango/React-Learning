import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../utils/appSlice";
import { Youtube_Search_API } from "../utils/consant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Debouncing

    const timmer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    //  clearing timmer
    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(ToggleMenu());
  };

  return (
    <div className="grid grid-flow-col pb-1 m-2  shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="Youtube-Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className=" border border-black w-1/2 px-3 h-9 rounded-l-full"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="rounded-r-full border  border-black px-3 py-1 m-1">
          <img
            alt="search "
            className="h-6 "
            src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
          />
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-9 col-span-1"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
