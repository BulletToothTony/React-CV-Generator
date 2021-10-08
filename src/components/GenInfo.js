import React, { useState, useContext } from "react";
import { AppContext } from "./context";

const GenInfo = () => {
  const data = useContext(AppContext);

  const [personalInfo, setPersonalInfo] = useState({});
  const [editing, setEditing] = useState(true);

  const handleChange = (event) => {
    setPersonalInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [event.target.name]: event.target.value };
      return newInfo;
    });

    console.log(personalInfo);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // context submit gen info form
    data.submitPersonalInfoForm(personalInfo);
  };
  console.log(editing);

//   if (!editing) {
//     const inputs = document.getElementsByTagName("input");
//     // Array.from(inputs, (input) => {
//     for (let i = 0; i < inputs.length; i++) {
//       inputs[i].disabled = true;
//     }
//   } else {
//     const inputs = document.getElementsByTagName("input");
//     for (let i = 0; i < inputs.length; i++) {
//       inputs[i].disabled = false;
//     }
//   }

  return (
    <div>
      <h1>Personal Information</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="First Name..."
          name="firstName"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Last Name..."
          name="lastName"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Phone Number..."
          name="PhoneNumber"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Email..."
          name="Email"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Address..."
          name="Address"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Description..."
          name="Description"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={() => setEditing(false)} className="saveBtn">
          Save
        </button>
        <button onClick={() => setEditing(true)} className="editBtn">Edit</button>
      </form>
    </div>
  );
};

export default GenInfo;
