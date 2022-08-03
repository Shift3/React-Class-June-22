import { useEffect, useState } from "react"
import { getMockContacts } from "../utils/mockContacts";
import { getContacts, createContact, deleteContact } from '../utils/contacts';
import { ContactContext } from "./contactContext";

export const ContactContextProvider = ({children}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts: getMockContacts);
  }, []);

  const createNewContact = (contact) => {
    const newContact = createContact(contact);
    setContacts([newContact, ...contacts]);
  } 

  const removeExistingContact = (contactId)=> {
    const newContacts = contacts.filter(c => c.id !== contactId);
    deleteContact(contactId);
    setContacts(newContacts);
  }

  return(
    <ContactContext.Provider value={{contacts, createNewContact, removeExistingContact }}>
      {children}
    </ContactContext.Provider>
  )
}