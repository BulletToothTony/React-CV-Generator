import React, { useState, useContext } from "react";
import { AppContext } from "./context";

const Experience = () => {
    const data = useContext(AppContext);

  const [experience, setExperience] = useState({});
  const [editing, setEditing] = useState(true);

  const handleChange = (event) => {
    setExperience((prevInfo) => {
      let newInfo = { ...prevInfo, [event.target.name]: event.target.value };
      return newInfo;
    });

  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // context submit gen info form
    data.submitExperienceForm(experience);
  };
  console.log(editing);

  return (
    <div>
      <h1>Work Experience</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="Position..."
          name="Position"
          disabled={!editing}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Company..."
          name="Company"
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

export default Experience;