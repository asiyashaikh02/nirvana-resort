import React from 'react';
import { Building2, Globe2, Layers, BarChart, CheckCircle2 } from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface MultiPropertyViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const MultiPropertyView: React.FC<MultiPropertyViewProps> = () => {
  const properties = [
    { name: 'Nirvana Resort — Tadoba', type: 'Wilderness & Tiger Safari', villas: '30 Villas', occupancy: '84%', rev: '₹3.2L' },
    { name: 'Nirvana Resort — Goa', type: 'Beachfront Luxury Sanctuary', villas: '45 Cottages', occupancy: '91%', rev: '₹5.8L' },
    { name: 'Nirvana Resort — Udaipur', type: 'Heritage Palace Retreat', villas: '38 Suites', occupancy: '78%', rev: '₹4.6L' },
    { name: 'Nirvana Resort — USA', type: 'Mountain Lodge & Spa', villas: '25 Chalets', occupancy: '72%', rev: '$6,400' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>Multi-Property Enterprise Architecture</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Manage multiple luxury resorts and destinations under one unified group account without purchasing separate software stacks.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { title: 'Single Platform', desc: 'One login for all locations' },
            { title: 'Multiple Properties', desc: 'Custom pricing & menus per site' },
            { title: 'Property Operations', desc: 'Isolated on-site staff roles' },
            { title: 'Consolidated Reporting', desc: 'Group P&L roll-up in real time' },
          ].map((pillar, i) => (
            <div key={i} className="p-3 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
              <div className="font-bold text-[#142823]">{pillar.title}</div>
              <div className="text-[10px] text-[#638075] mt-0.5">{pillar.desc}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-[11px] font-bold text-[#142823] uppercase tracking-wider">
            Connected Properties
          </div>
          {properties.map((prop, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#f8faf9] border border-[#e2ece6] flex items-center justify-between text-xs"
            >
              <div>
                <div className="font-bold text-[#142823]">{prop.name}</div>
                <div className="text-[10px] text-[#638075]">{prop.type} • {prop.villas}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-[#1e4b3e]">{prop.occupancy} Occ.</div>
                <div className="text-[10px] text-[#638075] font-mono">{prop.rev} today</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
