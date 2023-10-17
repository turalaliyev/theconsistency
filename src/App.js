import Footer from './Footer';
import Header from './Header';
import TopNews from './TopNews';
import LatestCard from './UI/LatestCard';
import EuropeNews from './EuropeNews';

function App() {
  return (
    <div>
      <Header />
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
