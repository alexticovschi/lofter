import React from "react";

import house1 from "../../../Resources/img/house-1.jpeg";
import house2 from "../../../Resources/img/house-2.jpeg";
import house3 from "../../../Resources/img/house-3.jpeg";
import house4 from "../../../Resources/img/house-4.jpeg";
import house5 from "../../../Resources/img/house-5.jpeg";
import house6 from "../../../Resources/img/house-6.jpeg";

import ProjectCard from "../ProjectCard/ProjectCard";

import "./projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <ProjectCard imgSrc={house1} projectName="PROJECT NAME 1">
        <p>
          Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra kinfolk
          pug squid copper mug succulents. Gochujang celiac coloring book, you
          probably haven't heard of them farm-to-table fanny pack live-edge
          mixtape unicorn. Meditation vape seitan scenester mumblecore. Truffaut
          etsy keytar crucifix. 
        </p>
      </ProjectCard>

      <ProjectCard imgSrc={house2} projectName="PROJECT NAME 2">
        <p>
          Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra kinfolk
          pug squid copper mug succulents. Gochujang celiac coloring book, you
          probably haven't heard of them farm-to-table fanny pack live-edge
          mixtape unicorn. Meditation vape seitan scenester mumblecore. Truffaut
          etsy keytar crucifix. 
        </p>
      </ProjectCard>

      <ProjectCard imgSrc={house3} projectName="PROJECT NAME 3">
        <p>
          Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra kinfolk
          pug squid copper mug succulents. Gochujang celiac coloring book, you
          probably haven't heard of them farm-to-table fanny pack live-edge
          mixtape unicorn. Meditation vape seitan scenester mumblecore. Truffaut
          etsy keytar crucifix. 
        </p>
      </ProjectCard>

      <ProjectCard imgSrc={house4} projectName="PROJECT NAME 4">
        <p>
          Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra kinfolk
          pug squid copper mug succulents. Gochujang celiac coloring book, you
          probably haven't heard of them farm-to-table fanny pack live-edge
          mixtape unicorn. Meditation vape seitan scenester mumblecore. Truffaut
          etsy keytar crucifix. 
        </p>
      </ProjectCard>
    </section>
  );
};

export default Projects;
