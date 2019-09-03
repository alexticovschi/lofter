import React from "react";

import LogoFineArt from "../../../Resources/img/logo-fineart.png";
import LogoIcrave from "../../../Resources/img/logo-icrave.png";
import LogoPen from "../../../Resources/img/logo-pen.png";
import LogoLuxe from "../../../Resources/img/logo-luxe.png";
import LogoInteriors from "../../../Resources/img/logo-interiors.png";
import LogoHudson from "../../../Resources/img/logo-hudson.png";

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
          <h1 className="heading-1 mb-sm">Interior design service</h1>
        </Slide>
        <Fade delay={700}>
          <button className="btn header__btn">View our showrooms</button>
        </Fade>
        <div className="header__logos">
          <Zoom>
            <img src={LogoLuxe} alt="Header logo 1" />
            <img src={LogoHudson} alt="Header logo 2" />
            <img src={LogoIcrave} alt="Header logo 3" />
            <img src={LogoPen} alt="Header logo 4" />
            <img src={LogoInteriors} alt="Header logo 5" />
            <img src={LogoFineArt} alt="Header logo 6" />
          </Zoom>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
