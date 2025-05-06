import React from "react";
import ReactDOM from "react-dom/client";


//React Element
const jsxheading = <h1 id="heading" className="head">React JSX element</h1>;

//Functional component in react

const Heading = () =>(
    <div><h1>Functional component</h1>
    {jsxheading}</div>
);

console.log(jsxheading);
console.log(Heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);