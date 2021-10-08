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

  const loadDefaultInfo = () => {
    setPersonalInfoForm({
      firstName: "John",
      lastName: "Doe",
      PhoneNumber: "999-9999-9999",
      Email: "JohnDoe@gmail.com",
      Address: "123 Fake Street, Los Angeles",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper lacinia lorem vitae ultricies. Nam ex lorem, luctus eget semper ut, tristique id magna. Cras auctor dolor eget porttitor pharetra. Donec hendrerit, quam eget eleifend pulvinar, lacus turpis bibendum nisi, non sagittis orci arcu eget dolor. Nunc tellus nisl, ultricies sit amet lectus ut, commodo volutpat augue."
    })

    setExperienceForm({
      Position: "Software Engineer",
      Company: "Google",
      City: "Mountain View, California",
      From: "2018",
      To: "Present"
    })

    setEducationForm({
      University: "New York University",
      City: "New York City",
      Degree: "Computer Science",
      From: "2015",
      To: "2018"
    })
  }

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
        loadDefaultInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
