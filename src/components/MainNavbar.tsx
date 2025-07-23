import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, ShoppingBag, X, Plus, Minus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const shopCategories = [
  { name: 'Face Care', path: '/face-care' },
  { name: 'Body Care', path: '/body-care' },
  { name: 'Bath & Body', path: '/bath-body' },
  { name: 'Hair Care', path: '/hair-care' },
  { name: 'Hand Care', path: '/hand-care' },
  { name: 'Essential oils', path: '/essential-oils' },
];
const bestSellers = [
  { name: 'Firming face serum Orange', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg' },
  { name: 'Moisturizing hand', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg' },
  { name: 'Nourishing body oil', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg' },
  { name: 'Revitalizing shampoo', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e.jpg' },
  { name: 'Hydrating face mist', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_aeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeae.jpg' },
  { name: 'Soothing bath salt', img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_bebebebebebebebebebebebebebebebebe.jpg' },
];
const sidebarBottomLinks = [
  { label: 'Log in', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact', href: '#' },
];
const countryList = [
  { name: 'United States', code: 'US', flag: '🇺🇸', currency: 'USD' },
  { name: 'United Kingdom', code: 'UK', flag: '🇬🇧', currency: 'GBP' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', currency: 'CAD' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', currency: 'AUD' },
  { name: 'India', code: 'IN', flag: '🇮🇳', currency: 'INR' },
  { name: 'Pakistan', code: 'PAK', flag: 'PAK', currency: 'PAK' },
];

// Add prop types for all sidebar/modal components
interface SidebarProps {
  open: boolean;
  onClose: () => void;
  openSection: 'shop' | 'bestseller' | null;
  setOpenSection: (s: 'shop' | 'bestseller' | null) => void;
}
interface CountrySidebarProps {
  open: boolean;
  onClose: () => void;
  onSelect: (c: typeof countryList[0]) => void;
  selected: typeof countryList[0];
}
interface SearchSidebarProps {
  open: boolean;
  onClose: () => void;
  products: { name: string; img: string }[];
}
interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}
interface ProfilePageProps {
  onLogout: () => void;
  onBack: () => void;
  onCart: () => void;
  onSearch: () => void;
}

function Sidebar({ open, onClose, openSection, setOpenSection }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  const handleToggle = (section: 'shop' | 'bestseller') => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open} />
      <aside ref={sidebarRef} className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} flex flex-col rounded-tr-2xl rounded-br-2xl`} aria-hidden={!open}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tr-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Shop by</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close sidebar"><X size={28} /></button>
        </div>
        <nav className="flex-1 flex flex-col divide-y divide-gray-200 overflow-y-auto">
          <div>
            <button className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none" aria-label="Shop" onClick={() => handleToggle('shop')}>
              <span className={openSection === 'shop' ? 'font-semibold underline underline-offset-4' : ''}>Shop</span>
              {openSection === 'shop' ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openSection === 'shop' && (
              <div className="pl-10 pb-4 flex flex-col gap-2 animate-fade-in">
                {shopCategories.map(cat => (
                  <Link key={cat.name} to={cat.path} className="py-1 text-gray-800 hover:text-green-600 text-sm" onClick={onClose}>{cat.name}</Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none" aria-label="Bestseller" onClick={() => handleToggle('bestseller')}>
              <span className={openSection === 'bestseller' ? 'font-semibold underline underline-offset-4' : ''}>Bestseller</span>
              {openSection === 'bestseller' ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openSection === 'bestseller' && (
              <div className="pl-10 pb-4 flex flex-col gap-2 animate-fade-in">
                <a href="#" className="py-1 text-green-700 font-medium text-sm">View all Bestsellers</a>
                {/* You can add a BestSellerSlider here if needed */}
              </div>
            )}
          </div>
          <div>
            <a href="#" className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none" aria-label="Sale">
              <span>Sale</span>
            </a>
          </div>
        </nav>
        <div className="bg-gray-900 text-white px-6 py-6 mt-auto">
          <div className="flex flex-col gap-3 mb-6">
            {sidebarBottomLinks.map(link => (
              <a key={link.label} href={link.href} className="hover:underline text-sm font-normal">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <span role="img" aria-label="US Flag">🇺🇸</span>
            <span>USD</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </aside>
    </>
  );
}

function CountrySidebar({ open, onClose, onSelect, selected }: CountrySidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open} />
      <aside ref={sidebarRef} className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col rounded-tl-2xl rounded-bl-2xl`} aria-hidden={!open}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tl-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Select Country</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close country sidebar"><X size={28} /></button>
        </div>
        <nav className="flex-1 flex flex-col gap-2 px-6 py-4 overflow-y-auto">
          {countryList.map((country) => (
            <button key={country.code} onClick={() => { onSelect(country); onClose(); }} className={`flex items-center gap-3 py-2 px-2 rounded transition-colors duration-200 font-medium text-left ${selected.code === country.code ? 'bg-gray-100 text-green-700' : 'text-gray-800 hover:text-green-600 hover:bg-gray-50'}`} aria-label={country.name}>
              <span className="text-xl">{country.flag}</span>
              <span>{country.name}</span>
              <span className="ml-auto text-xs text-gray-500">{country.currency}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

function SearchSidebar({ open, onClose, products }: SearchSidebarProps) {
  const [query, setQuery] = useState('');
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);
  const filtered = query.trim() ? products.filter(p => p.name.toLowerCase().includes(query.trim().toLowerCase())) : [];
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open} />
      <aside ref={sidebarRef} className={`fixed top-0 right-0 h-full w-full sm:w-[28rem] max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`} aria-hidden={!open}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <span className="font-serif font-semibold text-lg text-gray-900">Search Products</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close search sidebar"><X size={28} /></button>
        </div>
        <div className="px-6 py-4">
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Search for products..." value={query} onChange={e => setQuery(e.target.value)} autoFocus={open} />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {query.trim() && filtered.length === 0 && (<div className="text-gray-400 text-center mt-8">No products found.</div>)}
          {filtered.length > 0 && (
            <ul className="space-y-4">
              {filtered.map(product => (
                <li key={product.name} className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 overflow-hidden">
                    <img src={product.img} alt={product.name} className="object-contain w-full h-full" />
                  </div>
                  <span className="text-base text-gray-900 font-medium">{product.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}

function CartSidebar({ open, onClose }: CartSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open} />
      <aside ref={sidebarRef} className={`fixed top-0 right-0 h-full w-full sm:w-[28rem] max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`} aria-hidden={!open}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tl-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Your cart</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close cart sidebar"><X size={28} /></button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <ShoppingBag size={40} className="mb-4 text-gray-700" />
          <div className="text-lg font-serif font-semibold mb-2 text-gray-900">Your cart is empty</div>
          <button className="mt-2 mb-8 px-8 py-3 rounded-full bg-black text-white font-semibold tracking-widest text-sm shadow hover:bg-gray-800 transition" onClick={onClose}>CONTINUE SHOPPING</button>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="px-6 pb-8 text-center">
          <div className="text-base text-gray-900 mb-1">Have an account?</div>
          <a href="#" className="text-sm text-black underline hover:text-green-700">Log in</a>
          <span className="text-sm text-gray-500 ml-1">to check out faster.</span>
        </div>
      </aside>
    </>
  );
}

function ProfilePage({ onLogout, onBack, onCart, onSearch }: ProfilePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#232526] to-[#414345] relative overflow-hidden">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md fixed top-0 left-0 z-20">
        <button onClick={onBack} className="p-2 rounded hover:bg-white/20 transition" aria-label="Back to home">
          <ChevronLeft size={28} className="text-green-200" />
        </button>
        <div className="flex items-center gap-2">
          <button className="ml-2 text-pink-200 animate-bounce-slow p-1 rounded hover:bg-white/10 transition" aria-label="Profile" onClick={onBack}><User size={24} /></button>
          <button className="ml-1 text-yellow-200 animate-spin-slow p-1 rounded hover:bg-white/10 transition" aria-label="Cart" onClick={onCart}><ShoppingBag size={22} /></button>
          <button className="ml-1 text-blue-200 animate-pulse p-1 rounded hover:bg-white/10 transition" aria-label="Search" onClick={onSearch}><Search size={22} /></button>
        </div>
        <div style={{ width: 40 }} />
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-green-400/40 via-purple-400/40 to-pink-400/40 fixed top-[4.5rem] left-0 z-10" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-900 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-900 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 animate-fade-in mt-32">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-100 mb-2">My Profile</h2>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-20 h-20 rounded-full bg-green-900/40 flex items-center justify-center text-4xl mb-2 border border-white/20">
            <User size={40} className="text-green-200" />
          </div>
          <div className="text-lg font-semibold text-gray-100">John Doe</div>
          <div className="text-gray-400 text-sm mb-2">johndoe@email.com</div>
        </div>
        <button className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white font-semibold tracking-widest text-base shadow hover:from-green-600 hover:to-purple-600 transition" onClick={onLogout}>Log Out</button>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-spin-slow { animation: spin 2.5s linear infinite; }
        .animate-bounce-slow { animation: bounce 2.5s infinite; }
      `}</style>
    </div>
  );
}

interface MainNavbarProps {
  topOffsetPx?: number;
}

const MainNavbar: React.FC<MainNavbarProps> = ({ topOffsetPx = 0 }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<'shop' | 'bestseller' | null>(null);
  const [countrySidebarOpen, setCountrySidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [searchSidebarOpen, setSearchSidebarOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isNavbarOnWhite, setIsNavbarOnWhite] = useState(location.pathname !== '/');
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Scroll logic for color and show/hide on all pages
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsNavbarOnWhite(location.pathname === '/' ? currentScrollY > heroHeight - 64 : true);
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleShop = () => {
    setSidebarOpen(true);
    setOpenSection('shop');
  };
  const handleBestseller = () => {
    setSidebarOpen(true);
    setOpenSection('bestseller');
  };
  const handleSale = () => {
    setSidebarOpen(true);
    setOpenSection(null);
  };
  const handleProfileClick = () => {
    if (isLoggedIn) {
      setShowProfile(true);
    } else {
      setShowLogin(true);
    }
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowProfile(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfile(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-transparent transition-colors duration-300`}
        style={{
          top: showNavbar ? topOffsetPx : -64,
          transition: 'top 0.3s, background 0.3s',
        }}
      >
        <div className="flex items-center gap-6">
          <button className={isNavbarOnWhite ? 'p-2 text-black' : 'p-2 text-white'} onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
            <Menu size={28} strokeWidth={2} />
          </button>
          <nav className={isNavbarOnWhite ? 'flex items-center gap-6 text-base font-medium ml-2 text-black' : 'flex items-center gap-6 text-base font-medium ml-2 text-white'}>
            <button className="relative group bg-transparent border-none p-0 m-0" onClick={handleShop} style={{ background: 'none' }}>Shop</button>
            <button className="relative group bg-transparent border-none p-0 m-0" onClick={handleBestseller} style={{ background: 'none' }}>Bestseller</button>
            <button className="relative group bg-transparent border-none p-0 m-0" onClick={handleSale} style={{ background: 'none' }}>Sale</button>
          </nav>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <Link to="/" className="font-serif font-bold text-2xl md:text-3xl tracking-tight" style={{ color: isNavbarOnWhite ? 'black' : 'white' }}>Beauty</Link>
        </div>
        <div className={isNavbarOnWhite ? 'flex items-center gap-4 md:gap-6 text-black' : 'flex items-center gap-4 md:gap-6 text-white'}>
          <button className="flex items-center gap-1 text-sm p-2 rounded hover:bg-black/5 transition" onClick={() => setCountrySidebarOpen(true)} aria-label="Select country">
            <span role="img" aria-label={selectedCountry.name + ' Flag'}>{selectedCountry.flag}</span>
            <span>{selectedCountry.currency}</span>
            <span className="text-xs">▼</span>
          </button>
          <button className="p-2" aria-label="Search" onClick={() => setSearchSidebarOpen(true)}><Search size={22} strokeWidth={2} /></button>
          <button className="p-2" aria-label="User" onClick={handleProfileClick}><User size={22} strokeWidth={2} /></button>
          <button className="p-2" aria-label="Cart" onClick={() => setCartSidebarOpen(true)}><ShoppingBag size={22} strokeWidth={2} /></button>
        </div>
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} openSection={openSection} setOpenSection={setOpenSection} />
      <CountrySidebar open={countrySidebarOpen} onClose={() => setCountrySidebarOpen(false)} onSelect={setSelectedCountry} selected={selectedCountry} />
      <SearchSidebar open={searchSidebarOpen} onClose={() => setSearchSidebarOpen(false)} products={bestSellers} />
      <CartSidebar open={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-black" onClick={() => setShowLogin(false)}><X size={24} /></button>
            {/* Replace with your login form or logic */}
            <button className="w-full py-2 mt-4 bg-black text-white rounded" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
      {showProfile && (
        <ProfilePage onLogout={handleLogout} onBack={() => setShowProfile(false)} onCart={() => setCartSidebarOpen(true)} onSearch={() => setSearchSidebarOpen(true)} />
      )}
    </>
  );
};

export default MainNavbar; 