// src/AddContact.jsx
import React, { useState } from 'react';
import { useContacts } from './ContactContext';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { addContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Contact</button>
    </form>
  );
};

export default AddContact;
