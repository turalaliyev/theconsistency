import Footer from './Footer';
import Header from './Header';
import Home from './Pages/Home';
import BusinessPage from './Pages/Business';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EconomyPage from './Pages/Economy';
import WorldPage from './Pages/World';
import AboutPage from './Pages/About';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="economy" element={<EconomyPage />} />
            <Route path="world" element={<WorldPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
