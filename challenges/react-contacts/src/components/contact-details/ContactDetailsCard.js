import styled from "styled-components";

const  ContactDetailsCard = ({ contact }) => {
    return (
        <CardWrapper className="rounded shadow">
            <div className="column align_center">
                <img src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div className="column align_center">
                <p className="text-center">{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
width: 50rem;
margin: 0 auto;
padding: 4rem 1rem;
img {
    border-radius: 50%;
    width: 8rem;
}

.column {
    display: flex;
    flex-direction: column;
}

.column.align_center {
    align-items: center;
    justify-content: center;
}

dd {
    text-align: center;
    width: 14rem;
}
`;
export default ContactDetailsCard;