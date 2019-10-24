import React, { useContext } from 'react';
import StockItem from './StockItem';
import AdidasContext from '../../context/adidas/adidasContext';

const ProductStock = () => {
  const adidasContext = useContext(AdidasContext);
  const { productStock } = adidasContext;

  return (
    <div>
      <h2>Product Stock</h2>
      <h2>Product Availability: {productStock.availability_status}</h2>
      {productStock.variation_list &&
        productStock.variation_list.map(stockItem => (
          <StockItem stock={stockItem} />
        ))}
    </div>
  );
};

export default ProductStock;
