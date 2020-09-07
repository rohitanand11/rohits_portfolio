import React from "react";
import Classes from "./BackgroundWrapper.module.scss";

const BackgroundWrapper = ({ children, background_style }) => {
  return (
    <div className={Classes.BackgroundWrapper} style={background_style}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
