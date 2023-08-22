import Footer from './Footer';
import Header from './Header';
import TopNews from './TopNews';
import LatestCard from './UI/LatestCard';

function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 lg:m-4">
        <div className="sm:col-span-3 sm:border-r-2 px-2">
          <TopNews />
        </div>
        <div className="">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
