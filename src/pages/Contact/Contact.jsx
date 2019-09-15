import React from "react";

import Banner from "../../components/ContactComponents/Banner/Banner";
import Follow from "../../components/ContactComponents/Follow/Follow";
import Form from "../../components/ContactComponents/Form/Form";

import Layout from "../../components/HOC/Layout";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <Layout>
        <Banner />
        <Form />
        <Follow />
      </Layout>
    </div>
  );
};

export default Contact;
