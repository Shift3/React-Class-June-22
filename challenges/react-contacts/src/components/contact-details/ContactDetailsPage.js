import { useParams } from 'react-router-dom';
import { useContact } from '../../contexts/contactContext';
import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = () => {
    const {id} = useParams();
    const { contacts } = useContact();
    const contact = contacts.filter(c => c.id === parseInt(id))[0];
    return (
        <div>
            <ContactDetailsCard contact={contact} />
        </div>
    )
}

export default ContactDetailsPage;