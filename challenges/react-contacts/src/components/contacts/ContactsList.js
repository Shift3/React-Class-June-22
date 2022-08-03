import ContactCard from "./ContactCard"
import { useContact } from "../../contexts/contactContext";

const ContactList = () => {
    const { contacts, removeExistingContact } = useContact();

    return (
        <div style={{backgroundColor: "#eee", padding: "2rem"}}>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                    onRemove= {() => removeExistingContact(contact.id)}
                />
            )}
        </div>
    )
}

export default ContactList;