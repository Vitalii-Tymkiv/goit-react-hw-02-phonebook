import { Component } from 'react';
import { Container } from '../ui/Container';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
// import { nanoid } from 'nanoid';
// import contacts from './data/contacts.json';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
    name: '',
    phone: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  // addSticker = (img, label) => {
  //   this.setState(prevState => ({
  //     stickers: [...prevState.stickers, { id: nanoid(), img, label }],
  //   }));
  // };

  getVisibleContacts = () => {
    const { contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase());
  };

  render() {
    return (
      <Container>
        <SectionWrapper title="Phonebook">
          <ContactForm onAdd={this.handleAddContact} />
        </SectionWrapper>
        <SectionWrapper title="Contact List">
          {this.state.contacts.length > 0 && (
            <ContactList contacts={this.state.contacts} />
          )}
        </SectionWrapper>
      </Container>
    );
  }
}
