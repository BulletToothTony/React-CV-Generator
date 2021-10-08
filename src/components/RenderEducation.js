import React, { useContext } from "react";

import { AppContext } from "./context";

const RenderEducation = () => {
  const data = useContext(AppContext);
  return (
    <section className="EducationSect">
      <h3 className="underlined">Education</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "50%", fontWeight: "bold", textAlign: "center" }}
          >
            <p>
              {data.educationForm.From} - {data.educationForm.To}
            </p>
          </div>
          <div style={{ width: "50%", textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>
              {data.educationForm.University}
            </p>
            <p>
              {data.educationForm.City}
            </p>
            <p>
            {data.educationForm.Degree}
            </p>
          </div>
        </div>

        {/* <p>{data.educationForm.University}</p>
        <p>{data.educationForm.City}</p>
        <p>{data.educationForm.Degree}</p>
        <p>{data.educationForm.From}</p>
        <p>{data.educationForm.To}</p> */}
      </div>
    </section>
  );
};

export default RenderEducation;
