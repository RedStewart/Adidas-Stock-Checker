import React, { useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';

const ShoeInfo = () => {
  const adidasContext = useContext(AdidasContext);
  const { product } = adidasContext;

  return (
    <>
      <h2>{product.product_description.title}</h2>
      <h3>{product.attribute_list.color}</h3>
    </>
  );
};

export default ShoeInfo;
