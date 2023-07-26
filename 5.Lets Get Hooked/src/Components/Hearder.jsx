   // Title component for display logo
   const Title = () => (
    <a href="/">
        <img 
        alt="Logo" className="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"/>
    </a>
    );

    const Header = () => ( 
    <div className="header"> 
        < Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div> 
    );

export default Header