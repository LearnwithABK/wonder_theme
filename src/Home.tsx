import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, User, ShoppingBag, X, Plus, Minus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';
import aboutImg1 from './public/Assist/about1.jpg'; // Replace with your image path
import aboutImg2 from './public/Assist/about2.jpg'; // Replace with your image path
import CategoryShowcase from './pages/CategoryShowcase';

const HERO_VIDEO = 'https://www.w3schools.com/howto/rain.mp4'; // Placeholder video, replace with your own

const shopCategories = [
  { name: 'Face Care', path: '/face-care' },
  { name: 'Body Care', path: '/body-care' },
  { name: 'Bath & Body', path: '/bath-body' },
  { name: 'Hair Care', path: '/hair-care' },
  { name: 'Hand Care', path: '/hand-care' },
  { name: 'Essential oils', path: '/essential-oils' },
];

const bestSellers = [
  {
    name: 'Firming face serum Orange',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
  },
  {
    name: 'Moisturizing hand',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
  },
  {
    name: 'Nourishing body oil',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg',
  },
  {
    name: 'Revitalizing shampoo',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e.jpg',
  },
  {
    name: 'Hydrating face mist',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_aeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeae.jpg',
  },
  {
    name: 'Soothing bath salt',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_bebebebebebebebebebebebebebebebebe.jpg',
  },
];

const sidebarBottomLinks = [
  { label: 'Log in', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact', href: '#' },
];

const marqueeMessages = [
  'Free Shipping Over $50! Returns are always on us.',
  '24/7 Customer Support',
  'New: Summer Collection Out Now!',
  'Secure Payments',
  'Easy Returns',
];

const TopSlideTag = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="hidden lg:flex fixed top-0 left-0 w-full z-50 justify-center select-none">
      <div
        className="relative overflow-hidden bg-[#f4f7ec] text-black text-xs md:text-sm px-0 py-2 shadow w-full"
        style={{ height: '2.5rem' }}
      >
        {/* Cross button on right */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded hover:bg-gray-200 transition"
          style={{ pointerEvents: 'auto' }}
          aria-label="Close announcement bar"
          onClick={onClose}
        >
          <X size={16} />
        </button>
        <div
          className="absolute left-0 top-0 w-full h-full flex items-center pr-8"
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="marquee whitespace-nowrap w-full h-full flex items-center group hover:[animation-play-state:paused]"
            style={{
              animation: 'marquee 18s linear infinite',
              pointerEvents: 'auto',
            }}
          >
            {Array(3).fill(null).map((_, repeatIdx) => (
              <span key={repeatIdx} className="flex items-center">
                {marqueeMessages.map((msg, i) => (
                  <span
                    key={msg + i + repeatIdx}
                    className="inline-block mx-6 transition-all group-hover:underline group-hover:font-bold cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                  >
                    {msg}
                    {i !== marqueeMessages.length - 1 && (
                      <span className="mx-3 text-lg align-middle">&bull;</span>
                    )}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

function BestSellerSlider() {
  const [index, setIndex] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 2;
  const maxIndex = bestSellers.length - visibleCount;
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive: update visibleCount on resize
  useEffect(() => {
    function handleResize() {
      setIndex(0); // Reset to start on resize
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => setIndex(i => Math.max(0, i - 1));
  const handleNext = () => setIndex(i => Math.min(maxIndex, i + 1));

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * index / visibleCount;
      containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [index, visibleCount]);

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-1 shadow hover:bg-gray-100 disabled:opacity-30"
        onClick={handlePrev}
        disabled={index === 0}
        aria-label="Previous"
        style={{ display: bestSellers.length > visibleCount ? 'block' : 'none' }}
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6"
        style={{ scrollBehavior: 'smooth' }}
      >
        {bestSellers.map((product, i) => (
          <div key={product.name} className="flex flex-col items-center w-28 flex-shrink-0">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-100 mb-2 overflow-hidden">
              <img src={product.img} alt={product.name} className="object-contain w-full h-full" />
            </div>
            <span className="text-xs text-center text-gray-900">{product.name}</span>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-1 shadow hover:bg-gray-100 disabled:opacity-30"
        onClick={handleNext}
        disabled={index === maxIndex}
        aria-label="Next"
        style={{ display: bestSellers.length > visibleCount ? 'block' : 'none' }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

function Sidebar({ open, onClose, openSection, setOpenSection }: { open: boolean; onClose: () => void; openSection: 'shop' | 'bestseller' | null; setOpenSection: (s: 'shop' | 'bestseller' | null) => void }) {
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

  // Only one section open at a time
  const handleToggle = (section: 'shop' | 'bestseller') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} flex flex-col rounded-tr-2xl rounded-br-2xl`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tr-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Shop by</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close sidebar"><X size={28} /></button>
        </div>
        {/* Main items as accordion */}
        <nav className="flex-1 flex flex-col divide-y divide-gray-200 overflow-y-auto">
          {/* Shop section */}
          <div>
            <button
              className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none"
              aria-label="Shop"
              onClick={() => handleToggle('shop')}
            >
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
          {/* Bestseller section */}
          <div>
            <button
              className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none"
              aria-label="Bestseller"
              onClick={() => handleToggle('bestseller')}
            >
              <span className={openSection === 'bestseller' ? 'font-semibold underline underline-offset-4' : ''}>Bestseller</span>
              {openSection === 'bestseller' ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openSection === 'bestseller' && (
              <div className="pl-10 pb-4 flex flex-col gap-2 animate-fade-in">
                <a href="#" className="py-1 text-green-700 font-medium text-sm">View all Bestsellers</a>
                <BestSellerSlider />
              </div>
            )}
          </div>
          {/* Sale section (simple link) */}
          <div>
            <a
              href="#"
              className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 font-medium text-base hover:bg-gray-50 focus:outline-none"
              aria-label="Sale"
            >
              <span>Sale</span>
            </a>
          </div>
        </nav>
        {/* Bottom section */}
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

const countryList = [
  { name: 'United States', code: 'US', flag: '🇺🇸', currency: 'USD' },
  { name: 'United Kingdom', code: 'UK', flag: '🇬🇧', currency: 'GBP' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', currency: 'CAD' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', currency: 'AUD' },
  { name: 'India', code: 'IN', flag: '🇮🇳', currency: 'INR' },
  { name: 'Pakistan', code: 'PAK', flag: 'PAK', currency: 'PAK' },
];

function CountrySidebar({ open, onClose, onSelect, selected }: { open: boolean; onClose: () => void; onSelect: (c: typeof countryList[0]) => void; selected: typeof countryList[0] }) {
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
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col rounded-tl-2xl rounded-bl-2xl`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tl-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Select Country</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close country sidebar"><X size={28} /></button>
        </div>
        {/* Country list */}
        <nav className="flex-1 flex flex-col gap-2 px-6 py-4 overflow-y-auto">
          {countryList.map((country) => (
            <button
              key={country.code}
              onClick={() => { onSelect(country); onClose(); }}
              className={`flex items-center gap-3 py-2 px-2 rounded transition-colors duration-200 font-medium text-left ${selected.code === country.code ? 'bg-gray-100 text-green-700' : 'text-gray-800 hover:text-green-600 hover:bg-gray-50'}`}
              aria-label={country.name}
            >
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

function SearchSidebar({ open, onClose, products }: { open: boolean; onClose: () => void; products: typeof bestSellers }) {
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
  const filtered = query.trim()
    ? products.filter(p => p.name.toLowerCase().includes(query.trim().toLowerCase()))
    : [];
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[28rem] max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <span className="font-serif font-semibold text-lg text-gray-900">Search Products</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close search sidebar"><X size={28} /></button>
        </div>
        {/* Search input */}
        <div className="px-6 py-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Search for products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus={open}
          />
        </div>
        {/* Results */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {query.trim() && filtered.length === 0 && (
            <div className="text-gray-400 text-center mt-8">No products found.</div>
          )}
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

function CartSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[28rem] max-w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-tl-2xl">
          <span className="font-serif font-semibold text-lg text-gray-900">Your cart</span>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900" aria-label="Close cart sidebar"><X size={28} /></button>
        </div>
        {/* Cart content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <ShoppingBag size={40} className="mb-4 text-gray-700" />
          <div className="text-lg font-serif font-semibold mb-2 text-gray-900">Your cart is empty</div>
          <button
            className="mt-2 mb-8 px-8 py-3 rounded-full bg-black text-white font-semibold tracking-widest text-sm shadow hover:bg-gray-800 transition"
            onClick={onClose}
          >
            CONTINUE SHOPPING
          </button>
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

function ProfilePage({ onLogout, onBack, onCart, onSearch }: { onLogout: () => void; onBack: () => void; onCart: () => void; onSearch: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#232526] to-[#414345] relative overflow-hidden">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md fixed top-0 left-0 z-20">
        <button onClick={onBack} className="p-2 rounded hover:bg-white/20 transition" aria-label="Back to home">
          <ChevronLeft size={28} className="text-green-200" />
        </button>
        <div className="flex items-center gap-2">
          <button className="ml-2 text-pink-200 animate-bounce-slow p-1 rounded hover:bg-white/10 transition" aria-label="Profile" onClick={onBack}><User size={24} /></button>
          <button className="ml-1 text-yellow-200 animate-spin-slow p-1 rounded hover:bg-white/10 transition" aria-label="Cart" onClick={onCart}><ShoppingBag size={22} /></button>
          <button className="ml-1 text-blue-200 animate-pulse p-1 rounded hover:bg-white/10 transition" aria-label="Search" onClick={onSearch}><Search size={22} /></button>
        </div>
        <div style={{ width: 40 }} /> {/* Spacer for symmetry */}
      </div>
      {/* Gradient accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-green-400/40 via-purple-400/40 to-pink-400/40 fixed top-[4.5rem] left-0 z-10" />
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-900 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-900 rounded-full blur-3xl opacity-30 animate-pulse" />
      {/* Profile Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 animate-fade-in mt-32">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-100 mb-2">My Profile</h2>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-20 h-20 rounded-full bg-green-900/40 flex items-center justify-center text-4xl mb-2 border border-white/20">
            <User size={40} className="text-green-200" />
          </div>
          <div className="text-lg font-semibold text-gray-100">John Doe</div>
          <div className="text-gray-400 text-sm mb-2">johndoe@email.com</div>
        </div>
        <button
          className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white font-semibold tracking-widest text-base shadow hover:from-green-600 hover:to-purple-600 transition"
          onClick={onLogout}
        >
          Log Out
        </button>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
      `}</style>
    </div>
  );
}

const ShowcaseSection = () => (
  <section className="bg-[#faf3e8] py-32">
    <div className="max-w-8xl mx-auto text-center">
      <div className="mb-4 text-zinc-900">Empower Your Skin care</div>
      <div className="text-4xl md:text-5xl font-serif ">
        The harmony between powerful
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="powerful" className="inline-block rounded-full mx-2" />
        high-performance ingredients
        <br />
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="showing" className="inline-block rounded-full mx-2" />
        and exceptionally simple skincare routines.
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="skincare" className="inline-block rounded-full mx-2" />
      </div>
    </div>

  </section>
);

const Header = ({ onMenu, onShop, onBestseller, onSale, onCountryClick, country, onSearchClick, onCartClick, onProfileClick, isNavbarOnWhite }: { onMenu: () => void; onShop: () => void; onBestseller: () => void; onSale: () => void; onCountryClick: () => void; country: typeof countryList[0]; onSearchClick: () => void; onCartClick: () => void; onProfileClick: () => void; isNavbarOnWhite: boolean }) => (
  <header className="top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-transparent">
    {/* Left: Hamburger and nav */}
    <div className="flex items-center gap-6">
      <button className={isNavbarOnWhite ? 'p-2 text-black' : 'p-2 text-white'} onClick={onMenu} aria-label="Open sidebar"><Menu size={28} strokeWidth={2} /></button>
      <nav className={isNavbarOnWhite ? 'flex items-center gap-6 text-base font-medium ml-2 text-black' : 'flex items-center gap-6 text-base font-medium ml-2 text-white'}>
        <a href="#" className="relative group" onClick={e => { e.preventDefault(); onShop(); }}>
          Shop
          <span className={isNavbarOnWhite ? "absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" : "absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"} />
        </a>
        <a href="#" className="relative group" onClick={e => { e.preventDefault(); onBestseller(); }}>
          Bestseller
          <span className={isNavbarOnWhite ? "absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" : "absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"} />
        </a>
        <a href="#" className="relative group" onClick={e => { e.preventDefault(); onSale(); }}>
          Sale
          <span className={isNavbarOnWhite ? "absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" : "absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"} />
        </a>
      </nav>
    </div>
    {/* Right: icons and country */}
    <div className={isNavbarOnWhite ? 'flex items-center gap-4 md:gap-6 text-black' : 'flex items-center gap-4 md:gap-6 text-white'}>
      <button
        className="flex items-center gap-1 text-sm p-2 rounded hover:bg-black/5 transition"
        onClick={onCountryClick}
        aria-label="Select country"
      >
        <span role="img" aria-label={country.name + ' Flag'}>{country.flag}</span>
        <span>{country.currency}</span>
        <span className="text-xs">▼</span>
      </button>
      <button className="p-2" aria-label="Search" onClick={onSearchClick}><Search size={22} strokeWidth={2} /></button>
      <button className="p-2" aria-label="User" onClick={onProfileClick}><User size={22} strokeWidth={2} /></button>
      <button className="p-2" aria-label="Cart" onClick={onCartClick}><ShoppingBag size={22} strokeWidth={2} /></button>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    {/* Video background */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={HERO_VIDEO}
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Overlay for darkening if needed */}
    <div className="absolute inset-0 bg-black/10 z-10" />
    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
      <h1
        className="text-white text-[clamp(4rem,18vw,16rem)] font-serif font-bold leading-none text-center drop-shadow-lg"
        style={{ fontFamily: 'serif', fontWeight: 700 }}
      >
        beauty
      </h1>
      <div className="mt-72 text-white tracking-widest text-sm md:text-base font-semibold text-center">
        WHERE SKINCARE BEGINS
      </div>
      {/* Down arrow */}
      <div className="mt-12 animate-bounce text-white text-2xl">&#8595;</div>
    </div>
  </section>
);

// In Home, manage bar visibility and margin for header
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<'shop' | 'bestseller' | null>(null);
  const [barVisible, setBarVisible] = useState(true);
  const [countrySidebarOpen, setCountrySidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [searchSidebarOpen, setSearchSidebarOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isNavbarOnWhite, setIsNavbarOnWhite] = useState(false);
  const lastScrollY = useRef(0);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [aboutImgTranslateY, setAboutImgTranslateY] = useState(200);
  const [aboutImgOpacity, setAboutImgOpacity] = useState(0);
  const [aboutSticky, setAboutSticky] = useState(false);
  const [aboutScrollProgress, setAboutScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Detect if navbar is over a white background (after hero section)
      const heroHeight = window.innerHeight * 0.8; // adjust as needed
      setIsNavbarOnWhite(currentScrollY > heroHeight - 64); // 64px header height
      if (currentScrollY < 10) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setShowHeader(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!aboutSectionRef.current) return;
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = aboutSectionRef.current.offsetHeight;
      const sectionTop = rect.top + window.scrollY;
      const scrollY = window.scrollY;
      // When About section is in viewport, pin it and animate images
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        setAboutSticky(true);
        // Calculate progress: 0 (just entered) to 1 (about to leave)
        const progress = Math.min(1, Math.max(0, (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight)));
        setAboutScrollProgress(progress);
        setAboutImgTranslateY(200 - 400 * progress); // from 200px (bottom) to -200px (top)
        setAboutImgOpacity(progress > 0 && progress < 1 ? 1 : 0);
      } else {
        setAboutSticky(false);
        setAboutImgOpacity(0);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers for header links
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

  // Show login or profile page exclusively
  if (showLogin) {
    return <LoginPage onLogin={handleLogin} onCreateAccount={() => {/* TODO: show create account page */ }} />;
  }
  if (showProfile) {
    return <ProfilePage onLogout={handleLogout} onBack={() => setShowProfile(false)} onCart={() => setCartSidebarOpen(true)} onSearch={() => setSearchSidebarOpen(true)} />;
  }

  const brandNames = [
    'ILIA', 'mokosh', 'ODACITÉ', 'OSEA', 'keeko.', 'BKIND', 'mokosh', 'ACURE'
  ];

  return (
    <div className="relative min-h-screen w-full pt-0">
      {barVisible && <TopSlideTag onClose={() => setBarVisible(false)} />}
      <div className={barVisible ? 'lg:mt-[2.5rem]' : ''}>
        <div style={{
          transition: 'top 0.3s',
          position: 'fixed',
          top: showHeader ? (barVisible ? '2.5rem' : 0) : '-4rem',
          left: 0,
          width: '100%',
          zIndex: 50
        }}>
          <Header
            onMenu={() => setSidebarOpen(true)}
            onShop={handleShop}
            onBestseller={handleBestseller}
            onSale={handleSale}
            onCountryClick={() => setCountrySidebarOpen(true)}
            country={selectedCountry}
            onSearchClick={() => setSearchSidebarOpen(true)}
            onCartClick={() => setCartSidebarOpen(true)}
            onProfileClick={handleProfileClick}
            isNavbarOnWhite={isNavbarOnWhite}
          />
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} openSection={openSection} setOpenSection={setOpenSection} />
      <CountrySidebar
        open={countrySidebarOpen}
        onClose={() => setCountrySidebarOpen(false)}
        onSelect={setSelectedCountry}
        selected={selectedCountry}
      />
      <SearchSidebar
        open={searchSidebarOpen}
        onClose={() => setSearchSidebarOpen(false)}
        products={bestSellers}
      />
      <CartSidebar
        open={cartSidebarOpen}
        onClose={() => setCartSidebarOpen(false)}
      />
      <Hero />
      <ShowcaseSection />
      {/* Full-width, full-height image section */}
      <section className="relative w-full h-[55vh] md:h-[75vh] lg:h-[85vh] overflow-hidden mb-32">
        <div className="flex w-full h-full mb-4">
          <div className="flex-1 flex flex-col items-center justify-end relative h-[full] bg-[#fbe9d6] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="product" className="object-cover w-full h-full absolute top-0 left-0 z-0" />
            <div className="relative z-10 p-8 text-center bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
              <div className="text-2xl font-serif font-bold text-white mb-2">Orchid</div>
              <div className="text-white mb-6">Orchid Antioxidant Beauty Face Oil</div>
              <button className="px-6 py-2 mb-6 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white shadow">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end relative h-[full] bg-[#fbe9d6] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="product" className="object-cover w-full h-full absolute top-0 left-0 z-0" />
            <div className="relative z-10 p-8 text-center bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
              <div className="text-2xl font-serif font-bold text-white mb-2">Lavender</div>
              <div className="text-white mb-6">Lavender Hydrating Face Mist</div>
              <button className="px-6 py-2 mb-6 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white shadow">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end relative h-[full] bg-[#fbe9d6] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="product" className="object-cover w-full h-full absolute top-0 left-0 z-0" />
            <div className="relative z-10 p-8 text-center bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
              <div className="text-2xl font-serif font-bold text-white mb-2">Rose</div>
              <div className="text-white mb-6">Rose Nourishing Body Oil</div>
              <button className="px-6 py-2 mb-6 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white shadow">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section at the end, full screen height */}
      <section
        ref={aboutSectionRef}
        className={`w-full min-h-screen flex flex-col items-center justify-center text-center bg-white relative overflow-hidden ${aboutSticky ? 'fixed top-0 left-0 h-screen z-[60]' : ''}`}
        style={aboutSticky ? { width: '100vw' } : {}}
      >
        {/* Animated Images */}
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80" // left image
          alt="About Left"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '340px',
            maxWidth: '40vw',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            transform: `translateY(${aboutImgTranslateY}px) rotate(-8deg)`,
            opacity: aboutImgOpacity,
            transition: 'transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)',
            zIndex: 2,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80" // right image
          alt="About Right"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '340px',
            maxWidth: '40vw',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            transform: `translateY(${aboutImgTranslateY}px) rotate(8deg)`,
            opacity: aboutImgOpacity,
            transition: 'transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)',
            zIndex: 2,
          }}
        />
        <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-tight font-serif mb-8 text-zinc-900">
          Where Every Skincare Moment<br className='hidden md:block' />Counts.
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-700 mb-10">
          At Beauty, we believe that skincare isn't just a routine; it's a journey of self-care and self-discovery. Our-Beauty curated selection of premium skincare products is designed to elevate your beauty regimen, offering you a sanctuary of indulgence and transformation.
        </p>
        <button className="px-8 py-3 rounded-full bg-black text-white font-semibold tracking-widest text-base shadow hover:bg-zinc-800 transition uppercase letter-spacing-wider">About Us</button>
      </section>
      {/* Brand/Logo Strip Section */}
      <section className="w-full bg-white py-12 mt-8 flex flex-col items-center justify-center">
        <div className="mb-8">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-zinc-400 animate-bounce-slow">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="relative w-full overflow-x-hidden">
          <div
            className="marquee flex items-center gap-x-16 gap-y-8 px-4 whitespace-nowrap group"
            style={{ animation: 'marquee-scroll 30s linear infinite' }}
          >
            {brandNames.map((name, i) => (
              <span
                key={i}
                className="text-3xl font-light tracking-widest text-zinc-900 mx-0 my-[10px] transition-colors duration-200 hover:font-bold hover:text-black cursor-pointer hover:[animation-play-state:paused]"
                onMouseEnter={e => e.currentTarget.parentElement && (e.currentTarget.parentElement.style.animationPlayState = 'paused')}
                onMouseLeave={e => e.currentTarget.parentElement && (e.currentTarget.parentElement.style.animationPlayState = 'running')}
              >
                {name}
              </span>
            ))}
            {/* Repeat for seamless loop */}
            {brandNames.map((name, i) => (
              <span
                key={brandNames.length + i}
                className="text-3xl font-light tracking-widest text-zinc-900 mx-0 my-[10px] transition-colors duration-200 hover:font-bold hover:text-black cursor-pointer hover:[animation-play-state:paused]"
                onMouseEnter={e => e.currentTarget.parentElement && (e.currentTarget.parentElement.style.animationPlayState = 'paused')}
                onMouseLeave={e => e.currentTarget.parentElement && (e.currentTarget.parentElement.style.animationPlayState = 'running')}
              >
                {name}
              </span>
            ))}
          </div>
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>
      {/* Daily Routine Video Section */}
      <section className="w-full bg-[#faede7] flex flex-col items-center mt-10 justify-center min-h-[130vh]" style={{ minHeight: '130vh' }}>
        <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-10 text-center">My Daily Routine</h2>
        <div className="relative mx-auto rounded-3xl overflow-hidden shadow-lg flex items-center justify-center" style={{ width: '1400px', maxWidth: '100vw', height: '800px', minHeight: '800px' }}>
          {/* Pause Button Overlay */}
          <button className="absolute top-4 left-4 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="5" width="4" height="14" rx="2"/><rect x="14" y="5" width="4" height="14" rx="2"/></svg>
          </button>
          <video
            className="w-full h-full object-cover mt-2 mb-6"
            src="https://www.w3schools.com/howto/rain.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Product Cards Group - bottom right, not overlaid */}
          <div className="absolute bottom-6 right-6 flex gap-4 z-20">
            {/* Example product cards, replace with real data as needed */}
            <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-4 min-w-[260px] max-w-xs">
              <img src="https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg" alt="Algae Peel-Off Mask" className="w-16 h-16 rounded-lg object-contain" />
              <div className="flex flex-col flex-1">
                <span className="text-xs font-bold text-zinc-400 mb-1">BKIND</span>
                <span className="font-semibold text-zinc-900">Algae Peel-Off Mask</span>
                <span className="text-zinc-700 text-sm">$115.00</span>
              </div>
              <button className="ml-2 text-zinc-500 hover:text-black"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6h13"/></svg></button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-4 min-w-[260px] max-w-xs">
              <img src="https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg" alt="Active toning essence" className="w-16 h-16 rounded-lg object-contain" />
              <div className="flex flex-col flex-1">
                <span className="text-xs font-bold text-zinc-400 mb-1">MOKOSH</span>
                <span className="font-semibold text-zinc-900">Active toning essence</span>
                <span className="text-zinc-700 text-sm">$59.00</span>
              </div>
              <button className="ml-2 text-zinc-500 hover:text-black"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6h13"/></svg></button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-6 py-4 min-w-[260px] max-w-xs">
              <img src="https://mokosh.pl/environment/cache/images/0_0_productGfx_aeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeae.jpg" alt="Figa smoothing face cream" className="w-16 h-16 rounded-lg object-contain" />
              <div className="flex flex-col flex-1">
                <span className="text-xs font-bold text-zinc-400 mb-1">MOKOSH</span>
                <span className="font-semibold text-zinc-900">Figa smoothing face cream</span>
                <span className="text-zinc-700 text-sm">From $70.00</span>
              </div>
              <button className="ml-2 text-zinc-500 hover:text-black"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6h13"/></svg></button>
            </div>
          </div>
        </div>
        <button className="block mx-auto mt-10 text-base font-semibold tracking-widest uppercase text-zinc-900 bg-transparent border-none shadow-none outline-none transition-all relative group">
            VIEW ALL PRODUCTS
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-zinc-900 transition-all duration-300 group-hover:w-0 w-full"></span>
          </button>
      </section>
      {/* Bestsellers Section */}
      <section className="w-full bg-white py-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-14 text-center">Our Bestsellers</h2>
        <div className="w-full max-w-6xl mx-auto">
          <div
            className="relative"
            style={{ paddingBottom: '36px' }}
          >
            <div
              className="flex gap-14 overflow-x-auto hide-scrollbar px-2"
              style={{ scrollBehavior: 'smooth', minHeight: '380px' }}
              id="bestseller-scroll"
            >
              {bestSellers.map((product, i) => (
                <div
                  key={product.name}
                  className="group relative flex flex-col items-center mx-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{ minWidth: '280px', maxWidth: '320px' }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-56 h-56 object-contain mb-8"
                    style={{ maxHeight: '220px' }}
                  />
                  <div className="w-full text-left">
                    <div className="text-xs font-bold text-zinc-400 mb-1 tracking-widest">MOKOSH</div>
                    <div className="font-medium text-zinc-900 mb-1">{product.name}</div>
                    <div className="text-zinc-700 text-base mb-2">$68.00</div>
                  </div>
                  {/* Hover Button Overlay */}
                  <div className="relative w-full flex flex-col items-center">
                    <button
                      className="w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-black text-white font-semibold tracking-widest text-base shadow-lg z-10 whitespace-nowrap mb-2"
                      style={{ pointerEvents: 'auto', height: '56px', minHeight: '56px' }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  {/* Optional: New badge */}
                  {i < 2 && (
                    <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">New</span>
                  )}
                </div>
              ))}
            </div>
            {/* Custom slider bar */}
            <BestsellerSliderBar />
          </div>
        </div>
        <button className="block mx-auto mt-16 text-base font-semibold tracking-widest uppercase text-zinc-900 bg-transparent border-none shadow-none outline-none transition-all relative group">
          VIEW ALL
          <span className="block w-full h-[2px] bg-zinc-900 mt-1 transition-all duration-300 group-hover:w-0"></span>
        </button>
      </section>
      {/* Two-Column Hero Section With Image Switcher */}
      <section className="w-full flex flex-row min-h-[70vh]">
        {/* State for both sides */}
        <ProductImageHeroSwitcher />
      </section>
      {/* Best Skincare Products section ... */}
      <section className="w-full flex flex-col items-center justify-center py-24 bg-white">
        <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-12 text-center">Featured Video Routine</h2>
        {/* Video Slider */}
        <VideoSliderWithCard />
      </section>
      {/* Category Showcase Section */}
      <CategoryShowcase />
      <TestimonialAndFeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;

function BestsellerSliderBar() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const container = document.getElementById('bestseller-scroll');
    const bar = scrollRef.current;
    function updateBar() {
      if (!(container instanceof HTMLElement) || !(bar instanceof HTMLDivElement)) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      bar.style.left = `${(scrollLeft / (scrollWidth - clientWidth)) * 100}%`;
      bar.style.width = `${(clientWidth / scrollWidth) * 100}%`;
    }
    if (container) {
      container.addEventListener('scroll', updateBar);
      updateBar();
      return () => container.removeEventListener('scroll', updateBar);
    }
  }, []);
  return (
    <div className="absolute left-0 right-0 bottom-0 h-3 flex items-center px-8">
      <div className="relative w-full h-1 bg-zinc-200 rounded-full">
        <div
          ref={scrollRef}
          className="absolute top-0 h-1 bg-zinc-700 rounded-full transition-all duration-200"
          style={{ left: 0, width: '30%' }}
        />
      </div>
    </div>
  );
}

function ProductImageSwitcher() {
  const [active, setActive] = React.useState(0);
  const products = [
    bestSellers[1],
    bestSellers[2],
  ];
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-[#eaf4ea]">
      <img src={products[active]?.img} alt={products[active]?.name} className="w-60 h-80 object-contain mb-8 drop-shadow-lg transition-all duration-300" />
      <div className="text-xl font-medium text-zinc-900 mb-2">{products[active]?.name || 'Product Name'}</div>
      <div className="text-lg text-zinc-700 mb-6">$59.00</div>
      <div className="flex gap-3 mt-2">
        {[0, 1].map(i => (
          <button
            key={i}
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${active === i ? 'bg-black border-black' : 'bg-white border-zinc-400'} transition-all`}
            onClick={() => setActive(i)}
            aria-label={`Show product ${i + 1}`}
          >
            <span className="block w-2 h-2 rounded-full bg-white" style={{ opacity: active === i ? 1 : 0.3 }} />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductImageHeroSwitcher() {
  const [active, setActive] = React.useState(0);
  const products = [
    bestSellers[1],
    bestSellers[2],
  ];
  const modelImages = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=900&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=900&q=80",
  ];
  return (
    <>
      {/* Left: Product Card with Image Switcher */}
      <div className="flex-1 flex flex-col justify-center items-center bg-[#eaf4ea]">
        <img src={products[active]?.img} alt={products[active]?.name} className="w-60 h-80 object-contain mb-8 drop-shadow-lg transition-all duration-300" />
        <div className="text-xl font-medium text-zinc-900 mb-2">{products[active]?.name || 'Product Name'}</div>
        <div className="text-lg text-zinc-700 mb-6">$59.00</div>
        <div className="flex gap-3 mt-2">
          {[0, 1].map(i => (
            <button
              key={i}
              className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${active === i ? 'bg-black border-black' : 'bg-white border-zinc-400'} transition-all`}
              onClick={() => setActive(i)}
              aria-label={`Show product ${i + 1}`}
            >
              <span className="block w-2 h-2 rounded-full bg-white" style={{ opacity: active === i ? 1 : 0.3 }} />
            </button>
          ))}
        </div>
      </div>
      {/* Right: Model Image with Heading */}
      <div className="flex-1 relative flex items-end justify-end bg-[#f7f7f7] overflow-hidden">
        <img src={modelImages[active]} alt="Model" className="absolute inset-0 w-full h-full object-cover object-center" style={{ zIndex: 1 }} />
        <div className="relative z-10 p-12 w-full flex justify-end">
          <h2 className="text-5xl font-serif font-bold text-white drop-shadow-lg text-right">Revitalizes the Skin!</h2>
        </div>
      </div>
    </>
  );
}

function VideoSliderWithCard() {
  const videos = [
    "https://www.w3schools.com/howto/rain.mp4",
    "https://www.w3schools.com/howto/rain.mp4",
    "https://www.w3schools.com/howto/rain.mp4",
    "https://www.w3schools.com/howto/rain.mp4",
    "https://www.w3schools.com/howto/rain.mp4",
  ];
  const products = [
    {
      brand: "MOKOSH",
      name: "Argan Oil",
      price: "From $19.00",
      img: "https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg",
    },
    {
      brand: "BKIND",
      name: "Algae Peel-Off Mask",
      price: "$115.00",
      img: "https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg",
    },
    {
      brand: "MOKOSH",
      name: "Active toning essence",
      price: "$59.00",
      img: "https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg",
    },
    {
      brand: "MOKOSH",
      name: "Figa smoothing face cream",
      price: "From $70.00",
      img: "https://mokosh.pl/environment/cache/images/0_0_productGfx_aeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeae.jpg",
    },
    {
      brand: "MOKOSH",
      name: "Soothing bath salt",
      price: "$45.00",
      img: "https://mokosh.pl/environment/cache/images/0_0_productGfx_bebebebebebebebebebebebebebebebebe.jpg",
    },
  ];
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(2);

  const scrollBy = (offset: number) => {
    if (scrollRef.current instanceof HTMLDivElement) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Optionally, update active index on scroll for a more dynamic experience

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Left arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-30"
          onClick={() => { setActive(a => Math.max(0, a - 1)); scrollBy(-350); }}
          aria-label="Scroll left"
          style={{ left: '-2.5rem' }}
          disabled={active === 0}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Video carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-2 py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {videos.map((src, i) => {
            const style = {
              width: 260,
              height: 420,
              scrollSnapAlign: 'center',
              border: i === active ? '2px solid #a3e635' : undefined,
              zIndex: 10 - Math.abs(active - i),
            };
            return (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center"
                style={style}
              >
                <video
                  src={src}
                  className="object-cover w-full h-full"
                  autoPlay={i === active}
                  loop
                  muted
                  playsInline
                  style={{ borderRadius: '1rem', width: '100%', height: '100%' }}
                  onClick={() => setActive(i)}
                />
              </div>
            );
          })}
        </div>
        {/* Right arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-30"
          onClick={() => { setActive(a => Math.min(videos.length - 1, a + 1)); scrollBy(350); }}
          aria-label="Scroll right"
          style={{ right: '-2.5rem' }}
          disabled={active === videos.length - 1}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      {/* Product Card/Link below */}
      <div className="w-full flex justify-center mt-10">
        <div className="bg-white rounded-2xl shadow-lg flex items-center gap-4 px-8 py-6 min-w-[320px] max-w-md border border-zinc-100">
          <img src={products[active].img} alt={products[active].name} className="w-16 h-16 rounded-lg object-contain" />
          <div className="flex flex-col flex-1">
            <span className="text-xs font-bold text-zinc-400 mb-1">{products[active].brand}</span>
            <span className="font-semibold text-zinc-900">{products[active].name}</span>
            <span className="text-zinc-700 text-sm">{products[active].price}</span>
          </div>
          <button className="ml-2 text-zinc-500 hover:text-black"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6h13"/></svg></button>
        </div>
      </div>
    </div>
  );
}

function TestimonialAndFeaturesSection() {
  const testimonials = [
    {
      quote: 'Mokosh Face Cream is a game-changer. Its lightweight formula hydrates deeply without any greasiness. My skin feels nourished and looks radiant. A pure delight for sensitive skin!',
      author: 'Alex K.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      quote: 'The best skincare I have ever used. My skin glows and feels so healthy!',
      author: 'Maria S.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      quote: 'I love the natural ingredients and the results are amazing. Highly recommend!',
      author: 'John D.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    // {
    //   quote: 'Absolutely love the fast shipping and eco-friendly packaging. Will buy again!',
    //   author: 'Priya R.',
    //   avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    // },
    // {
    //   quote: 'My sensitive skin finally found its match. No irritation, just results!',
    //   author: 'Chris P.',
    //   avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    // },
    // {
    //   quote: 'The scent is so fresh and the texture is perfect. I use it every day!',
    //   author: 'Sophie L.',
    //   avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    // },
    // {
    //   quote: 'Customer service was fantastic and the results speak for themselves.',
    //   author: 'Liam T.',
    //   avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    // },
  ];
  const [active, setActive] = React.useState(0);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  const features = [
    {
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><path d="M24 44c-8.837 0-16-7.163-16-16 0-6.627 5.373-12 12-12 2.21 0 4.21.896 5.657 2.343C27.79 16.896 29.79 16 32 16c6.627 0 12 5.373 12 12 0 8.837-7.163 16-16 16z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 24c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: 'Vegan',
      desc: 'Our entire collection is vegan and cruelty free.',
    },
    {
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="4" stroke="#222" strokeWidth="2"/><path d="M8 20h32" stroke="#222" strokeWidth="2"/><path d="M16 28h8" stroke="#222" strokeWidth="2"/></svg>
      ),
      title: 'Fast & Free Shipping',
      desc: 'Doorstep delivery to most of the US.',
    },
    {
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16z" stroke="#222" strokeWidth="2"/><path d="M24 16v8l6 6" stroke="#222" strokeWidth="2"/></svg>
      ),
      title: 'Natural',
      desc: 'We only use the finest natural ingredients.',
    },
    {
      icon: (
        <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" stroke="#222" strokeWidth="2"/><path d="M16 32l16-16" stroke="#222" strokeWidth="2"/></svg>
      ),
      title: 'Recyclable',
      desc: 'All packaging is recyclable and eco conscious.',
    },
  ];

  return (
    <section className="w-full bg-[#f7f5f1] flex flex-col items-center justify-center py-24">
      {/* Testimonial Carousel */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center mb-20">
        <div className="flex flex-col items-center">
          <img src={testimonials[active].avatar} alt={testimonials[active].author} className="w-20 h-20 rounded-full object-cover mb-6 shadow-lg" />
          <div className="text-2xl md:text-3xl text-center text-zinc-900 font-light max-w-4xl mb-6">"{testimonials[active].quote}"</div>
          <div className="text-base text-zinc-700 mb-4">{testimonials[active].author}</div>
          {/* Dots below author, spaced and visible */}
          <div className="flex items-center justify-center gap-2 mt-2 mb-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full border border-zinc-400 ${i === active ? 'bg-zinc-800' : 'bg-zinc-300'} transition-all focus:outline-none`}
                style={{ cursor: 'pointer', padding: 0, margin: 0, background: i === active ? '#27272a' : '#e5e7eb' }}
                onClick={() => setActive(i)}
                aria-label={`Show review ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === active ? 'bg-zinc-800' : 'bg-zinc-300'} inline-block transition-all focus:outline-none`}
              style={{ cursor: 'pointer', border: 'none', padding: 0, margin: 0, background: 'transparent' }}
              onClick={() => setActive(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-zinc-100 transition-all"
          style={{ marginTop: '-2rem' }}
          onClick={next}
          aria-label="Next testimonial"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#222"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      {/* Features Row */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-4">{f.icon}</div>
            <div className="font-serif text-lg font-semibold mb-2 text-zinc-900">{f.title}</div>
            <div className="text-zinc-600 text-base">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 

function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-white pt-16 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Categories */}
        <div>
          <div className="font-serif text-2xl mb-4">Categories</div>
          <ul className="space-y-2 text-base">
            <li>Bath & Body</li>
            <li>Body Care</li>
            <li>Face Care</li>
            <li>Hair Care</li>
            <li>Hand Care</li>
            <li>Essential oils</li>
            <li>Sale %</li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <div className="font-serif text-2xl mb-4">Customer Service</div>
          <ul className="space-y-2 text-base">
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Information */}
        <div>
          <div className="font-serif text-2xl mb-4">Information</div>
          <ul className="space-y-2 text-base">
            <li>Return and Refunds</li>
            <li>Legal Area</li>
            <li>About us</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <div className="font-serif text-2xl mb-4">About Us</div>
          <div className="text-base leading-relaxed mb-2">We could not have created this demo without the help of an amazing source of content and products. Visit our about page to find out where all the products used in this demo care from.</div>
          <a href="#" className="underline text-sm">More Info</a>
        </div>
      </div>
      {/* Social, country, payment row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-6">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="flex items-center gap-1 text-base"><span className="text-xl">🇺🇸</span> US /USD <svg width="12" height="12" fill="none" viewBox="0 0 20 20" className="inline ml-1"><path d="M6 8l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-300"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="#fff" strokeWidth="2"/></svg></a>
          <a href="#" className="hover:text-gray-300"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12h8" stroke="#fff" strokeWidth="2"/></svg></a>
          <a href="#" className="hover:text-gray-300"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/></svg></a>
          <a href="#" className="hover:text-gray-300"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12h8" stroke="#fff" strokeWidth="2"/></svg></a>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-7 w-auto bg-white rounded px-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-7 w-auto bg-white rounded px-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-7 w-auto bg-white rounded px-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.png" alt="PayPal" className="h-7 w-auto bg-white rounded px-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Discover_Card_logo.svg" alt="Discover" className="h-7 w-auto bg-white rounded px-1" />
        </div>
      </div>
      {/* Large beauty text */}
      <div className="w-full text-white text-[clamp(4rem,18vw,16rem)] font-serif font-bold leading-none text-left pl-4 md:pl-16 pb-4 select-none opacity-95" style={{ letterSpacing: '-0.05em' }}>
        beauty
      </div>
    </footer>
  );
} 