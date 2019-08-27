import React from "react";

import house1 from "../../Resources/img/house-1.jpeg";
import house2 from "../../Resources/img/house-2.jpeg";
import house3 from "../../Resources/img/house-3.jpeg";
import house4 from "../../Resources/img/house-4.jpeg";
import house5 from "../../Resources/img/house-5.jpeg";
import house6 from "../../Resources/img/house-6.jpeg";

import "./projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="project">
        <img src={house1} alt="House 1" className="project__img" />

        <h5 className="project__name">RESIDENTIAL DESIGN</h5>
        <div className="project__description">
          <p>
            We assist in creating spaces that respond to the precise needs of
            each client. At LOFTER interiors we offer the design skills and
            experience to deliver a comprehensive interior/environment to bring
            your vision to reality. We can work in partnerships/collaboration
            with your own architects and designers or assist in creating an
            innovative concept for you.
          </p>
        </div>

        <button className="btn project__btn">Get in Touch</button>
      </div>

      <div className="project">
        <img src={house2} alt="House 2" className="project__img" />

        <h5 className="project__name">PROPERTY STAGING</h5>
        <div className="project__description">
          <p>
            Are you struggling to attract buyers? The property staging team at
            LOFTER Interiors guarantee to add value and assist in the sale of
            your property. Our experienced team will envision the lifestyle you
            wish to depict through furniture, accessories, prints and mirrors.
            Allowing prospective buyers to see each properties full potential.
          </p>
        </div>
        <button className="btn project__btn">Get in Touch</button>
      </div>

      <div className="project">
        <img src={house3} alt="House 3" className="project__img" />

        <h5 className="project__name">SHOW HOMES</h5>
        <div className="project__description">
          <p>
            LOFTER Interiors provide a bespoke design solution for your show
            homes. Our desingers have a wealth of experience to offer and
            understand the importance of utilising your space to create an
            inviting home that reflects the purchase needs. We offer a tailored
            design to fit your requirements, budgets and location to ensure we
            maximise the selling potential for your homes.
          </p>
        </div>
        <button className="btn project__btn">Get in Touch</button>
      </div>

      <div className="project">
        <img src={house4} alt="House 4" className="project__img" />

        <h5 className="project__name">RESIDENTIAL DESIGN</h5>
        <div className="project__description">
          <p>
            We assist in creating spaces that respond to the precise needs of
            each client. At LOFTER interiors we offer the design skills and
            experience to deliver a comprehensive interior/environment to bring
            your vision to reality. We can work in partnerships/collaboration
            with your own architects and designers or assist in creating an
            innovative concept for you.
          </p>
        </div>
        <button className="btn project__btn">Get in Touch</button>
      </div>

      <div className="project">
        <img src={house5} alt="House 5" className="project__img" />

        <h5 className="project__name">SHOW HOMES</h5>
        <div className="project__description">
          <p>
            LOFTER Interiors provide a bespoke design solution for your show
            homes. Our desingers have a wealth of experience to offer and
            understand the importance of utilising your space to create an
            inviting home that reflects the purchase needs. We offer a tailored
            design to fit your requirements, budgets and location to ensure we
            maximise the selling potential for your homes.
          </p>
        </div>
        <button className="btn project__btn">Get in Touch</button>
      </div>

      <div className="project">
        <img src={house6} alt="House 6" className="project__img" />

        <h5 className="project__name">PROPERTY STAGING</h5>
        <div className="project__description">
          <p>
            Are you struggling to attract buyers? The property staging team at
            LOFTER Interiors guarantee to add value and assist in the sale of
            your property. Our experienced team will envision the lifestyle you
            wish to depict through furniture, accessories, prints and mirrors.
            Allowing prospective buyers to see each properties full potential.
          </p>
        </div>
        <button className="btn project__btn">Get in Touch</button>
      </div>
    </section>
  );
};

export default Projects;
