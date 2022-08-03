import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contacts/add">
          <ContactCreatePage />
        </Route>
        
        <Route path="/contacts/:id">
          <ContactDetailsPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/">
        <ContactsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
