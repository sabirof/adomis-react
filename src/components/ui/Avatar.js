import React from 'react';
import ContentfulImage from './ContentfulImage';

const Avatar = ({ name, picture }) => {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-4'>
        <img
          src={picture.fields.file.url}
          className='rounded-full m-0 w-10 h-10 object-cover'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  );
}

export default Avatar;
