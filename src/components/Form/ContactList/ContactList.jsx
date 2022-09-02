import PropTypes from 'prop-types';

import style from './contact-list.module.css';

const ContactList = ({ onRemoveContacts, contacts }) => {
  const elements = contacts.map(contact => (
    <li className={style.li} key={contact.id}>
      {contact.name}: {contact.phone}
      <button type="button" onClick={() => onRemoveContacts(contact.id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  onRemoveContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

ContactList.defaultProps = {
  contacts: [],
};
