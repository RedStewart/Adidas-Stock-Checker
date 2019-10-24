import React from 'react';

const ProductImage = ({ images }) => {
  // Remove first item from array
  images.splice(0, 1);

  return (
    <>
      {images.map(image => (
        <img src={image.image_url} alt='' width='200' />
      ))}
    </>
  );
};

export default ProductImage;
