import React from 'react';

interface FeatureIconCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureIconCard: React.FC<FeatureIconCardProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <div className="font-serif text-lg font-semibold mb-2 text-zinc-900">{title}</div>
    <div className="text-zinc-600 text-base">{desc}</div>
  </div>
);

export default FeatureIconCard; 