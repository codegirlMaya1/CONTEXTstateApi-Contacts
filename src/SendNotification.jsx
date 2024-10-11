import React, { useContext, useState } from 'react';
import { ContactContext } from './ContactContext';
import useInventory from './useInventory';
import useEmail from './useEmail';
import './SendNotification.css';

const SendNotification = () => {
  const { contacts } = useContext(ContactContext);
  const { products } = useInventory();
  const { sendEmail } = useEmail();
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSendEmail = () => {
    if (selectedContact && selectedProduct) {
      sendEmail(selectedContact, selectedProduct);
    }
  };

  return (
    <div className="send-notification">
      <h2>Send Notification</h2>
      <div className="form-group">
        <label htmlFor="contact">Select Contact:</label>
        <select id="contact" onChange={(e) => setSelectedContact(contacts.find(contact => contact.id === parseInt(e.target.value)))}>
          <option value="">--Select Contact--</option>
          {contacts.map(contact => (
            <option key={contact.id} value={contact.id}>{contact.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="product">Select Product:</label>
        <select id="product" onChange={(e) => setSelectedProduct(products.find(product => product.id === parseInt(e.target.value)))}>
          <option value="">--Select Product--</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name} - ${product.price.toFixed(2)}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSendEmail} disabled={!selectedContact || !selectedProduct}>Send Email</button>
    </div>
  );
};

export default SendNotification;
