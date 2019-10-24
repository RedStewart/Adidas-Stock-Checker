import React, { useContext } from 'react';
import StockItem from './StockItem';
import AdidasContext from '../../context/adidas/adidasContext';

const ProductStock = () => {
  const adidasContext = useContext(AdidasContext);
  const { availability_status, variation_list } = adidasContext.productStock;

  return (
    <div>
      <h2>Product Stock</h2>
      <h2>Product Availability: {availability_status.replace(/_/g, ' ')}</h2>
      {variation_list &&
        variation_list.map(stockItem => <StockItem stock={stockItem} />)}
    </div>
  );
};

export default ProductStock;
