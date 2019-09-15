import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

import Layout from "../src/components/HOC/Layout";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interior-design" component={InteriorDesign} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch> 
    </Layout>
  );
};

export default Routes;