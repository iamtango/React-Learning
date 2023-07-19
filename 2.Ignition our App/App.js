 
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

 import React from "react"
 import  ReactDOM   from "react-dom/client"

 const heading = React.createElement("h1",{
     id:"title "
 },"Hello Everyone here we are its my first!!");


 const heading2 = React.createElement("h2",{
     id:"title2 "
 },"Hello Everyone here we are second time!");
 console.log(heading)
  
 const heading3 = React.createElement("h2",null,"!");
 console.log(heading)

 const container = React.createElement("div",{
     id:"container"
 },[heading,heading2])

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(container)
