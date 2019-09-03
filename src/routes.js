import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";
import Gallery from "./pages/Gallery/Gallery";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/interior-design" component={InteriorDesign} />
      <Route path="/gallery" component={Gallery} />
    </Switch> 
  );
};

export default Routes;