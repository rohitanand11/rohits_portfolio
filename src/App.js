import React from 'react';

import Intro from './pages/intro/Intro';
import Projects from './pages/projects/Projects';
import * as utility from './data/config_functions';

import './App.css';

const introData = utility.intro_data();

function App() {
  return (
    <div className="App">
      <Intro introData={introData}/>
      <Projects />
    </div>
  );
}

export default App;
