import PropTypes from 'prop-types';
import './ContactTextInput.css';

const ContactTextInput = ({ type, name, pattern, title, handleChange }) => {
  return (
    <label htmlFor="name">
      {name}
      <input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={handleChange}
      ></input>
    </label>
  );
};

export default ContactTextInput;
