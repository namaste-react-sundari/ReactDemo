import React from "react"
import ReactDOM from "react-dom/client"

// Creating React Element using Core React.
const heading = React.createElement(
    "h1",{"id":"heading"},"First React Element using Core React."
);

// Creating React Element using JSX.
const jsxHeading = (<h1 id="heading" className="heading">First React Element using JSX</h1>)


const rootDiv = ReactDOM.createRoot(document.getElementById("root"));
rootDiv.render(jsxHeading);

