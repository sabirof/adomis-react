import React from 'react';

const ContentfulImage = ({ alt, src, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} className="object-cover" />;
};

export default ContentfulImage;
