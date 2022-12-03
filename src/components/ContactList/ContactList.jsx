import { Contact } from '../Contact/Contact';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ name, phone, id }) => (
        <Contact key={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
