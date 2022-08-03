import { createContext, useContext } from 'react';

export const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);