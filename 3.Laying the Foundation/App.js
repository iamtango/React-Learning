/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// //React.createElement => Object =>HTML(DOM)

// const heading = React.createElement("h1",{
//     id:"title ",
//     key:"h1"
// },"Hello Everyone here we are its my first!!");

// const heading2 = React.createElement("h2",{
//     id:"title2 ",
//     key:"h2"                //key props use to remove the warning and it should be unique
// },"Hello Everyone here we are second time!");
// console.log(heading)

// const heading3 = React.createElement("h2",null,"!");
// console.log(heading)

// // its so pain
// const container = React.createElement("div",{
//     id:"container"
// },[React.createElement("h1",
//     {
//         id:"title ",
//         key:"h1"
//     },"Hello Everyone here we are its my first!!"),
//     React.createElement("li",{},"Hello Everyone Li!!"),
//     React.createElement("li",{},"About US!!"),
//     React.createElement("li",{},"About US2 !!")])

//  const heading = React.createElement("h1",{
//     id:"title ",
//     key:"h1"
// },"Hello Everyone here we are its my first!!");

const heading = (
  <h1 id="title" key="h">
    Namaste React
  </h1>
);

// React Compnent
// Functional  it is NEW
//  class based component it is OLD

const HeaderComponent = () => (
  <div>
    {heading}
    <h1>Namaste React1 </h1>
    <h2>Namaste React2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

root.render(<HeaderComponent />);
