import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './ContactsOutput.css';

const ContactsOutput = ({ contacts }) => {
  return (
    <ul className="ListOfNames">
      {contacts.map(contact => {
        let id = nanoid();
        return <li key={id}>{contact}</li>;
      })}
    </ul>
  );
};

export default ContactsOutput;
