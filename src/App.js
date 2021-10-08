import {useContext} from 'react';

import GenInfo from './components/GenInfo';
import RenderGeninfo from './components/RenderGenInfo';
import RenderExperience from './components/RenderExperience';
import Experience from './components/Experience';
import Education from './components/Education';
import RenderEducation from './components/RenderEducation';
import { AppContext } from "./components/context";
import './index.css'

function App() {
  const data = useContext(AppContext);


  return (

    <div>
      <div className="navBar">
        <div style={{width: "75%"}}>
        <h1>CV Generator</h1>
        </div>
        <div style={{textAlign: "center"}}>
        <button className="btnNav" onClick={data.loadDefaultInfo}>Load Default Info</button>
        </div>

      </div>

    <div className="main">
      
      <div className="leftDiv">
    <GenInfo/>
    <Experience />
    <Education/>
    </div>

    <div className="rightDiv">
    <RenderGeninfo />
    <RenderExperience />
    <RenderEducation />
    </div>
    </div>
    </div>
  );
}

export default App;
