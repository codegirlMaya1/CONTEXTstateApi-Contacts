import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';


const ContactList = () => {
  const { contacts, setSelectedContact } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact List</h2>
      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => setSelectedContact(contact)} className="contact-item">
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
