import React from 'react';
import CardWithBgPhoto from '../../UI/CardWithBgPhoto';
import LatestCard from '../../UI/LatestCard';

export default function EconomyPage() {
  const EuropeNews = {
    id: 1,
    title: 'Brussels shooting: Police shoot dead attacker who killed Swedes',
    description:
      'Belgian police have shot dead a man who killed two Swedish nationals in the capital, Brussels, on Monday evening.',
    author: 'Sofia Bettiza',
    date: new Date('2023-10-17'),
    image:
      'https://ichef.bbci.co.uk/news/820/cpsprodpb/14109/production/_131458128_4382023bd983ca977229fb8d2e5d96e0629aab140_461_4700_26452000x1125.jpg',
    category: ['Europe', 'Brussels'],
  };

  return (
    <div>
      <div className="grid m-2 md:h-[25rem] md:grid-cols-2 lg:grid-row-2 lg:grid-cols-4 gap-2 lg:h-[30rem]">
        <div className="bg-blue-gray-600 flex justify-center ">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center ">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-500 flex justify-center items-center lg:col-span-2 lg:row-span-2">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center ">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
        <div className="bg-blue-gray-600 flex justify-center ">
          <CardWithBgPhoto
            title={EuropeNews.title}
            imageUrl={EuropeNews.image}
          />
        </div>
      </div>
      <div className="flex mt-4">
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
      </div>
    </div>
  );
}
