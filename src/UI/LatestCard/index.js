import { Card, CardBody } from '@material-tailwind/react';
import { Button } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';

export default function LatestCard(props) {
  return (
    <Card className="w-auto rounded-none">
      <Link to={`/article/${props?.id}`} className="h-full">
        <CardBody className="relative flex flex-col justify-between h-full p-2 md:pb-7">
          {' '}
          {/* Add padding */}
          <Title level={5} className="">
            {' '}
            {/* Add margin-bottom to create space */}
            {props?.info?.title}
          </Title>
          <div className="absolute bottom-1 right-1">
            {' '}
            {/* Absolute positioning */}
            <Button size="small" variant="text">
              REAM MORE
            </Button>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
