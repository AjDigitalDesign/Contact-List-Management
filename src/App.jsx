import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHander = (contact) => {
    setContacts([...contacts, contact]);
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

        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
