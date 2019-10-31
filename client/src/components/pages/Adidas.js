import React, { useContext } from 'react';
import Search from '../layout/Search';
import Spinner from '../layout/Spinner';
import ProductInfo from '../adidas/ProductInfo';
import ProductStock from '../adidas/ProductStock';

import AdidasContext from '../../context/adidas/adidasContext';

const Adidas = () => {
  const adidasContext = useContext(AdidasContext);
  const { product, productStock, loading } = adidasContext;

  return (
    <section className='main-container'>
      <Search />
      {loading && <Spinner></Spinner>}
      {product && productStock ? (
        <div id='adidas-page'>
          <ProductInfo />
          <ProductStock />
        </div>
      ) : (
        <h2>Make component for "Search for a product"</h2>
      )}
    </section>
  );
};

export default Adidas;
