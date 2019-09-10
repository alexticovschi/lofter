import React from "react";
import Fade from "react-reveal/Fade";
import ImageZoom from "react-medium-image-zoom";

const GalleryItem = ({ source }) => {
  return (
    <figure className="gallery__item">
      <div className="gallery__item-container">
        <Fade>
          <ImageZoom
            image={{
              src: source,
              alt: "Gallery 1",
              className: "gallery__img"
            }}
            zoomImage={{
              src: source,
              alt: "Gallery 1"
            }}
          />
        </Fade>
      </div>
    </figure>
  );
};

export default GalleryItem;
