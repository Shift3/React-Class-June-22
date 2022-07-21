import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <BootCard className="shadow p-4">
            <div>
                <div>
                    <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <button>X</button>
            </div>
        </BootCard>
    )
}

const BootCard = styled(Card)`
    width: 60%;
    margin: 0 auto 1.8rem auto;
    &:hover {
        cursor: pointer;
        border: .5px solid;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BootButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 50%;
    border: none;
    background-color: lightgrey;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
`;

export default ContactCard;