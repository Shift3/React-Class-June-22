import ContactCard from "./ContactCard"

const ContactList = ({ contacts=[] }) => {
    return (
        <div style={{backgroundColor: "#eee", padding: "2rem"}}>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                    onRemove= {() => {}}
                />
            )}
        </div>
    )
}

export default ContactList;