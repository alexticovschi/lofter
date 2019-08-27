import React from "react";

import "./banner.scss";

const Header = () => {
  return (
    <section className="banner">
      <div className="banner__message">
        <h1>Beautifully designed & project-managed interior design</h1>

        <div className="banner__case-study-box">
          <h3>
            <a className="entry-title" href="">
              The Charlestown House
            </a>
          </h3>
          <div className="banner__case-study-box__inner">
            <p>
              {" "}
              This beautifull house, located in the Charlestown village
              has been renovated by our clients, who sought our
              design services to bring the project to a beautiful conclusion and
              ensure that the interior is equally as charming as the property
              itself - together we bought their vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
