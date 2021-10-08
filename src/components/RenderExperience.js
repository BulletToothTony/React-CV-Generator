import React, { useContext } from "react";

import { AppContext } from "./context";

const RenderExperience = () => {
  const data = useContext(AppContext);
  return (
    <section className="ExperienceSect">
      <h3 className="underlined">Experience</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "50%", fontWeight: "bold", textAlign: "center" }}
          >
            <p>
              {data.experienceForm.From} - {data.experienceForm.To}
            </p>
          </div>
          <div style={{ width: "50%", textAlign: "center" }}>
            <p style={{ fontWeight: "bold" }}>{data.experienceForm.Position}</p>
            <p>
              {data.experienceForm.Company}, {data.experienceForm.City}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenderExperience;
