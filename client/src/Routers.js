import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import Repos from "./views/Repos";


import PageNotFound from "./views/PageNotFound";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route restricted={false} component={Home} path="/" exact />
        <Route restricted={false} component={Repos} path="/repos" exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;