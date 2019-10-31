import React, { useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';
import ProductImage from './ProductImage';

const ProductInfo = () => {
  const adidasContext = useContext(AdidasContext);
  const { product } = adidasContext;

  const imageArr = product.view_list;

  return (
    <section id='product-section'>
      <h3 className='section-title'>Product</h3>

      <div id='product-info'>
        <ProductImage images={imageArr} />

        <h2>{product.name}</h2>
        <h3 className='product-color'>{product.attribute_list.color}</h3>
        <div className='product-data'>
          <h3>
            PID
            <br />
            <span>{product.id}</span>
          </h3>
          <h3>
            Price
            <br />
            <span>${product.pricing_information.currentPrice}.00</span>
          </h3>
          <h3>Region</h3>

          <a
            href={`https:${product.meta_data.canonical}`}
            target='_blank'
            rel='noopener noreferrer'
            className='product-url btn'
          >
            URL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
