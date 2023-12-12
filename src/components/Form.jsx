import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    position: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
    // setContact((prev) => {
    //   return { ...prev, [name]: value };
    // });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const uniqueID = Math.random();

    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.position === ""
    ) {
      alert("All fields must be filled out!");
      return;
    }
    props.addContactHander(contact);
    setContact({ name: "", email: "", position: "" });

    console.log(useNavigate);
    console.log(props);
  }

  return (
    <div className="contact-app_form">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="container">
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="position">
              Position
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Position"
              name="position"
              value={contact.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
