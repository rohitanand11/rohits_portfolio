import React from "react";
import Typical from 'react-typical';

//import from other components
import BackgroundWrapper from "../../hoc/background_wrapper/BackgroundWrapper";

//style import goes here
import Classes from "./Intro.module.scss";

const Intro = ({ introData }) => {
  console.log(introData);
  return (
    <BackgroundWrapper background_style={{ backgroundColor: "black" }}>
      <div className={Classes.Intro}>
        
          <div className={Classes.profile_photo_container}>
            <img
              className={Classes.profile_photo}
              src={introData.profile_picture_url}
              alt="portfolio profile "
            ></img>
          </div>

          <div className={Classes.headers}>
            <div className={Classes.main_heading}>
              {introData.greeting_text}
            </div>
            <div className={Classes.sub_heading}>
              {introData.name_heading}
            </div>
            <div className={Classes.textCorousal}>
              I am{" "} 
              <Typical
                loop = {Infinity}
                wrapper = "b"
                steps = {introData.text_corousal}
              />
            </div>
          </div>
        
      </div>
    </BackgroundWrapper>
  );
};

export default Intro;
