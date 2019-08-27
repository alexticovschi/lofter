import React from "react";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/interior-design">Interior Design</a>
            </li>
            <li>
              <a href="/brochures">Brochures</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
