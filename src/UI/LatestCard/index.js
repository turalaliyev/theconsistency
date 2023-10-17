import {
  Card,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

export default function LatestCard() {
  const data = {
    id: 1,
    title: 'Britain is supplying depleted uranium round to Ukraine',
    description:
      'British tanks gifted to Ukraine will come equipped with controversial depleted uranium rounds.',
    author: 'Phil Miller',
    date: new Date('2023-03-23'),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Panzer_II_Saumur.JPG/1200px-Panzer_II_Saumur.JPG',
    category: ['Europe', 'Britain'],
  };

  return (
    <Card className="mb-3 mx-2 w-auto rounded-none">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <Typography>{data.description}</Typography>
        <div className='grid justify-items-end'>
          <Button variant="text">Read More</Button>
        </div>
      </CardBody>
    </Card>
  );
}
