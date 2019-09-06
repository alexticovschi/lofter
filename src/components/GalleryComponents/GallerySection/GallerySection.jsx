import React from "react";
import Fade from "react-reveal/Fade";
import ImageZoom from "react-medium-image-zoom";

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
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal1,
                    alt: "Gallery 1",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal1,
                    alt: "Gallery 1"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal2,
                    alt: "Gallery 2",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal2,
                    alt: "Gallery 2"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal3,
                    alt: "Gallery 3",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal3,
                    alt: "Gallery 3"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal4,
                    alt: "Gallery 4",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal4,
                    alt: "Gallery 4"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal5,
                    alt: "Gallery 5",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal5,
                    alt: "Gallery 5"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal6,
                    alt: "Gallery 6",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal6,
                    alt: "Gallery 6"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal7,
                    alt: "Gallery 7",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal7,
                    alt: "Gallery 7"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal8,
                    alt: "Gallery 8",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal8,
                    alt: "Gallery 8"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal9,
                    alt: "Gallery 9",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal9,
                    alt: "Gallery 9"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal10,
                    alt: "Gallery 10",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal10,
                    alt: "Gallery 10"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal11,
                    alt: "Gallery 11",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal11,
                    alt: "Gallery 11"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal12,
                    alt: "Gallery 12",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal12,
                    alt: "Gallery 12"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal13,
                    alt: "Gallery 13",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal13,
                    alt: "Gallery 13"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal14,
                    alt: "Gallery 14",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal14,
                    alt: "Gallery 14"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal15,
                    alt: "Gallery 15",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal15,
                    alt: "Gallery 15"
                  }}
                />
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__item-container">
                <ImageZoom
                  image={{
                    src: gal16,
                    alt: "Gallery 16",
                    className: "gallery__img"
                  }}
                  zoomImage={{
                    src: gal16,
                    alt: "Gallery 16"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default GallerySection;
