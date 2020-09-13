import React from "react";

//import from other components
import BackgroundWrapper from "../../hoc/background_wrapper/BackgroundWrapper";

//style import goes here
import Classes from "./Skills.module.scss";

const Skills = () => {
  return (
    <BackgroundWrapper background_style={{ backgroundColor: "black" }}>
      <div className={Classes.Skills}>
          
      </div>
    </BackgroundWrapper>
  );
};

export default Skills;
