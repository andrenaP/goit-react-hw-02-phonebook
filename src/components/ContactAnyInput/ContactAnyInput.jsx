import PropTypes from 'prop-types';
import './ContactAnyInput.css';

const ContactAnyInput = ({
  type,
  name,
  pattern,
  title,
  handleChange,
  LableText,
}) => {
  return (
    <label htmlFor={name}>
      {LableText}
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

export default ContactAnyInput;
