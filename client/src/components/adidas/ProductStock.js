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
    <section id='product-stock-section'>
      <h3 className='section-title'>Stock</h3>

      <div id='product-stock'>
        <div className='product-stock-info'>
          <h2>
            Product Availability: {availability_status.replace(/_/g, ' ')}
          </h2>
          {variation_list && <h2>Total Stock: {getTotalStock()}</h2>}
        </div>

        {adidasContext.productsFiltered === null ? (
          <button
            className='btn'
            onClick={() => adidasContext.filterOOSProducts()}
          >
            Filter OOS Sizes
          </button>
        ) : (
          <button className='btn' onClick={() => adidasContext.clearFilter()}>
            Clear Filter
          </button>
        )}

        <div className='grid-4'>
          {adidasContext.productsFiltered !== null
            ? adidasContext.productsFiltered.map(stockItem => (
                <StockItem stock={stockItem} />
              ))
            : variation_list.map(stockItem => <StockItem stock={stockItem} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductStock;
