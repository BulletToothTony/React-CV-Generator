import React, { useContext } from "react";

import { AppContext } from "./context";

const RenderGenInfo = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <div className="genInfoDiv">
      <h2 style={{color: "#004DFF"}}>
        {data.personalInfoForm.firstName} {data.personalInfoForm.lastName}
      </h2>
      <h3 className="h2Left">{data.personalInfoForm.PhoneNumber}</h3>
      <h3 className="h2Right">{data.personalInfoForm.Email}</h3>
      <h4>{data.personalInfoForm.Address}</h4>
      <h4 style={{float: "left", marginRight: "10000px"}}>Description</h4>     
      <p style={{fontStyle: "italic"}}>{data.personalInfoForm.Description}</p>
    </div>
  );
};

export default RenderGenInfo;
