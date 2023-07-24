import PropTypes from 'prop-types';
import './ContactTextInput.css';

const ContactTextInput = ({ type, name, pattern, title }) => {
  return (
    <label htmlFor="name">
      {name}
      <input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
      ></input>
    </label>
  );
};

export default ContactTextInput;
