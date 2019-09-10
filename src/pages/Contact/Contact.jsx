import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/ContactComponents/Banner/Banner";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Contact;
