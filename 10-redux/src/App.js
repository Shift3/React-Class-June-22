import { StrictMode, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Header";

const WrappedDetails = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>loading route...</h1>}>
        <Router>
          <Header />
          <Switch>
            <Route path="/details/:id">
              <WrappedDetails />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
