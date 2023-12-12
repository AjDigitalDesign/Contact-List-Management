import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ContactList />,
//     loader: () => {
//       contacts = { contacts };
//       getContactId = { removeContactHandler };
//     },
//   },
//   {
//     path: "/add",
//     element: <Form />,
//     loader: () => {
//       addContactHander = { addContactHander };
//     },
//   },
// ]);

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
        <Router>
          <Routes>
            <Route
              path="/add"
              element={<Form addContactHander={addContactHander} />}
            />
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              }
            />
          </Routes>
        </Router>
        {/* <Form addContactHander={addContactHander} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </div>
    </div>
  );
}

export default App;
