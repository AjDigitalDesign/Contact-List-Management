import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHander = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const getLocalStorageContact = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (getLocalStorageContact) setContacts(getLocalStorageContact);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="container">
      <div className="contact-app">
        <header className="header">
          <h2>Contact Management</h2>
        </header>
        <Form addContactHander={addContactHander} />

        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
}

export default App;
