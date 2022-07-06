import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Pet Adoption!</h1>
      <Pet name="Luna" animal="Dog" breed="Havnese" />
      <Pet name="Pepper" animal="Bird" breed="Havnese" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
