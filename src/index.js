import React from "react";
import ReactDOM from "react-dom";

const getDate = new Date();
const clockNow = getDate.getHours();
console.log(clockNow);

var x = "";
if (clockNow >= 12 && clockNow <= 18) {
  x = "Good Afternoon";
  var stylesNow = {
    color: "green"
  };
} else if (clockNow >= 18 && clockNow <= 24) {
  x = "Good Evening";
  stylesNow = {
    color: "blue"
  };
} else {
  x = "Good Morning";
  stylesNow = {
    color: "red"
  };
}

ReactDOM.render(
  <div>
    <h1>Hello</h1>
    <p style={stylesNow}> {x}</p>
  </div>,
  document.getElementById("root")
);
