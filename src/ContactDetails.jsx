import React, { useContext, useState } from 'react';
import { ContactContext } from './ContactContext';


const ContactDetails = () => {
  const { selectedContact, deleteContact, editContact } = useContext(ContactContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setName(selectedContact.name);
    setEmail(selectedContact.email);
    setPhone(selectedContact.phone);
  };

  const handleSave = () => {
    editContact({ id: selectedContact.id, name, email, phone });
    setIsEditing(false);
  };

  if (!selectedContact) {
    return <div className="contact-details">Select a contact to see details</div>;
  }

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      {isEditing ? (
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteContact(selectedContact.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
