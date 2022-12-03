import { ContactItem, Name } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ name, phone }) => {
  return (
    <ContactItem>
      <Name>
        {name}: {phone}
      </Name>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
