import { Typography } from '@material-tailwind/react';
import React from 'react';

const CardWithBgPhoto = props => {
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="bg-opacity-50 bg-gray-900 h-full flex flex-col justify-end items-center p-8">
        <Typography variant="h5" className=" text-white mt-5">
          {props.title}
        </Typography>
      </div>
    </div>
  );
};

export default CardWithBgPhoto;
