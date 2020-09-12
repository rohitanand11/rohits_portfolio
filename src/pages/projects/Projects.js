import React from "react";
import BackgroundWrapper from "../../hoc/background_wrapper/BackgroundWrapper";

//component imports goes here
import Card from "../../components/card/Card";
import PageHeader from "../../components/page_header/PageHeader";

//style components goes here
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <BackgroundWrapper
      background_style={{ backgroundColor: "rgb(150,150,150)" }}
    >
      <div className={classes.Projects}>
        <PageHeader pageTitle="Projects" />
        <Card />
      </div>
    </BackgroundWrapper>
  );
};

export default Projects;
