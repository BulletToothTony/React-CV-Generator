import GenInfo from './components/GenInfo';
import RenderGeninfo from './components/RenderGenInfo';
import RenderExperience from './components/RenderExperience';
import Experience from './components/Experience';
import Education from './components/Education';
import RenderEducation from './components/RenderEducation';
import './index.css'

function App() {
  return (

    <div>
      <div className="navBar"><h1>CV Generator</h1></div>
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
