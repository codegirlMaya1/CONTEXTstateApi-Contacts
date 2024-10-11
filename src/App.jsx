import React, { useEffect } from 'react';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import AddContactForm from './AddContactForm';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import SendNotification from './SendNotification';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        }
      });
    }

    const sections = document.getElementsByClassName("collapsible");
    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener("mouseover", function() {
        const content = this.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }
  }, []);

  return (
    <ContactProvider>
      <div className="container">
        <header className="header bg-red">
          <div className="container-fluid">
            <span className="navbar-brand mx-auto text-white">STORE DATABASE MANAGER</span>
          </div>
        </header>
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="collapsible">Contacts <span className="collapse-button">Collapse Me</span></button>
            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <ContactList />
                </div>
                <div className="col-md-4">
                  <ContactDetails />
                </div>
                <div className="col-md-4">
                  <AddContactForm />
                </div>
              </div>
            </div>
            <button type="button" className="collapsible">Products <span className="collapse-button">Collapse Me</span></button>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <ProductList />
                </div>
                <div className="col-md-6">
                  <NewProductForm />
                </div>
              </div>
            </div>
            <button type="button" className="collapsible">Send Notification <span className="collapse-button">Collapse Me</span></button>
            <div className="content">
              <SendNotification />
            </div>
          </div>
        </div>
        <footer className="footer bg-red">
          <div className="container-fluid text-center">
            <a href="https://th.bing.com/th/id/OIP.f6OHd8iiLKiWsqE_KLbxgAAAAA?w=155&h=200&c=7&r=0&o=5&pid=1.7" target="_blank" rel="noopener noreferrer">
              <img src="https://th.bing.com/th/id/OIP.f6OHd8iiLKiWsqE_KLbxgAAAAA?w=155&h=200&c=7&r=0&o=5&pid=1.7 " alt="Cupcake Logo" className="footer-logo" />
            </a>
            <p>@2024..... Products Notification Template</p>
          </div>
        </footer>
      </div>
    </ContactProvider>
  );
};

export default App;
