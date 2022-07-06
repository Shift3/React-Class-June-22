import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, "Pet Adoption!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", bread: "Havnese" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      bread: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", bread: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
