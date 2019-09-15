import React from "react";

import Banner from "../../components/GalleryComponents/Banner/Banner";
import GallerySection from "../../components/GalleryComponents/GallerySection/GallerySection";

import Layout from "../../components/HOC/Layout";

import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Layout>
        <Banner />
        <GallerySection />
      </Layout>
    </div>
  );
};

export default Gallery;
