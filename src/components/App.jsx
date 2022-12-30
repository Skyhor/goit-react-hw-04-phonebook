import { useEffect, useState, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    return parsedContacts || '';
  });
  const [filter, setFilter] = useState('');
  const addContact = userData => {
    const searchSameName = contacts.find(cont => cont.name === userData.name);
    if (searchSameName) {
      alert(`${userData.name} is already in contacts`);
      return;
    }
    const contact = {
      ...userData,
      id: nanoid(),
    };
    setContacts(state => [...state, contact]);
  };
  const getVisibleContacts = useMemo(() => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const removeContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <Form onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts}
        onRemoveContact={removeContact}
      />
    </div>
  );
};
