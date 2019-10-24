import React from 'react';

const ShoeImage = ({ images }) => {
  // images.shift();
  images.splice(0, 1);

  console.log(images);

  return (
    <>
      {images.map(image => (
        <img src={image.image_url} alt='' width='200' />
      ))}
    </>
  );
};

export default ShoeImage;
