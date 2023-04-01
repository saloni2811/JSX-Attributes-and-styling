import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className ="heading">My Favourite Foods</h1>
    <img src = {img} />
    <ul>
      <li>Pizza</li>
      <li>Paneer-Mushroom</li>
      <li>Dosa</li>
    </ul>
  </div>,
  document.getElementById("root")
);
