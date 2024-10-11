import React, { createContext, useState, useEffect } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '345-678-9012' },
      { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '456-789-0123' },
      { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', phone: '567-890-1234' },
    ];
  });

  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setSelectedContact(null);
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
    setSelectedContact(updatedContact);
  };

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact, addContact, deleteContact, editContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
