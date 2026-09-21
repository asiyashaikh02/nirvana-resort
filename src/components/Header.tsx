import React from 'react';
import { Emblem } from './Emblem';
import { RotateCcw, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { WorkflowNodeId } from '../types';

interface HeaderProps {
  activeNode: WorkflowNodeId | null;
  onReset: () => void;
  onSelectNode: (id: WorkflowNodeId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNode,
  onReset,
  onSelectNode,
}) => {
  // Compute breadcrumb trail based on active node
  const getBreadcrumbs = () => {
    if (!activeNode || activeNode === 'nirvana-resort') {
      return ['Nirvana Resort', 'Workflow Overview'];
    }
    if (['booking', 'website', 'ota', 'call', 'social', 'reception-source', 'other-source'].includes(activeNode)) {
      return ['Nirvana Resort', 'Booking', activeNode.replace('-source', '').toUpperCase()];
    }
    if (activeNode === 'central-reservation') {
      return ['Nirvana Resort', 'Central Reservation'];
    }
    if (activeNode === 'guest-account') {
      return ['Nirvana Resort', 'Central Reservation', 'Guest Account'];
    }
    if (['guest-portal', 'food-subflow', 'service-requests', 'help-support', 'my-stay'].includes(activeNode)) {
      return ['Nirvana Resort', 'Guest Experience', 'Guest Portal'];
    }
    if (['operations', 'reception-op', 'housekeeping-op', 'maintenance-op', 'laundry-op', 'kitchen-op', 'waiter-op', 'inventory-op', 'staff-op', 'realtime-coordination'].includes(activeNode)) {
      return ['Nirvana Resort', 'Operations', activeNode.replace('-op', '').toUpperCase()];
    }
    if (activeNode === 'room-lifecycle') {
      return ['Nirvana Resort', 'Operations', 'Room Lifecycle'];
    }
    if (activeNode === 'food-restaurant-flow') {
      return ['Nirvana Resort', 'F&B Flow', 'POS'];
    }
    if (activeNode === 'folio-billing' || activeNode === 'checkout') {
      return ['Nirvana Resort', 'Folio & Billing', 'Checkout'];
    }
    if (activeNode === 'owner-manager') {
      return ['Nirvana Resort', 'Executive', 'Owner / Manager'];
    }
    if (activeNode === 'daily-report' || activeNode === 'whatsapp-cloud') {
      return ['Nirvana Resort', 'Executive', 'Daily Report'];
    }
    return ['Nirvana Resort', activeNode];
  };

  const breadcrumbs = getBreadcrumbs();

  const quickModules: { id: WorkflowNodeId; label: string }[] = [
    { id: 'room-lifecycle', label: 'Rooms' },
    { id: 'food-restaurant-flow', label: 'POS & KDS' },
    { id: 'guest-portal', label: 'Guest Portal' },
    { id: 'operations', label: 'Operations' },
    { id: 'folio-billing', label: 'Folio' },
    { id: 'daily-report', label: 'Daily Report' },
    { id: 'multi-property', label: 'Multi-Site' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#e2ece6] shadow-2xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Branding matching architectural presentation */}
          <button
            onClick={onReset}
            className="flex items-center space-x-2.5 sm:space-x-3.5 text-left cursor-pointer group focus:outline-none"
            title="Return to full workflow map"
          >
            <div className="p-1.5 sm:p-2 rounded-xl bg-[#f0f6f3] border border-[#d6e5dd] shrink-0 group-hover:border-[#1e4b3e] transition-colors">
              <Emblem className="w-5 h-5 sm:w-6 sm:h-6" color="#1e4b3e" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1.5 sm:space-x-2">
                <span className="font-serif tracking-[0.2em] sm:tracking-[0.22em] text-xs sm:text-base font-bold text-[#142823]">
                  NIRVANA
                </span>
                <span className="font-serif tracking-[0.25em] sm:tracking-[0.3em] text-[11px] sm:text-sm text-[#4b6b60]">
                  RESORT
                </span>
              </div>
              <div className="text-[9px] sm:text-[11px] font-semibold text-[#1e4b3e] tracking-wider uppercase truncate">
                Resort Management System
              </div>
            </div>
          </button>

          {/* Center: Breadcrumb path on larger screens */}
          <div className="hidden lg:flex items-center space-x-1.5 text-xs text-[#4b6b60] bg-[#f8faf9] px-3 py-1.5 rounded-full border border-[#e2ece6]">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3 h-3 text-[#87a497]" />}
                <span className={idx === breadcrumbs.length - 1 ? 'font-bold text-[#1e4b3e]' : ''}>
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Right: Reset & Quick Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {activeNode && (
              <button
                onClick={onReset}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[40px] rounded-xl border border-[#d6e5dd] bg-white hover:bg-[#eaf2ee] active:scale-95 text-[#142823] text-xs font-medium transition-all flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                title="Reset view to main map"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#1e4b3e]" />
                <span className="text-xs">Reset Map</span>
              </button>
            )}

            <div className="hidden sm:flex items-center space-x-1 text-[11px]">
              {quickModules.slice(0, 4).map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => onSelectNode(mod.id)}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                    activeNode === mod.id
                      ? 'bg-[#1e4b3e] text-white border-[#1e4b3e]'
                      : 'bg-[#f0f6f3] text-[#1e4b3e] border-[#d6e5dd] hover:bg-[#e3eee8]'
                  }`}
                >
                  {mod.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Quick Nav Rail */}
        <div className="flex sm:hidden items-center space-x-1.5 overflow-x-auto pt-2 pb-0.5 no-scrollbar -mx-1 px-1">
          <span className="text-[9px] uppercase font-bold text-[#638075] tracking-wider shrink-0 mr-0.5">
            Quick:
          </span>
          {quickModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => onSelectNode(mod.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-medium transition-colors cursor-pointer shrink-0 border ${
                activeNode === mod.id
                  ? 'bg-[#1e4b3e] text-white border-[#1e4b3e]'
                  : 'bg-[#f0f6f3] text-[#1e4b3e] border-[#d6e5dd]'
              }`}
            >
              {mod.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
