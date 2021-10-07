import React, { useContext } from "react";

import { AppContext } from "./context";

const RenderEducation = () => {
    const data = useContext(AppContext);
    return (
      <section className="EducationSect">
        <h3>Education</h3>
        <p>{data.educationForm.University}</p>
        <p>{data.educationForm.City}</p>
      </section>
    );
  };

export default RenderEducation;