import React, { useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';
import ProductImage from './ProductImage';

const ProductInfo = () => {
  const adidasContext = useContext(AdidasContext);
  const { product } = adidasContext;

  const imageArr = product.view_list;

  return (
    <section id='product-info'>
      <ProductImage images={imageArr} />

      <h2>{product.name}</h2>
      <div className=''>
        <h3>{product.attribute_list.color}</h3>
        <h3>
          PID: {product.id} <span className='px-2'>|</span> Price: $
          {product.pricing_information.currentPrice}
          .00 <span className='px-2'>|</span>
          <a
            href={`https:${product.meta_data.canonical}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            URL
          </a>
        </h3>
      </div>
    </section>
  );
};

export default ProductInfo;
