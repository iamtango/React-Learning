import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () =>  (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);