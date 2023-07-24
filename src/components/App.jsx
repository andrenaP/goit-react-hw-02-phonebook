import React, { Component } from 'react';
import ContactInput from './ContactInput';
import Section from './Section';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactInput title="name" />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default App;
