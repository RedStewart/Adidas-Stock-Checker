import React, { useContext } from 'react';
import StockItem from './StockItem';
import AdidasContext from '../../context/adidas/adidasContext';

const ShoeStock = () => {
  const adidasContext = useContext(AdidasContext);
  const { productStock } = adidasContext;

  return (
    <div>
      <h1>Shoe Stock</h1>
    </div>
  );
};

export default ShoeStock;
