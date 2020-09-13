import React from "react";
import Classes from "./Card.module.scss";

const Card = ({ project }) => {
  const renderProjectDeatils = () => {
    if (project) {
      return (
        <React.Fragment>
          <div className={Classes.Card}>
            <a href={project.project_url}>
              <div className={Classes.imageContainer}>
                <img src={project.image_path} alt="current project" />
              </div>
            </a>

            <div className={Classes.Content}>
              <div className={Classes.ContentHeader}>
                {project.project_name}
              </div>
              <div className={Classes.Description}>{project.project_description}</div>
              <div className={Classes.ContentFooter}>
                <a href="www.google.com"><div>visit code</div></a>
                <a href="www.google.com"><div>visit webpage</div></a>
              </div>
            </div>

            <div className={Classes.Footer}></div>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  return renderProjectDeatils();
};

export default Card;
