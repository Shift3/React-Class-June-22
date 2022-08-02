import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";

const mockContacts = [
  {
    "id": 1,
    "firstName": "Culley",
    "lastName": "Snelman",
    "profilePic": "https://i.pravatar.cc/300?u=1",
    "phoneNumber": "351-346-6140",
    "email": "csnelman0@blog.com",
    "address": "09 Eggendart Parkway"
  }, 
  {
    "id": 2,
    "firstName": "Tammara",
    "lastName": "Allcorn",
    "profilePic": "https://i.pravatar.cc/300?u=2",
    "phoneNumber": "676-783-9239",
    "email": "tallcorn1@senate.gov",
    "address": "78145 Brentwood Court"
  }, 
  {
    "id": 3,
    "firstName": "Cassandry",
    "lastName": "Roze",
    "profilePic": "https://i.pravatar.cc/300?u=3",
    "phoneNumber": "223-879-6692",
    "email": "croze2@w3.org",
    "address": "2079 Morrow Parkway"
  }, 
  {
    "id": 4,
    "firstName": "Koressa",
    "lastName": "Galey",
    "profilePic": "https://i.pravatar.cc/300?u=4",
    "phoneNumber": "761-858-5580",
    "email": "kgaley3@economist.com",
    "address": "5 Hanover Alley"
  }
];


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contacts/add">
          <ContactCreatePage />
        </Route>
        
        <Route path="/contacts/:id">
          <ContactDetailsPage contact={mockContacts[0]}/>
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/">
        <ContactsPage contacts={mockContacts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;