import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import FaceCare from './pages/FaceCare';
import BodyCare from './pages/BodyCare';
import BathBody from './pages/BathBody';
import HairCare from './pages/HairCare';
import HandCare from './pages/HandCare';
import EssentialOils from './pages/EssentialOils';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';

const categoryPaths = [
  '/shop',
  '/face-care',
  '/body-care',
  '/bath-body',
  '/hair-care',
  '/hand-care',
  '/essential-oils',
];

function AppNavbars() {
  const location = useLocation();
  const showUpper = categoryPaths.includes(location.pathname);
  return (
    <>
      {showUpper && (
        <nav className="w-full px-4 py-2 flex gap-3 items-center border-b">
          <Link to="/shop" className="font-bold text-lg">Shop</Link>
          <Link to="/face-care">Face Care</Link>
          <Link to="/body-care">Body Care</Link>
          <Link to="/bath-body">Bath & Body</Link>
          <Link to="/hair-care">Hair Care</Link>
          <Link to="/hand-care">Hand Care</Link>
          <Link to="/essential-oils">Essential Oils</Link>
        </nav>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppNavbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/face-care" element={<FaceCare />} />
        <Route path="/body-care" element={<BodyCare />} />
        <Route path="/bath-body" element={<BathBody />} />
        <Route path="/hair-care" element={<HairCare />} />
        <Route path="/hand-care" element={<HandCare />} />
        <Route path="/essential-oils" element={<EssentialOils />} />
        <Route path="/product/:name" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;