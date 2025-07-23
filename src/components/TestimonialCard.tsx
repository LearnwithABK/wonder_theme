import React from 'react';

interface TestimonialCardProps {
  avatar: string;
  quote: string;
  author: string;
  active: boolean;
  onClick?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, quote, author, active, onClick }) => (
  <div className={`flex flex-col items-center transition-all duration-300 ${active ? '' : 'opacity-60 scale-95'}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
    <img src={avatar} alt={author} className="w-20 h-20 rounded-full object-cover mb-6 shadow-lg" />
    <div className="text-2xl md:text-3xl text-center text-zinc-900 font-light max-w-4xl mb-6">"{quote}"</div>
    <div className="text-base text-zinc-700 mb-4">{author}</div>
  </div>
);

export default TestimonialCard; 