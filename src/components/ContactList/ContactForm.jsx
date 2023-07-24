import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ contacts, filter }) => {
  return (
    <ul className="ListOfNames">
      {contacts
        .filter(contact => contact.name.includes(filter))
        .map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span className="name">{name}</span>
              <span className="number">{number}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactForm;
