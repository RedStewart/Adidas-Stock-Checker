import React, { useContext } from 'react';
import Search from '../layout/Search';
import ShoeInfo from '../adidas/ShoeInfo';
import Spinner from '../layout/Spinner';

import AdidasContext from '../../context/adidas/adidasContext';

const Adidas = () => {
  const adidasContext = useContext(AdidasContext);
  const { product, loading } = adidasContext;

  return (
    <section className='main-container'>
      <Search />
      {loading && <Spinner></Spinner>}
      {product ? (
        <ShoeInfo></ShoeInfo>
      ) : (
        <h2>Make component for "Search for a product"</h2>
      )}
    </section>
  );
};

export default Adidas;
