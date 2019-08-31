import React from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "./banner.scss";

const Header = () => {
  return (
    <Fade>
      <section className="banner">
        <div className="banner__message">
          <div className="banner__title-box">
            <Fade delay={500}>
              <h1 className="banner__title">
                Beautifully designed interior design projects by the Best
                Interior Designers
              </h1>
            </Fade>
          </div>

          <Fade delay={1200}>
            <div className="banner__case-study-box">
              <h3>
                <a className="entry-title" href="">
                  The Charlestown House
                </a>
              </h3>
              <div className="banner__case-study-box__inner">
                <p>
                  {" "}
                  This beautifull house, located in the Charlestown village has
                  been renovated by our clients, who sought our design services
                  to bring the project to a beautiful conclusion and ensure that
                  the interior is equally as charming as the property itself -
                  together we bought their vision to life.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default Header;
