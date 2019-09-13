import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/ContactComponents/Banner/Banner";
import Follow from "../../components/ContactComponents/Follow/Follow";
import Form from "../../components/ContactComponents/Form/Form";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <Banner />
      <Form />
      <Follow />
      <Footer />
    </div>
  );
};

export default Contact;
