import React from "react";
import ReactDOM from "react-dom/client";



//Functional component in react

const Heading = () =>(
    <div><h1>Functional component</h1>
    </div>
);
//React Element
const jsxheading = <h1 id="heading" className="head">React JSX element{Heading()}</h1>;

console.log(jsxheading);
console.log(Heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);