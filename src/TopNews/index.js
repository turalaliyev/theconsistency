import React, { useEffect, useState } from 'react';
import { Carousel, Skeleton } from 'antd';
import { TopNewsCart } from '../UI/TopNewsCard';

import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../firebase';

function TopNews() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'articles'),
        where('categories', 'array-contains', 'topnews'),
        where('approved', '==', true),
        limit(5)
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

  if (loading) {
    return (
      <div>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <div>
        <Carousel
          arrows
          autoplay={true}
          infinite={true}
          autoplaySpeed={5000}
          className="relative"
        >
          {data.map(doc => {
            const info = doc.data();
            return (
              <TopNewsCart
                key={doc.id}
                id={doc.id}
                title={info.title}
                date={info.publishDate}
                description={info.description}
                image={info.imageLink}
                author={info.author}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default TopNews;
