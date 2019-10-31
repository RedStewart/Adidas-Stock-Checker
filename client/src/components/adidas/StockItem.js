import React, { Fragment } from 'react';

const StockItem = props => {
  const { availability, availability_status, size } = props.stock;

  return (
    <div
      className='stock-item'
      style={
        availability_status === 'IN_STOCK'
          ? { borderColor: '#26de81' }
          : { borderColor: '#e84118' }
      }
    >
      <h3>Size: {size}</h3>
      <h3>Count: {availability}</h3>
    </div>
  );
};

export default StockItem;
