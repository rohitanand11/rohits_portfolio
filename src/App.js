import React from 'react';

import Intro from './pages/intro/Intro';
import Projects from './pages/projects/Projects';
import * as utility from './data/config_functions';

import './App.scss';

const introData = utility.intro_data();
const projectData = utility.project_data();

function App() {
  return (
    <div className="App">
      <Intro introData={introData}/>
      <Projects projectData={projectData}/>
    </div>
  );
}

export default App;
