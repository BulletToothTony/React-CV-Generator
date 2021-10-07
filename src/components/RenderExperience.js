import React, { useContext } from "react";

import { AppContext } from "./context";

const RenderExperience = () => {
  const data = useContext(AppContext);
  return (
    <section className="ExperienceSect">
      <h3>Experience</h3>
      <p>{data.experienceForm.Position}</p>
      <p>{data.experienceForm.Company}</p>
    </section>
  );
};

export default RenderExperience;
