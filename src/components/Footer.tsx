import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-white pt-16 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Categories */}
        <div>
          <div className="font-serif text-2xl mb-4">Categories</div>
          <ul className="space-y-2 text-base">
            <li><Link to="/bath-body" className="hover:underline cursor-pointer">Bath & Body</Link></li>
            <li><Link to="/body-care" className="hover:underline cursor-pointer">Body Care</Link></li>
            <li><Link to="/face-care" className="hover:underline cursor-pointer">Face Care</Link></li>
            <li><Link to="/hair-care" className="hover:underline cursor-pointer">Hair Care</Link></li>
            <li><Link to="/hand-care" className="hover:underline cursor-pointer">Hand Care</Link></li>
            <li><Link to="/essential-oils" className="hover:underline cursor-pointer">Essential oils</Link></li>
            <li><Link to="/sale" className="hover:underline cursor-pointer">Sale %</Link></li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <div className="font-serif text-2xl mb-4">Customer Service</div>
          <ul className="space-y-2 text-base">
            <li><Link to="/faq" className="hover:underline cursor-pointer">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:underline cursor-pointer">Shipping</Link></li>
            <li><Link to="/contact" className="hover:underline cursor-pointer">Contact</Link></li>
          </ul>
        </div>
        {/* Information */}
        <div>
          <div className="font-serif text-2xl mb-4">Information</div>
          <ul className="space-y-2 text-base">
            <li><Link to="/returns" className="hover:underline cursor-pointer">Return and Refunds</Link></li>
            <li><Link to="/legal" className="hover:underline cursor-pointer">Legal Area</Link></li>
            <li><Link to="/about" className="hover:underline cursor-pointer">About us</Link></li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <div className="font-serif text-2xl mb-4">About Us</div>
          <div className="text-base leading-relaxed mb-2">We could not have created this demo without the help of an amazing source of content and products. Visit our about page to find out where all the products used in this demo care from.</div>
          <Link to="/about" className="underline text-sm hover:underline cursor-pointer">More Info</Link>
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
      <div className="w-full text-white text-[clamp(4rem,18vw,16rem)] font-serif font-bold leading-none text-center pb-4 select-none opacity-95" style={{ letterSpacing: '-0.05em' }}>
        beauty
      </div>
    </footer>
  );
}

export default Footer; 