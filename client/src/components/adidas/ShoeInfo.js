import React, { useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';

const ShoeInfo = () => {
  const adidasContext = useContext(AdidasContext);
  const { product } = adidasContext;

  const imageArr = product.view_list;

  return (
    <>
      <h2>{product.name}</h2>
      <h3>{product.attribute_list.color}</h3>
      <h3>PID: {product.id}</h3>
      <h3>Price: ${product.pricing_information.currentPrice}.00</h3>
      <h4>
        URL:{' '}
        <a href={'https:' + product.meta_data.canonical} target='_blank'>
          {product.meta_data.canonical.substring(2)}
        </a>
      </h4>
    </>
  );
};

export default ShoeInfo;
