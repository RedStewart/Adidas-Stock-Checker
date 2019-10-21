import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
