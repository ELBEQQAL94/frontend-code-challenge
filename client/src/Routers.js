import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DATE_OF_LAST_THIRTY_DAYS } from './const';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Repos from './views/Repos';


import PageNotFound from './views/PageNotFound';

const Routers = () => (
  <Router>
    <Header />
    <Switch>
      <Route restricted={false} component={Home} path="/" exact />
      <Route restricted={false} component={Repos} path={`/repos/${DATE_OF_LAST_THIRTY_DAYS}`} exact />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default Routers;
