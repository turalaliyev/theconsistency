import React, { useEffect, useState } from 'react';
import CardWithBgPhoto from '../../UI/CardWithBgPhoto';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { Spin } from 'antd';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

function AsiaPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'articles'),
        where('categories', 'array-contains', 'asia'),
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

  return (
    <div>
      <Spin spinning={loading} />
      <div className="grid m-2 md:h-[25rem] md:grid-cols-2 lg:grid-row-2 lg:grid-cols-4 gap-2 lg:h-[30rem]">
        {data.map(doc => {
          const info = doc.data();
          return (
            <div className="bg-blue-gray-600 flex justify-center">
              <Link to={`/article/${doc.id}`}>
                <CardWithBgPhoto title={info.title} imageUrl={info.imageLink} />
              </Link>
            </div>
          );
        })}
        {/* <div className="bg-blue-gray-600 flex justify-center">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center items-center lg:col-span-2 lg:row-span-2">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div> */}
      </div>
    </div>
  );
}

export default AsiaPage;
