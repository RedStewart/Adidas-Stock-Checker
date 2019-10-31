import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Adidas from './components/pages/Adidas';
import LiveDrop from './components/pages/LiveDrop';
import AdidasState from './context/adidas/AdidasState';

const App = () => {
  return (
    <AdidasState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Adidas} />
          <Route exact path='/LiveDrop' component={LiveDrop} />
          {/* <Adidas /> */}
        </Switch>
      </Router>
    </AdidasState>
  );
};

export default App;
