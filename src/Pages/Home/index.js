import React from 'react';
import TopNews from '../../TopNews';
import EuropeNews from '../../EuropeNews';
import LatestNews from '../../components/LatestNews';

function Home() {
  return (
    <div>
      <div className="">
        <div className="mb-1">
          <TopNews />
        </div>
        <LatestNews />
        <EuropeNews category="europe" />
        <EuropeNews category="business" />
        <EuropeNews category="asia" />
      </div>
    </div>
  );
}

export default Home;
