import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactform/ContactForm';
import { ContactList } from './contactlist/ContactList';
import { Filter } from './filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  findNameInput = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  handleAddContacts = (contactName, contactNumber) => {
    const addedName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );
    if (addedName) {
      return alert(`${contactName} is already in contacts`);
    }
    const id = nanoid(8);
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: contactName, id: id, number: contactNumber },
      ],
    });
  };

  handleContactsDelete = event => {
    const names = this.state.contacts.filter(
      contact => contact.id !== event.currentTarget.id
    );
    this.setState({
      contacts: [...names],
    });
  };
  render() {
    const renderNames = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleAddContacts={this.handleAddContacts} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} findName={this.findNameInput} />
        <ContactList
          contacts={renderNames}
          handleContactsDelete={this.handleContactsDelete}
        />
      </>
    );
  }
}
export default App;
