import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [personalInfoForm, setPersonalInfoForm] = useState({});
  const [experienceForm, setExperienceForm] = useState({});
  const [educationForm, setEducationForm] = useState({});

  const submitPersonalInfoForm = (pinfo) => {
    setPersonalInfoForm(pinfo);
  };

  const submitExperienceForm = (exinfo) => {
    setExperienceForm(exinfo);
  };

  const submitEducationFom = (einfo) => {
    setEducationForm(einfo);
  };

  return (
    <AppContext.Provider
      value={{
        personalInfoForm,
        setPersonalInfoForm,
        submitPersonalInfoForm,
        experienceForm,
        setExperienceForm,
        submitExperienceForm,
        educationForm,
        setEducationForm,
        submitEducationFom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
