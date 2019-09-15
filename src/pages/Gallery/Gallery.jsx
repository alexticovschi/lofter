import React from "react";

import Banner from "../../components/GalleryComponents/Banner/Banner";
import GallerySection from "../../components/GalleryComponents/GallerySection/GallerySection";

import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Banner />
      <GallerySection />
    </div>
  );
};

export default Gallery;
