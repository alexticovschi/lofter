import React from "react";

import Banner from "../../components/ContactComponents/Banner/Banner";
import Follow from "../../components/ContactComponents/Follow/Follow";
import Form from "../../components/ContactComponents/Form/Form";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <Banner />
      <Form />
      <Follow />
    </div>
  );
};

export default Contact;
