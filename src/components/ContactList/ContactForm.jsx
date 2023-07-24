import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ contacts, filter, DoDelete }) => {
  return (
    <ul className="ListOfNames">
      {contacts
        .filter(contact => contact.name.includes(filter))
        .map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span className="name">{name}</span>
              <span className="number">{number}</span>
              <button
                onClick={() => {
                  DoDelete(name);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  filter: PropTypes.string.isRequired,
  DoDelete: PropTypes.func.isRequired,
};
