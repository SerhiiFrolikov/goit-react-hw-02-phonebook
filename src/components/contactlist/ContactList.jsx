import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Name,
  PhoneNumber,
  DeleteBtn,
} from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, handleContactsDelete } = this.props;
    return (
      <List>
        {contacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              <Name>
                {name}: <PhoneNumber>{number}</PhoneNumber>
              </Name>
              <DeleteBtn id={id} onClick={handleContactsDelete}>
                Delete
              </DeleteBtn>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleContactsDelete: PropTypes.func.isRequired,
};
