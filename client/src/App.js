import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Spinner from './components/layout/Spinner';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Search />
        <Spinner fillColor='#333' />
      </main>
    </div>
  );
}

export default App;
