import React from 'react';
import { Emblem } from './Emblem';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-[#dce8e1] bg-[#f0f6f3]/80 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center mb-1">
          <Emblem className="w-8 h-8" color="#1e4b3e" />
        </div>

        <div className="font-serif font-bold text-sm sm:text-base text-[#142823] tracking-[0.2em] uppercase leading-relaxed">
          ONE RESORT. ONE CENTRAL PLATFORM. ONE CONNECTED OPERATION.
        </div>

        <div className="text-xs text-[#4b6b60] tracking-wider font-medium">
          Bookings • Guests • Rooms • Operations • Guest Experience • Billing • Reporting
        </div>

        <div className="pt-4 text-[11px] text-[#78968a]">
          Nirvana Resort Management System • Interactive Prototype Architecture
        </div>
      </div>
    </footer>
  );
};
