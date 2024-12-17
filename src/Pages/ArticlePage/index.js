import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Spin } from 'antd';

export default function ArticlePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const params = useParams();

  const getData = async params => {
    setLoading(true);
    try {
      const querySnapshot = await getDoc(doc(db, 'articles', `${params}`));
      const newData = querySnapshot.data();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  console.log(data?.paragraph);

  useEffect(() => {
    getData(params.id);
  }, [params]);

  if (loading) {
    return <Spin spinning={loading} fullscreen />;
  }

  return (
    <>
      {!loading && (
        <div>
          <div className="flex flex-col md:flex-row px-16 py-4 bg-blue-gray-50">
            <div className="flex flex-col justify-between">
              <Typography className="mb-4" variant="h2">
                {data.title}
              </Typography>
              <Typography className="mb-4" variant="p">
                {data.description}
              </Typography>
              <div className="h-80 w-full md:w-[75%]">
                <img
                  src={data.imageLink}
                  alt={data.imageLink}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center">
                <Typography variant="p" className="mr-4">
                  By {data.author}
                </Typography>
                <div className="flex">
                  <div>{data.publishDate}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:ml-32 md:mr-72">
            <div
              className="prose prose-lg mt-4"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
