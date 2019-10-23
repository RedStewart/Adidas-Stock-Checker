import React, { useContext } from 'react';
import Search from '../layout/Search';
import Spinner from '../layout/Spinner';

import AdidasContext from '../../context/adidas/adidasContext';

const Adidas = () => {
  const adidasContext = useContext(AdidasContext);
  const { loading } = adidasContext;

  return (
    <section className='main-container'>
      <Search />
      {loading && <Spinner />}

      <h1>Adidas page</h1>
    </section>
  );
};

export default Adidas;
