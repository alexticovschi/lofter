import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.scss";

const Toolbar = props => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/">
            <span>Lofter</span>
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/interior-design">Interior Design</Link>
            </li>
            <li>
              <Link to="/brochures">Brochures</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton isOpen={props.isOpen} click={props.drawerClickHandler} />
        </div>
      </nav>
    </div>
  </header>
);

export default Toolbar;
