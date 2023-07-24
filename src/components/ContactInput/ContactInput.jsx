import PropTypes from 'prop-types';
import './ContactInput.css';
import ContactTextInput from './ContactTextInput';

const ContactInput = ({ Submit, handleChange }) => {
  return (
    <form action="" className="MainForm" onSubmit={Submit}>
      <ContactTextInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        handleChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactInput;
