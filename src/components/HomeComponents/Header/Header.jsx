import React from "react";

import LogoBBC from "../../../Resources/img/logo-bbc.png";
import LogoForbes from "../../../Resources/img/logo-forbes.png";
import LogoTech from "../../../Resources/img/logo-techcrunch.png";
import LogoBI from "../../../Resources/img/logo-bi.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import "./header.scss";

const Header = () => {
  return (
    <Fade>
      <header className="header">
        <span></span>
        <Slide left>
          <h1 className="heading-1">Interior design service</h1>
        </Slide>
        <Fade delay={700}>
          <button className="btn header__btn">View our showrooms</button>
        </Fade>
        <div className="header__logos">
          <Zoom>
            <img src={LogoBBC} alt="Seen on logo 1" />
            <img src={LogoForbes} alt="Seen on logo 2" />
            <img src={LogoTech} alt="Seen on logo 3" />
            <img src={LogoBI} alt="Seen on logo 4" />
          </Zoom>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
