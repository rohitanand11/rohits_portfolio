import React from "react";

//style import goes here
import Classes from "./Intro.module.scss";

const Intro = ({ introData }) => {
  console.log(introData);
  return (
    <div className={Classes.Intro}>
      <div className={Classes.profile_header}>
        <div className={Classes.profile_photo_container}>
          <img
            className={Classes.profile_photo}
            src={introData.profile_picture_url}
            alt="portfolio profile "
          ></img>
        </div>

        <div className={Classes.headers}>
          <span className={Classes.main_heading}>
            {introData.greeting_text}
          </span>
          <br />
          <span className={Classes.sub_heading}>{introData.name_heading}</span>
          <br />
          <div className={Classes.textCorousal}>I am a software developer</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
