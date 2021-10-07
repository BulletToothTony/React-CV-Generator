import React, {useContext} from 'react';

import {AppContext} from './context';

const RenderGenInfo = () => {
    const data = useContext(AppContext)
    console.log(data)
    return (
        <div className="genInfoDiv">
            <h1>{data.personalInfoForm.firstName} {data.personalInfoForm.lastName}</h1>
            <h2>{data.personalInfoForm.PhoneNumber}</h2>
            <h2>{data.personalInfoForm.Email}</h2>


        </div>
    );
};

export default RenderGenInfo;