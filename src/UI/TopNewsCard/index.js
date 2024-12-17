import { Button } from '@material-tailwind/react';
import { Flex } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const contentStyle = {
  margin: 0,
  height: '65vh',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#000',
  position: 'relative',
};

export const TopNewsCart = props => {
  return (
    <div style={contentStyle} className="relative">
      <div className="absolute inset-0 flex justify-center items-center z-1 opacity-[0.4]">
        <img
          src={props.image}
          alt={props.id}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex flex-col h-full justify-between p-4 md:p-10">
        <Flex className="flex-col h-full justify-between">
          <div className="mb-auto">
            {/* Use <h2> and <h4> for titles with responsive font sizes */}
            <h2 className="text-white font-bold text-xl md:text-4xl mb-3 md:mb-5 text-center">
              {props.title}
            </h2>
            <h4 className="text-white text-base md:text-lg text-center">
              {props.description}
            </h4>
          </div>
          <Flex className="flex-row items-end justify-between w-full mb-2 mt-auto">
            <h3 className="text-white text-sm md:text-lg">{props.author}</h3>
            <Link to={`/article/${props.id}`} className="flex md:w-auto">
              <Button variant="outlined" color="white" className="mt-2 md:mt-0">
                Read More
              </Button>
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};
