import React from "react";
import ReactDOM from "react-dom/client";

const name = "Dũng";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h1 style={{ textAlign: "center" }}>
        { name }
    </h1>
);
