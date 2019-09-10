import React from "react";
import Fade from "react-reveal/Fade";

import gal1 from "../../../Resources/img/gal1.jpg";
import gal2 from "../../../Resources/img/gal2.jpg";
import gal3 from "../../../Resources/img/gal3.jpg";
import gal4 from "../../../Resources/img/gal4.jpg";
import gal5 from "../../../Resources/img/gal5.jpg";
import gal6 from "../../../Resources/img/gal6.jpg";
import gal7 from "../../../Resources/img/gal7.jpg";
import gal8 from "../../../Resources/img/gal8.jpg";
import gal9 from "../../../Resources/img/gal9.jpg";
import gal10 from "../../../Resources/img/gal10.jpg";
import gal11 from "../../../Resources/img/gal11.jpg";
import gal12 from "../../../Resources/img/gal12.jpg";
import gal13 from "../../../Resources/img/gal13.jpg";
import gal14 from "../../../Resources/img/gal14.jpg";
import gal15 from "../../../Resources/img/gal15.jpg";
import gal16 from "../../../Resources/img/gal16.jpg";

import GalleryItem from "../GalleryItem/GalleryItem";

import "./gallery.scss";

const GallerySection = () => {
  return (
    <Fade delay={1500}>
      <section className="gallery">
        <div>
          <h1 className="gallery__title">
            <Fade left delay={2000}>
              Photos from recent projects
            </Fade>
          </h1>
          <div className="gallery__masonry">
            <GalleryItem source={gal1} />
            <GalleryItem source={gal2} />
            <GalleryItem source={gal3} />
            <GalleryItem source={gal4} />
            <GalleryItem source={gal5} />
            <GalleryItem source={gal6} />
            <GalleryItem source={gal7} />
            <GalleryItem source={gal8} />
            <GalleryItem source={gal9} />
            <GalleryItem source={gal10} />
            <GalleryItem source={gal11} />
            <GalleryItem source={gal12} />
            <GalleryItem source={gal13} />
            <GalleryItem source={gal14} />
            <GalleryItem source={gal15} />
            <GalleryItem source={gal16} />
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default GallerySection;
