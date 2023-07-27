import { useState } from "react";
   
   // Title component for display logo
   const Title = () => (
    <a href="/">
        <img 
        alt="Logo" className="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"/>
    </a>
    );

   
// Header component for header section: Logo, Nav Items
const Header = () => {
    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);
  
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>
              {/* use conditional rendering for login and logout */}
              {isLoggedin ? (
                <button
                  className="logout-btn"
                  onClick={() => setIsLoggedin(false)}
                >
                  Logout
                </button>
              ) : (
                <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;