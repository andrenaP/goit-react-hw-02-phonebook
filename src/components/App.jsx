import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactInput from './ContactInput';
import ContactsOutput from './ContactsOutput';
import Section from './Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      // Якщо переглянути стан, переданий callback-функції під час її виклику,
      // отримаємо актуальний стан на момент оновлення.
      return {
        contacts: prevState.contacts.concat({
          name: prevState.name,
          number: prevState.number,
        }),
      };
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactInput
            Submit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>
        <Section title="Contacts">
          <ContactsOutput contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
