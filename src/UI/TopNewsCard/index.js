import { Button } from '@material-tailwind/react';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { Link } from 'react-router-dom';

const contentStyle = {
  margin: 0,
  height: '70vh',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#000',
  position: 'relative',
};

export const TopNewsCart = props => {
  return (
    <>
      <div style={contentStyle}>
        <div className="absolute flex justify-center w-[100%] h-[100%] z-1 opacity-[0.4]">
          <img
            src={props.image}
            alt={props.id}
            className="w-full object-cover"
          />
        </div>
        <div className="relative flex flex-col w-full h-full items-center justify-center p-20">
          <Flex vertical className="h-full justify-between">
            <Flex vertical>
              <Title style={{ color: 'white' }}>{props.title}</Title>
              <Title style={{ color: 'white' }} level={5}>
                {props.description}
              </Title>
            </Flex>
            <Flex className="items-center w-full justify-between p-10 gap-10">
              <Title style={{ color: 'white' }} level={3}>
                {props.author}
              </Title>
              <Link to={`/article/${props.id}`}>
                <Button variant="outlined" color="white">
                  Read More
                </Button>
              </Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};
