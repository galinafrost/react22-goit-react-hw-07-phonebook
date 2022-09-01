import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import {
  addContact,
  removeContact,
} from '../../redux/contacts/contact-actions';
import { getContacts } from 'redux/contacts/contact-selector';

import styles from './form.module.css';

const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContacts = data => {
    const resultNumber = contacts.find(
      contact => contact.number === data.number
    );
    if (resultNumber) {
      return alert(`${data.name} уже есть в списке`);
    }

    const action = addContact(data);

    dispatch(action);
  };

  const onRemoveContacts = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterStr = filter.toLowerCase();
    const result = contacts.filter(contact => {
      const name = contact.name.toLowerCase();
      return name.includes(filterStr);
    });

    return result;
  };

  const filteredContacts = getFilteredContacts();

  console.log(contacts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={onAddContacts} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      {/* <ContactList removeContact={removeContact} contacts={filteredContacts} /> */}
      <ContactList
        contacts={filteredContacts}
        removeContact={onRemoveContacts}
      />
    </div>
  );
};

export default Form;
