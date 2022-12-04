import { Component } from 'react';
import { Container } from '../ui/Container';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import PropTypes from 'prop-types';

export class App extends Component {
  static propTypes = {
    initialContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckContact = name => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(contact => contact.name === name);
    isExistContact && alert(`${name} Is already in contacts`);
    return isExistContact;
  };

  handleDeleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <SectionWrapper title="Phonebook">
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckContact={this.handleCheckContact}
          />
        </SectionWrapper>
        <SectionWrapper title="Contact List">
          <Filter value={filter} onChange={this.handleChangeFilter} />
          {contacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.handleDeleteContact}
            />
          )}
        </SectionWrapper>
      </Container>
    );
  }
}
