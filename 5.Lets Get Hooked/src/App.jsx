    import React from "react"
    import  ReactDOM   from "react-dom/client"
    import Header from "./Components/Hearder";
    import Body from "./Components/Body";
    // import Footer from "./Components/Footer";
    import Footer from "./Components/Footer";

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