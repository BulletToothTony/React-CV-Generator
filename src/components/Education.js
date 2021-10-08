import React, { useState, useContext } from "react";
import { AppContext } from "./context";

const Education = () => {
  const data = useContext(AppContext);

  const [education, setEducation] = useState({});
  const [editing, setEditing] = useState(true);

  const handleChange = (event) => {
    setEducation((prevInfo) => {
      let newInfo = { ...prevInfo, [event.target.name]: event.target.value };
      return newInfo;
    });
    console.log(education);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // context submit gen info form
    data.submitEducationFom(education);
  };
  console.log(editing);

  return (
    <div>
      <h1>Education</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="University..."
          name="University"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="City..."
          name="City"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Degree..."
          name="Degree"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="From..."
          name="From"
          disabled={!editing}
          onChange={handleChange}
        ></input>
          <input
          type="text"
          placeholder="To..."
          name="To"
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

export default Education;
