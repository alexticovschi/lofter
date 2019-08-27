import React from "react";
import chair from "../../../Resources/img/chair.jpg";
import lamp from "../../../Resources/img/lamp.jpg";
import table from "../../../Resources/img/table.jpg";
import chair2 from "../../../Resources/img/chair2.jpg";

import "./bestof.scss";

const BestOf = () => {
  return (
    <section className="bestof__wrapper">
      <div className="bestof">
        <img className="bestof__img" src={chair} alt="chair" />
        <h4 className="heading-4 heading-4--dark">Best chair ever</h4>
        <p className="bestof__text">$189</p>
      </div>
      <div className="bestof">
        <img className="bestof__img" src={lamp} alt="lamp" />
        <h4 className="heading-4 heading-4--dark">Best lamp ever</h4>
        <p className="bestof__text">$189</p>
      </div>
      <div className="bestof">
        <img className="bestof__img" src={table} alt="table" />
        <h4 className="heading-4 heading-4--dark">Best table ever</h4>
        <p className="bestof__text">$189</p>
      </div>
      <div className="bestof">
        <img className="bestof__img" src={chair2} alt="table" />
        <h4 className="heading-4 heading-4--dark">Best chair ever</h4>
        <p className="bestof__text">$189</p>
      </div>
    </section>
  );
};

export default BestOf;
