import React, { useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';
import ShoeImage from './ShoeImage';

const ShoeInfo = () => {
  const adidasContext = useContext(AdidasContext);
  const { product } = adidasContext;

  const imageArr = product.view_list;

  return (
    <section id='shoe-info' className='container'>
      <h2>{product.name}</h2>
      <div className='px-1'>
        <h3>{product.attribute_list.color}</h3>
        <h3>
          PID: {product.id} <span className='px-2'>|</span> Price: $
          {product.pricing_information.currentPrice}
          .00 <span className='px-1'>|</span> URL
        </h3>
        {/* <h4>
          URL:{' '}
          <a
            href={'https:' + product.meta_data.canonical}
            target='_blank'
            rel='noopener noreferrer'
          >
            {product.meta_data.canonical.substring(2)}
          </a>
        </h4> */}
        <ShoeImage images={imageArr} />
      </div>
    </section>
  );
};

export default ShoeInfo;
