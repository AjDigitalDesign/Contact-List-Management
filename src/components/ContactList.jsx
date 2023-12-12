import React from "react";
import ContactListItem from "./ContactListItem";
import { Link } from "react-router-dom";

function ContactList(props) {
  console.log(props);
  function deleteContactHandler(id) {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactListItem
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <>
      <div className="add-contact mt-3 mb-3">
        <h3>Contact List</h3>
        <Link to="/add">
          <button className="btn btn-primary">Add contact</button>
        </Link>
      </div>
      <div className="contact-app_list">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{renderContactList}</tbody>
        </table>
      </div>
    </>
  );
}

export default ContactList;
