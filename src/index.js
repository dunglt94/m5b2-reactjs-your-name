import React from "react";
import ReactDOM from "react-dom/client";

const name = "Dũng";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h1 style={{ textAlign: "center" }}>
        { name }
    </h1>
);

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry"
];

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(
    <div>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);
