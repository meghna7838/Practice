import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1 id="heading" className="head">React JSX component</h1>;

console.log(jsxheading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);