import React from "react";
import BackgroundWrapper from "../../hoc/background_wrapper/BackgroundWrapper";

//component imports goes here
import Card from "../../components/card/Card";
import PageHeader from "../../components/page_header/PageHeader";

//style components goes here
import classes from "./Projects.module.scss";

const Projects = ({projectData}) => {

    const renderProjectCards = () => {
        if(projectData) {
            return projectData.map((project,index)=>{
                return <Card project = {project}/>
            })
        } else {
            return null;
        }
    }

  return (
    <BackgroundWrapper
      background_style={{ backgroundColor: "rgb(150,150,150)" }}
    >
      <div className={classes.Projects}>
        <PageHeader pageTitle="Projects" />
        <div className={classes.ProjectCards}>
          {renderProjectCards()}
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Projects;
