import React from 'react';
import { Button } from '@material-tailwind/react';

function TopNewsCart(props) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full overflow-hidden z-0">
        <img
          src={props.image}
          alt={props.id}
          className="h-full w-full object-cover object-center brightness-[30%]"
        />
      </div>
      <div className="absolute flex justify-center items-center z-10 h-full w-full">
        <div className="h-3/4 w-3/4 bg-black opacity-50 rounded-3xl"></div>
      </div>
      <div className="absolute h-full w-full flex justify-center items-center z-20 text-[#f3f3f3] indent-1">
        <div className="h-3/4 w-3/4 p-4 pb-6 flex flex-col justify-between">
          <div>
            <p className="mb-3 text-lg md:text-3xl">{props.title}</p>
            <p className=" text-sm lg:text-lg">{props.description}</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <p className="mr-5 md:text-lg">{props.author}</p>
              <p>
                {props.date.getDate()}
                {' / '}
                {props.date.getMonth() + 1} {' / '} {props.date.getFullYear()}
              </p>
            </div>
            <Button variant="text">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNewsCart;
