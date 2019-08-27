import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/interior-design" component={InteriorDesign} />
    </Switch> 
  );
};

export default Routes;