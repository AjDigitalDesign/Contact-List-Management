import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

function ContactListItem(props) {
  const { name, email, id } = props.contact;

  function handleDeleteClick() {
    props.clickHandler(id);
  }

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td className="status d-flex">
          <span className="edit px-2">
            <PencilIcon width={20} className="text-primary" />
          </span>
          <span className="delete px-1">
            <TrashIcon
              width={20}
              className="text-danger"
              onClick={handleDeleteClick}
            />
          </span>
        </td>
      </tr>
    </>
  );
}

export default ContactListItem;
