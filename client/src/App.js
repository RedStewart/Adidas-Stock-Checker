import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Adidas from './components/pages/Adidas';
import AdidasState from './context/adidas/AdidasState';

const App = () => {
  return (
    <AdidasState>
      <Navbar />
      <Adidas />
    </AdidasState>
  );
};

export default App;
