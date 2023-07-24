import PropTypes from 'prop-types';
import './ContactInput.css';
import ContactAnyInput from './ContactAnyInput';

const ContactInput = ({ Submit, handleChange }) => {
  return (
    <form action="" className="MainForm" onSubmit={Submit}>
      <ContactAnyInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        handleChange={handleChange}
      />
      <ContactAnyInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        handleChange={handleChange}
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactInput;
