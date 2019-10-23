import React from 'react';

const ShoeImage = ({ images }) => {
  console.log(images);

  return (
    <>
      <h1>yeet</h1>
      {images.map(image => (
        <img src={image.image_url} alt='' />
      ))}
    </>
  );
};

export default ShoeImage;
