import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import ColaborationBim from '../src/pages/ColaborationBim';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/colaboration" component={ColaborationBim} />
    </BrowserRouter>
  );
}

export default Routes;