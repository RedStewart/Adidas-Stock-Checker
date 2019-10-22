import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Adidas from './components/pages/Adidas';


const App = () => {
  return (
    <div>
      <Navbar />
      <Adidas />
    </div>
  );
}

export default App;
