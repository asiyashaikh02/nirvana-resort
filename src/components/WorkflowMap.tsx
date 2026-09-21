import React from 'react';
import { Emblem } from './Emblem';
import { WorkflowNodeId } from '../types';
import { 
  Calendar, 
  Globe, 
  Tag, 
  Phone, 
  MessageSquare, 
  User, 
  Database, 
  Network, 
  UserCheck, 
  Utensils, 
  Bell, 
  Headphones, 
  BedDouble, 
  Settings, 
  Sparkles, 
  Wrench, 
  Shirt, 
  ChefHat, 
  ConciergeBell, 
  Package, 
  Users, 
  RefreshCw, 
  Receipt, 
  LogOut, 
  BarChart3, 
  Cloud, 
  ArrowDown, 
  Building2, 
  FileSpreadsheet,
  ChevronDown
} from 'lucide-react';

interface WorkflowMapProps {
  activeNode: WorkflowNodeId | null;
  onSelectNode: (id: WorkflowNodeId) => void;
}

export const WorkflowMap: React.FC<WorkflowMapProps> = ({
  activeNode,
  onSelectNode,
}) => {
  // Check if a node is currently active/selected
  const isSelected = (id: WorkflowNodeId) => activeNode === id;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-3 relative">
      {/* Presentation Top Title Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#e2ece6] pb-6 mb-8 gap-4">
        <div className="flex items-center space-x-3.5">
          <Emblem className="w-9 h-9" color="#1e4b3e" />
          <div>
            <h1 className="font-serif tracking-[0.24em] text-lg sm:text-xl font-bold text-[#142823]">
              NIRVANA
            </h1>
            <div className="font-serif tracking-[0.32em] text-xs text-[#4b6b60]">
              RESORT
            </div>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#1e4b3e] uppercase">
            RESORT MANAGEMENT SYSTEM
          </div>
          <div className="text-[11px] tracking-wider text-[#4b6b60] uppercase mt-0.5">
            SIMPLER OPERATIONS. BETTER EXPERIENCES.
          </div>
        </div>
      </div>

      {/* Guide notice banner */}
      <div className="text-center pb-4">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#eaf2ee] text-[#1e4b3e] text-xs font-medium border border-[#d6e5dd]">
          <span className="w-2 h-2 rounded-full bg-[#1e4b3e] animate-ping"></span>
          <span>Interactive Architectural Prototype — Click any node to inspect workflow</span>
        </span>
      </div>

      {/* ============================================================
          SECTION 1: NIRVANA RESORT & BOOKING
         ============================================================ */}
      <div className="flex flex-col items-center">
        {/* Node 1: NIRVANA RESORT */}
        <button
          onClick={() => onSelectNode('nirvana-resort')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2.5 cursor-pointer shadow-xs ${
            isSelected('nirvana-resort')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#7fa897] bg-white hover:border-[#1e4b3e] text-[#142823] hover:shadow-sm'
          }`}
        >
          <Emblem className="w-5 h-5" color="#1e4b3e" />
          <span className="font-serif tracking-[0.2em] font-bold text-sm text-[#142823]">
            NIRVANA RESORT
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node 2: BOOKING (Solid dark green pill) */}
        <button
          onClick={() => onSelectNode('booking')}
          className={`px-10 py-2.5 rounded-full transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-md ${
            isSelected('booking')
              ? 'bg-[#15382e] text-white ring-2 ring-[#1e4b3e] ring-offset-2 scale-[1.02]'
              : 'bg-[#1e4b3e] hover:bg-[#163c31] text-white'
          }`}
        >
          <Calendar className="w-4 h-4 text-emerald-200" />
          <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase">
            BOOKING
          </span>
        </button>

        {/* Downward connector to horizontal distribution rail */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 mt-1"></div>

        {/* Horizontal Distribution Rail for 5 Booking Sources */}
        <div className="w-full relative py-1">
          {/* Top rail */}
          <div className="hidden sm:block absolute top-0 left-[10%] right-[10%] h-px bg-[#2d6a4f]/50"></div>

          {/* 5 Booking Source Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 pt-3">
            {/* Website */}
            <button
              onClick={() => onSelectNode('website')}
              className={`p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[105px] cursor-pointer ${
                isSelected('website')
                  ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                  : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                <Globe className="w-4 h-4 text-[#1e4b3e]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#142823] tracking-wide">WEBSITE</div>
                <div className="text-[10px] text-[#5b7a6f] mt-0.5 leading-tight">
                  Rooms / Booking Engine
                </div>
              </div>
              <div className="text-[9px] text-[#1e4b3e] font-semibold mt-1 opacity-80">Click to explore</div>
            </button>

            {/* OTA */}
            <button
              onClick={() => onSelectNode('ota')}
              className={`p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[105px] cursor-pointer ${
                isSelected('ota')
                  ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                  : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                <Tag className="w-4 h-4 text-[#1e4b3e]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#142823] tracking-wide">OTA</div>
                <div className="text-[10px] text-[#5b7a6f] mt-0.5 leading-tight">
                  Booking.com / Agoda / Expedia / other
                </div>
              </div>
              <div className="text-[9px] text-[#1e4b3e] font-semibold mt-1 opacity-80">Click to explore</div>
            </button>

            {/* CALL */}
            <button
              onClick={() => onSelectNode('call')}
              className={`p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[105px] cursor-pointer ${
                isSelected('call')
                  ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                  : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                <Phone className="w-4 h-4 text-[#1e4b3e]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#142823] tracking-wide">CALL</div>
                <div className="text-[10px] text-[#5b7a6f] mt-0.5 leading-tight">
                  Reception / Reservation Desk
                </div>
              </div>
              <div className="text-[9px] text-[#1e4b3e] font-semibold mt-1 opacity-80">Click to explore</div>
            </button>

            {/* SOCIAL */}
            <button
              onClick={() => onSelectNode('social')}
              className={`p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[105px] cursor-pointer ${
                isSelected('social')
                  ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                  : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                <MessageSquare className="w-4 h-4 text-[#1e4b3e]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#142823] tracking-wide">SOCIAL</div>
                <div className="text-[10px] text-[#5b7a6f] mt-0.5 leading-tight">
                  WhatsApp / Instagram / Facebook
                </div>
              </div>
              <div className="text-[9px] text-[#1e4b3e] font-semibold mt-1 opacity-80">Click to explore</div>
            </button>

            {/* OTHER / RECEPTION */}
            <button
              onClick={() => onSelectNode('reception-source')}
              className={`col-span-2 sm:col-span-1 p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[105px] cursor-pointer ${
                isSelected('reception-source') || isSelected('other-source')
                  ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                  : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                <User className="w-4 h-4 text-[#1e4b3e]" />
              </div>
              <div>
                <div className="font-bold text-xs text-[#142823] tracking-wide">OTHER</div>
                <div className="text-[10px] text-[#5b7a6f] mt-0.5 leading-tight">
                  Walk-in / Agent / Corporate / other
                </div>
              </div>
              <div className="text-[9px] text-[#1e4b3e] font-semibold mt-1 opacity-80">Click to explore</div>
            </button>
          </div>

          {/* Bottom rail collecting all 5 into Central Reservation */}
          <div className="relative mt-2 sm:mt-3 h-4">
            <div className="hidden sm:block absolute top-0 left-[10%] right-[10%] h-px bg-[#2d6a4f]/50"></div>
            <div className="w-px h-4 bg-[#2d6a4f]/50 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 2: CENTRAL RESERVATION & CENTRAL PLATFORM CALLOUT
         ============================================================ */}
      <div className="relative flex flex-col items-center pt-1">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-3.5 w-full relative">
          {/* Central Reservation Pill */}
          <button
            onClick={() => onSelectNode('central-reservation')}
            className={`px-6 sm:px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2.5 cursor-pointer shadow-xs active:scale-[0.98] ${
              isSelected('central-reservation')
                ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
                : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
            }`}
          >
            <Database className="w-4 h-4 text-[#1e4b3e]" />
            <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
              CENTRAL RESERVATION
            </span>
          </button>

          {/* Connected Callout Card: CENTRAL PLATFORM */}
          <button
            onClick={() => onSelectNode('central-reservation')}
            className="xl:absolute xl:right-0 p-3 bg-white/95 border border-[#b2cfc2] rounded-2xl shadow-2xs text-left max-w-xs hover:border-[#1e4b3e] transition-all cursor-pointer group active:scale-[0.98]"
          >
            <div className="flex items-center space-x-1.5 text-xs font-bold text-[#1e4b3e] uppercase tracking-wider mb-1">
              <Network className="w-3.5 h-3.5" />
              <span>CENTRAL PLATFORM</span>
            </div>
            <p className="text-[11px] text-[#4b6b60] leading-snug">
              One guest profile • One room inventory • One folio • Connected departments
            </p>
          </button>
        </div>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: GUEST ACCOUNT CREATED */}
        <button
          onClick={() => onSelectNode('guest-account')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('guest-account')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
          }`}
        >
          <UserCheck className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
            GUEST ACCOUNT CREATED
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-5 bg-[#2d6a4f]/50 mt-1"></div>

        {/* 4 Guest Services Branch Cards */}
        <div className="w-full relative py-1">
          <div className="hidden sm:block absolute top-0 left-[18%] right-[18%] h-px bg-[#2d6a4f]/50"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
            {[
              { id: 'food-subflow', title: 'FOOD', icon: Utensils, desc: 'Dining & Villa Service' },
              { id: 'service-requests', title: 'SERVICE REQUESTS', icon: Bell, desc: 'Housekeeping & Turndown' },
              { id: 'help-support', title: 'HELP / SUPPORT', icon: Headphones, desc: 'Concierge & Assistance' },
              { id: 'my-stay', title: 'MY STAY / ROOM', icon: BedDouble, desc: 'Digital Key & Folio' },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => onSelectNode('guest-portal')}
                  className={`p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[90px] cursor-pointer ${
                    isSelected(card.id as WorkflowNodeId)
                      ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                      : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                    <Icon className="w-4 h-4 text-[#1e4b3e]" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#142823] tracking-wide">{card.title}</div>
                    <div className="text-[10px] text-[#5b7a6f] mt-0.5">{card.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative mt-2 sm:mt-2.5 h-3">
            <div className="hidden sm:block absolute top-0 left-[18%] right-[18%] h-px bg-[#2d6a4f]/50"></div>
            <div className="w-px h-3 bg-[#2d6a4f]/50 mx-auto"></div>
          </div>
        </div>

        {/* Node: GUEST PORTAL / RESORT EXPERIENCE (Dark Green Pill) */}
        <button
          onClick={() => onSelectNode('guest-portal')}
          className={`px-10 py-2.5 rounded-full transition-all duration-200 flex items-center space-x-2.5 cursor-pointer shadow-md mt-1 ${
            isSelected('guest-portal')
              ? 'bg-[#15382e] text-white ring-2 ring-[#1e4b3e] ring-offset-2 scale-[1.02]'
              : 'bg-[#1e4b3e] hover:bg-[#163c31] text-white'
          }`}
        >
          <User className="w-4 h-4 text-emerald-200" />
          <div className="text-left sm:text-center">
            <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase block sm:inline">
              GUEST PORTAL
            </span>
            <span className="text-[11px] text-emerald-200/90 font-normal sm:ml-1.5">
              / RESORT EXPERIENCE
            </span>
          </div>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: OPERATIONS (Light Sage Green Pill) */}
        <button
          onClick={() => onSelectNode('operations')}
          className={`px-10 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('operations')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-[#cfe4d8] text-[#123c30] scale-[1.02]'
              : 'border-[#bcd6c9] bg-[#d7e9e0] hover:bg-[#cbe2d5] text-[#133c30]'
          }`}
        >
          <Settings className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-bold text-xs sm:text-sm tracking-wider uppercase">
            OPERATIONS
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-5 bg-[#2d6a4f]/50 mt-1"></div>

        {/* ============================================================
            SECTION 3: 8 ROLE-BASED OPERATIONS DEPARTMENTS
           ============================================================ */}
        <div className="w-full relative py-1">
          <div className="hidden sm:block absolute top-0 left-[5%] right-[5%] h-px bg-[#2d6a4f]/50"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
            {[
              { id: 'reception-op', title: 'RECEPTION', icon: UserCheck },
              { id: 'housekeeping-op', title: 'HOUSEKEEPING', icon: Sparkles },
              { id: 'maintenance-op', title: 'MAINTENANCE', icon: Wrench },
              { id: 'laundry-op', title: 'LAUNDRY', icon: Shirt },
              { id: 'kitchen-op', title: 'KITCHEN / KDS', icon: ChefHat },
              { id: 'waiter-op', title: 'WAITER', icon: ConciergeBell },
              { id: 'inventory-op', title: 'INVENTORY', icon: Package },
              { id: 'staff-op', title: 'STAFF MANAGEMENT', icon: Users },
            ].map((op) => {
              const Icon = op.icon;
              return (
                <button
                  key={op.id}
                  onClick={() => onSelectNode(op.id as WorkflowNodeId)}
                  className={`p-2.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[85px] cursor-pointer ${
                    isSelected(op.id as WorkflowNodeId)
                      ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-1 bg-white shadow-md'
                      : 'border-[#cfe0d7] bg-[#f4f8f6] hover:bg-white hover:border-[#1e4b3e]/60 shadow-2xs'
                  }`}
                >
                  <div className="p-1 rounded-lg bg-white border border-[#d6e5dd] mb-1">
                    <Icon className="w-4 h-4 text-[#1e4b3e]" />
                  </div>
                  <div className="font-bold text-[11px] text-[#142823] tracking-tight leading-tight">
                    {op.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom rail collecting all 8 operations */}
          <div className="relative mt-2 sm:mt-2.5 h-3">
            <div className="hidden sm:block absolute top-0 left-[5%] right-[5%] h-px bg-[#2d6a4f]/50"></div>
            <div className="w-px h-3 bg-[#2d6a4f]/50 mx-auto"></div>
          </div>
        </div>

        {/* Callout Banner: REAL-TIME COORDINATION */}
        <button
          onClick={() => onSelectNode('operations')}
          className="mt-2 p-3 bg-white/95 border border-[#b8d4c7] rounded-2xl shadow-2xs text-center max-w-md w-full hover:border-[#1e4b3e] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-center space-x-2 text-xs font-bold text-[#1e4b3e] uppercase tracking-wider mb-0.5">
            <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            <span>REAL-TIME COORDINATION</span>
          </div>
          <p className="text-[11px] text-[#4b6b60]">
            All departments work together for a seamless guest stay.
          </p>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* ============================================================
            SECTION 4: SEQUENTIAL FINANCIAL & REPORTING NODES
           ============================================================ */}

        {/* Node: FOLIO + BILLING */}
        <button
          onClick={() => onSelectNode('folio-billing')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('folio-billing')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
          }`}
        >
          <Receipt className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
            FOLIO + BILLING
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: CHECKOUT */}
        <button
          onClick={() => onSelectNode('checkout')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('checkout')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
          }`}
        >
          <LogOut className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
            CHECKOUT
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: OWNER / MANAGER */}
        <button
          onClick={() => onSelectNode('owner-manager')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('owner-manager')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
          }`}
        >
          <User className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
            OWNER / MANAGER
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: DAILY REPORT */}
        <button
          onClick={() => onSelectNode('daily-report')}
          className={`px-8 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-xs ${
            isSelected('daily-report')
              ? 'border-[#1e4b3e] ring-2 ring-[#1e4b3e] ring-offset-2 bg-white scale-[1.02]'
              : 'border-[#8eb3a3] bg-white hover:border-[#1e4b3e] text-[#142823]'
          }`}
        >
          <BarChart3 className="w-4 h-4 text-[#1e4b3e]" />
          <span className="font-semibold text-xs sm:text-sm text-[#142823] tracking-wider uppercase">
            DAILY REPORT
          </span>
        </button>

        {/* Connector line */}
        <div className="w-px h-6 bg-[#2d6a4f]/50 my-1 relative">
          <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-[#2d6a4f] transform rotate-45"></div>
        </div>

        {/* Node: WHATSAPP / CLOUD ARCHIVE (Solid Dark Green Pill) */}
        <button
          onClick={() => onSelectNode('whatsapp-cloud')}
          className={`px-10 py-2.5 rounded-full transition-all duration-200 flex items-center space-x-2.5 cursor-pointer shadow-md ${
            isSelected('whatsapp-cloud')
              ? 'bg-[#15382e] text-white ring-2 ring-[#1e4b3e] ring-offset-2 scale-[1.02]'
              : 'bg-[#1e4b3e] hover:bg-[#163c31] text-white'
          }`}
        >
          <div className="flex items-center space-x-1.5">
            <MessageSquare className="w-4 h-4 text-emerald-200" />
            <Cloud className="w-4 h-4 text-emerald-200" />
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase">
            WHATSAPP / CLOUD ARCHIVE
          </span>
        </button>
      </div>

      {/* ============================================================
          SECTION 5: SECONDARY AUXILIARY MODULES
          (Room Lifecycle, POS & F&B, Multi-Property, Communications, Tally)
         ============================================================ */}
      <div className="pt-12 border-t border-[#e2ece6] mt-10">
        <div className="text-center mb-4">
          <div className="text-[11px] font-bold tracking-widest text-[#4b6b60] uppercase">
            Specialized Sub-Workflows & Integrations
          </div>
          <p className="text-xs text-[#638075] mt-0.5">
            Click any module below to inspect its dedicated architectural process:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
          {/* Room Lifecycle */}
          <button
            onClick={() => onSelectNode('room-lifecycle')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              isSelected('room-lifecycle')
                ? 'border-[#1e4b3e] bg-white ring-2 ring-[#1e4b3e] ring-offset-1 shadow-xs'
                : 'border-[#d6e5dd] bg-white/70 hover:bg-white hover:border-[#1e4b3e]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <BedDouble className="w-4 h-4 text-[#1e4b3e]" />
              <span className="text-[9px] bg-[#eaf2ee] text-[#1e4b3e] font-semibold px-1.5 py-0.2 rounded">
                10 Stages
              </span>
            </div>
            <div className="font-bold text-[#142823]">Room Lifecycle</div>
            <div className="text-[10px] text-[#638075] mt-0.5">Available → Dirty → Ready</div>
          </button>

          {/* Restaurant & KDS Flow */}
          <button
            onClick={() => onSelectNode('food-restaurant-flow')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              isSelected('food-restaurant-flow')
                ? 'border-[#1e4b3e] bg-white ring-2 ring-[#1e4b3e] ring-offset-1 shadow-xs'
                : 'border-[#d6e5dd] bg-white/70 hover:bg-white hover:border-[#1e4b3e]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <Utensils className="w-4 h-4 text-[#1e4b3e]" />
              <span className="text-[9px] bg-[#eaf2ee] text-[#1e4b3e] font-semibold px-1.5 py-0.2 rounded">
                POS
              </span>
            </div>
            <div className="font-bold text-[#142823]">Restaurant & KDS</div>
            <div className="text-[10px] text-[#638075] mt-0.5">Menu → KOT → Waiter → Folio</div>
          </button>

          {/* Multi-Property */}
          <button
            onClick={() => onSelectNode('multi-property')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              isSelected('multi-property')
                ? 'border-[#1e4b3e] bg-white ring-2 ring-[#1e4b3e] ring-offset-1 shadow-xs'
                : 'border-[#d6e5dd] bg-white/70 hover:bg-white hover:border-[#1e4b3e]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <Building2 className="w-4 h-4 text-[#1e4b3e]" />
              <span className="text-[9px] bg-[#eaf2ee] text-[#1e4b3e] font-semibold px-1.5 py-0.2 rounded">
                4 Sites
              </span>
            </div>
            <div className="font-bold text-[#142823]">Multi-Property</div>
            <div className="text-[10px] text-[#638075] mt-0.5">Tadoba, Goa, Udaipur, USA</div>
          </button>

          {/* Communications */}
          <button
            onClick={() => onSelectNode('communication')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              isSelected('communication')
                ? 'border-[#1e4b3e] bg-white ring-2 ring-[#1e4b3e] ring-offset-1 shadow-xs'
                : 'border-[#d6e5dd] bg-white/70 hover:bg-white hover:border-[#1e4b3e]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <MessageSquare className="w-4 h-4 text-[#1e4b3e]" />
              <span className="text-[9px] bg-[#eaf2ee] text-[#1e4b3e] font-semibold px-1.5 py-0.2 rounded">
                Omnichannel
              </span>
            </div>
            <div className="font-bold text-[#142823]">Communication</div>
            <div className="text-[10px] text-[#638075] mt-0.5">WhatsApp, SMS, Email Triggers</div>
          </button>

          {/* Tally */}
          <button
            onClick={() => onSelectNode('tally-accounting')}
            className={`col-span-2 sm:col-span-1 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              isSelected('tally-accounting')
                ? 'border-[#1e4b3e] bg-white ring-2 ring-[#1e4b3e] ring-offset-1 shadow-xs'
                : 'border-[#d6e5dd] bg-white/70 hover:bg-white hover:border-[#1e4b3e]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <FileSpreadsheet className="w-4 h-4 text-[#1e4b3e]" />
              <span className="text-[9px] bg-[#eaf2ee] text-[#1e4b3e] font-semibold px-1.5 py-0.2 rounded">
                ERP Sync
              </span>
            </div>
            <div className="font-bold text-[#142823]">Tally Accounting</div>
            <div className="text-[10px] text-[#638075] mt-0.5">Billing → Ledgers → Tally Prime</div>
          </button>
        </div>
      </div>
    </div>
  );
};
