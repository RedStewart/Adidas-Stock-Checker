import React from 'react';

const StockItem = props => {
  const { availability, availability_status, size } = props.stock;

  return (
    <div
      className={
        availability === 0 || availability_status === 'NOT_AVAILABLE'
          ? 'stock-item stock-oos'
          : 'stock-item'
      }
    >
      <i
        className={
          availability_status === 'IN_STOCK'
            ? 'fas fa-check-circle fa-3x icon-success'
            : 'fas fa-times-circle fa-3x icon-fail'
        }
      ></i>
      <div className='grid-2'>
        <div>
          <h3 className='stock-heading'>Size</h3>
          <h3 className='stock-stat'>{size}</h3>
        </div>

        <div>
          <h3 className='stock-heading'>Count</h3>
          <h3 className='stock-stat'>{availability}</h3>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
