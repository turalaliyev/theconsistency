import React, { useEffect, useState } from 'react';
import { Typography, Card, Button } from '@material-tailwind/react';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { Flex, Spin } from 'antd';
import { Link } from 'react-router-dom';

export default function EuropeNews(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'articles'),
        where('categories', 'array-contains', props.category),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      setData(querySnapshot.docs);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <Spin spinning={loading} />
      <Typography variant="h4" className="ml-2 mb-3">
        {props.category.toUpperCase()}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map(doc => {
          const info = doc.data();
          return (
            <Card
              key={doc.id}
              className="mb-3 mx-2 w-auto max-w-md rounded-none"
            >
              <Flex className=" object-cover">
                <img
                  className="w-full h-64 object-cover"
                  src={info.imageLink}
                  alt={info.title}
                />
              </Flex>
              <div className="p-2 h-full flex flex-col justify-between">
                <div>
                  <Typography variant="h5">{info.title}</Typography>
                </div>
                <div className="flex justify-between items-center">
                  <Typography variant="h6">{info.author}</Typography>
                  <Link to={`/article/${doc.id}`}>
                    <Button variant="text">READ MORE</Button>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
