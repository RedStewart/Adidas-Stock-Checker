import React, { useContext } from 'react';
import StockItem from './StockItem';
import AdidasContext from '../../context/adidas/adidasContext';

const ProductStock = () => {
  const adidasContext = useContext(AdidasContext);
  const { availability_status, variation_list } = adidasContext.productStock;

  const getTotalStock = () => {
    let totalStock = 0;
    for (let i = 0; i < variation_list.length; i++) {
      totalStock = totalStock + variation_list[i].availability;
    }
    return totalStock;
  };

  return (
    <div id='product-stock'>
      <h2>Product Stock</h2>
      <h2>Product Availability: {availability_status.replace(/_/g, ' ')}</h2>
      {variation_list && <h2>Total Stock: {getTotalStock()}</h2>}
      <div className='grid-4'>
        {variation_list &&
          variation_list.map(stockItem => <StockItem stock={stockItem} />)}
      </div>
    </div>
  );
};

export default ProductStock;
