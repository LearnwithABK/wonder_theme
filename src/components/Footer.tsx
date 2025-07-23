import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#181818] text-white border-t pt-12 pb-8 mt-0">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
      <div>
        <div className="font-serif text-2xl font-bold mb-4">Categories</div>
        <ul className="space-y-2 text-lg">
          <li>Bath & Body</li>
          <li>Body Care</li>
          <li>Face Care</li>
          <li>Hair Care</li>
          <li>Hand Care</li>
          <li>Essential oils</li>
          <li>Sale %</li>
        </ul>
        <div className="mt-6 text-base">US US /USD</div>
      </div>
      <div>
        <div className="font-serif text-2xl font-bold mb-4">Customer Service</div>
        <ul className="space-y-2 text-lg">
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <div className="font-serif text-2xl font-bold mb-4">Information</div>
        <ul className="space-y-2 text-lg">
          <li>Return and Refunds</li>
          <li>Legal Area</li>
          <li>About us</li>
        </ul>
      </div>
      <div>
        <div className="font-serif text-2xl font-bold mb-4">About Us</div>
        <div className="text-lg">We could not have created this demo without the help of an amazing source of content and products. Visit our about page to find out where all the products used in this demo care from.<br/><a href="#" className="underline mt-2 inline-block">More Info</a></div>
      </div>
    </div>
    {/* Navigation Dots Row */}
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 mt-8">
      <div className="flex gap-4">
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-7 bg-white rounded" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-7 bg-white rounded" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-7 bg-white rounded" />
      </div>
      <div className="flex gap-4">
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
        <span className="w-5 h-5 rounded-full border-2 border-white bg-white/10 inline-block"></span>
      </div>
    </div>
    {/* Brand Name at Bottom */}
    <div className="w-full text-center mt-8">
      <span className="font-serif text-[7vw] font-bold text-white opacity-95 tracking-tight select-none" style={{lineHeight: 1}}>beauty</span>
    </div>
  </footer>
);

export default Footer; 