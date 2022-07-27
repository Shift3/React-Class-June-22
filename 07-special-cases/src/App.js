import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WrappedDetails from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("Yellow");
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div>
          <Link to="/">
            <h1>Pet Adoption!</h1>
          </Link>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
