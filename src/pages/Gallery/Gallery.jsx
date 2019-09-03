import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/GalleryComponents/Banner/Banner";
import GallerySection from "../../components/GalleryComponents/GallerySection/GallerySection";

import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Navbar />
      <Banner />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;
