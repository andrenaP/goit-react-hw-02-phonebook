import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    for (let contact of contacts) {
      if (contact.name === name) {
        window.alert(`Name: ${name} is already in contacts`);
        return 0;
      }
    }
    this.setState(prevState => {
      // Якщо переглянути стан, переданий callback-функції під час її виклику,
      // отримаємо актуальний стан на момент оновлення.
      return {
        contacts: prevState.contacts.concat({
          name: prevState.name,
          number: prevState.number,
          id: nanoid(),
        }),
      };
    });
  };

  DoDelete = feedbackType => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== feedbackType
        ),
      };
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            Submit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={this.handleChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            DoDelete={this.DoDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
