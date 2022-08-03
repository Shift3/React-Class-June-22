import { StrictMode, useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const WrappedDetails = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("Yellow");
  return (
    <ThemeContext.Provider value={theme}>
      <Suspense fallback={<h1>loading route...</h1>}>
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
      </Suspense>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
