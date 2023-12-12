import React from "react";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
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
  );
}

export default ContactList;
