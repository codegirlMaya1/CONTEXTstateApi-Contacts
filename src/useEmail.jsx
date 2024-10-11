import { useState } from 'react';

const useEmail = () => {
  const sendEmail = (contact, product) => {
    const emailBody = `Hello ${contact.name},\n\nThere is a new product available:\n\nProduct Name: ${product.name}\nPrice: $${product.price.toFixed(2)}\n\nBest regards,\nYour Company`;
    window.location.href = `mailto:${contact.email}?subject=New Product Available&body=${encodeURIComponent(emailBody)}`;
  };

  return { sendEmail };
};

export default useEmail;
