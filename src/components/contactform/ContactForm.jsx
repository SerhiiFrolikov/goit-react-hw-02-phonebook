import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  AddContactBtn,
  FormLabel,
  FormInput,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContacts = e => {
    e.preventDefault();
    this.props.handleAddContacts({ ...this.state });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.addContacts}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.onChange}
            required
          />
        </FormLabel>
        <AddContactBtn>Add contacts</AddContactBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleAddContacts: PropTypes.func.isRequired,
};
