import Footer from './Footer';
import Header from './Header';
import Home from './Pages/Home';
import BusinessPage from './Pages/Business';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AsiaPage from './Pages/Asia';
import WorldPage from './Pages/World';
import AboutPage from './Pages/About';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="2xl:flex 2xl:justify-center">
        <div
          className="2xl:w-[1349px] "
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="asia" element={<AsiaPage />} />
            <Route path="world" element={<WorldPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
