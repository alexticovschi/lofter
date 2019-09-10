import React from "react";
import Fade from "react-reveal/Fade";

const ProjectCard = ({ children, imgSrc, projectName }) => {
  return (
    <Fade>
      <div className="project">
        <img src={imgSrc} alt="House 6" className="project__img" />

        <h5 className="project__name">{projectName}</h5>
        <div className="project__description">{children}</div>
        <button className="btn project__btn">Get in Touch</button>
      </div>
    </Fade>
  );
};

export default ProjectCard;
