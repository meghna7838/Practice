import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = document.createElement("h1");
heading1.innerHTML = "Hello World from JS";

const div = document.getElementById("div");
div.appendChild(heading1);

//React
const heading2 = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React"
);

const div2 = ReactDOM.createRoot(document.getElementById("div2"));
div2.render(heading2);1

