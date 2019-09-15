import React from "react";
import Header from "../../components/HomeComponents/Header/Header";
import BestOf from "../../components/HomeComponents/BestOf/BestOf";
import BrandMessage from "../../components/HomeComponents/BrandMessage/BrandMessage";
import Service from "../../components/HomeComponents/Service/Service";
import CommercialFirst from "../../components/HomeComponents/CommercialFirst/CommercialFirst";
import CommercialSecond from "../../components/HomeComponents/CommercialSecond/CommercialSecond";

import Layout from "../../components/HOC/Layout";

import "./home.scss";

const Home = () => (
  <div className="home-container">
    <Layout>
      <Header />
      <BestOf />
      <BrandMessage />
      <CommercialFirst />
      <Service />
      <CommercialSecond />
    </Layout>
  </div>
);

export default Home;
