import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './ContactsOutput.css';

const ContactsOutput = ({ contacts }) => {
  return (
    <ul className="ListOfNames">
      {contacts.map(({ name, number }) => {
        let id = nanoid();
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

export default ContactsOutput;
