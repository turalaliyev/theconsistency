import React, { useEffect, useState } from 'react';
import LatestCard from '../../UI/LatestCard';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { Skeleton } from 'antd';

export default function LatestNews() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'articles'),
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
    return <Skeleton active />;
  }

  return (
    <div className="mx-2 grid gap-1 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.map(doc => {
        const info = doc.data();
        return <LatestCard info={info} id={doc.id} key={doc.id} />;
      })}
    </div>
  );
}
