import React from "react";

import LogoBBC from "../../../Resources/img/logo-bbc.png";
import LogoForbes from "../../../Resources/img/logo-forbes.png";
import LogoTech from "../../../Resources/img/logo-techcrunch.png";
import LogoBI from "../../../Resources/img/logo-bi.png";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <span></span>
      <h1 className="heading-1">Interior design service</h1>
      <button className="btn header__btn">View our showrooms</button>
      <div className="header__logos">
        <img src={LogoBBC} alt="Seen on logo 1" />
        <img src={LogoForbes} alt="Seen on logo 2" />
        <img src={LogoTech} alt="Seen on logo 3" />
        <img src={LogoBI} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
