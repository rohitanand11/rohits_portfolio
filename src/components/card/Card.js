import React from "react";
import Classes from "./Card.module.scss";
import laptop from "../../assets/images/projects_image/laptop.png";

const Card = (props) => {
  const link = "www.google.com";
  const header = "heading";
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem";
  const tech = "😃😃😃😃😃";

  return (
    <div className={Classes.Card}>
      <a href={link}>
        <div className={Classes.imageContainer}>
          <img src={laptop} alt="current project" />
        </div>
      </a>

      <div className={Classes.Content}>
        <div className={Classes.ContentHeader}>
          <strong>{header}</strong>
        </div>
        <div className={Classes.Description}>{description}</div>
        <div className={Classes.ContentFooter}>
          <strong>{header}</strong>
        </div>
      </div>

      <div className={Classes.Footer}>{tech}</div>
    </div>
  );
};

export default Card;
