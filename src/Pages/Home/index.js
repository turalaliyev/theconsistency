import React from 'react';
import TopNews from '../../TopNews';
import LatestCard from '../../UI/LatestCard';
import EuropeNews from '../../EuropeNews';

function Home() {
  return (
    <div>
      <div className="">
        <div className="mb-3">
          <TopNews />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
        <EuropeNews />
        <EuropeNews />
      </div>
    </div>
  );
}

export default Home;
