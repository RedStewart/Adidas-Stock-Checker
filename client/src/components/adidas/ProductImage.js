import React from 'react';

const ProductImage = ({ images }) => {
  // Remove first item from array
  // images.splice(0, 1);

  return (
    <div id='image-flex'>
      <img
        src={images[0].image_url}
        alt='Product Image'
        className='main-image'
      />
      {/* <img src={images[0].image_url} alt='' className='main-image' />
      <img src={images[2].image_url} alt='' className='main-image' />
      <img src={images[3].image_url} alt='' className='main-image' /> */}
    </div>
  );
};

export default ProductImage;
