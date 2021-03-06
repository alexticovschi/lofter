import React from "react";

import Banner from "../../components/InteriorDesignComponents/Banner/Banner";
import ShowCase1 from "../../components/InteriorDesignComponents/ShowCase1/ShowCase1";
import ShowCase2 from "../../components/InteriorDesignComponents/ShowCase2/ShowCase2";
import MissionAndVision from "../../components/InteriorDesignComponents/MissionAndVision/MissionAndVision";
import Specialization from "../../components/InteriorDesignComponents/Specialization/Specialization";
import Designers from "../../components/InteriorDesignComponents/Designers/Designers";

import "./interiorDesign.scss";

const InteriorDesign = () => {
  return (
    <div className="interior-design-container">
      <Banner />
      <ShowCase1 />
      <ShowCase2 />
      <MissionAndVision />
      <Specialization />
      <Designers />
    </div>
  );
};

export default InteriorDesign;
