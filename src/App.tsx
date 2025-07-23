import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import FaceCare from './pages/FaceCare';
import BodyCare from './pages/BodyCare';
import BathBody from './pages/BathBody';
import HairCare from './pages/HairCare';
import HandCare from './pages/HandCare';
import EssentialOils from './pages/EssentialOils';
import Shop from './pages/Shop';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

const categoryPaths = [
  '/shop',
  '/face-care',
  '/body-care',
  '/bath-body',
  '/hair-care',
  '/hand-care',
  '/essential-oils',
];

function AppRoutes() {
  const location = useLocation();
  const [barVisible, setBarVisible] = useState(true);
  // Only Home page uses the announcement bar
  const isHome = location.pathname === '/';
  // Pass topOffsetPx=40 (2.5rem) if barVisible and on Home, else 0
  const topOffsetPx = isHome && barVisible ? 40 : 0;
  return (
    <>
      <MainNavbar topOffsetPx={topOffsetPx} />
      <Routes>
        <Route path="/" element={<Home setBarVisible={setBarVisible} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/face-care" element={<FaceCare />} />
        <Route path="/body-care" element={<BodyCare />} />
        <Route path="/bath-body" element={<BathBody />} />
        <Route path="/hair-care" element={<HairCare />} />
        <Route path="/hand-care" element={<HandCare />} />
        <Route path="/essential-oils" element={<EssentialOils />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;