import React from 'react';
import { 
  Database, 
  ArrowDown, 
  ArrowRight, 
  Globe, 
  Tag, 
  Phone, 
  MessageSquare, 
  UserCheck, 
  Layers, 
  FileText, 
  BedDouble, 
  Receipt, 
  Sparkles,
  CheckCircle2,
  Users
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface CentralReservationViewProps {
  onNavigateTo: (id: WorkflowNodeId) => void;
}

export const CentralReservationView: React.FC<CentralReservationViewProps> = ({ onNavigateTo }) => {
  return (
    <div className="space-y-6">
      {/* Overview intro */}
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <Database className="w-4 h-4" />
          <span>Core Ingestion & Unification Layer</span>
        </div>
        <p className="text-xs text-[#4b6b60] leading-relaxed">
          Regardless of where a guest booking originates—whether direct website, 3rd-party OTA, telephone call, WhatsApp enquiry, or walk-in reception—every transaction flows into one single, unified Central Reservation System.
        </p>
      </div>

      {/* Visual Architectural Funnel */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="text-[11px] font-bold text-[#142823] uppercase tracking-wider text-center">
          Omnichannel Booking Funnel
        </div>

        {/* Input Sources */}
        <div className="grid grid-cols-5 gap-1.5 text-center">
          {[
            { label: 'Website', icon: Globe },
            { label: 'OTA', icon: Tag },
            { label: 'Call', icon: Phone },
            { label: 'Social', icon: MessageSquare },
            { label: 'Reception', icon: UserCheck },
          ].map((src, i) => {
            const Icon = src.icon;
            return (
              <div key={i} className="bg-[#f7faf8] border border-[#dbe6df] rounded-xl p-2 flex flex-col items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-[#1e4b3e] mb-1" />
                <span className="text-[11px] font-semibold text-[#142823]">{src.label}</span>
              </div>
            );
          })}
        </div>

        {/* Downward Funnel connectors */}
        <div className="flex flex-col items-center justify-center py-1">
          <div className="w-px h-5 bg-[#1e4b3e]/30"></div>
          <div className="p-1 bg-[#1e4b3e] text-white rounded-full">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Central Core Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e4b3e] to-[#14352b] text-white text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-6 -mt-6 pointer-events-none"></div>
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold tracking-wider uppercase text-emerald-200 mb-1">
            <Database className="w-4 h-4" />
            <span>Nirvana Central Reservation Engine</span>
          </div>
          <div className="text-base font-serif font-bold tracking-wide">
            One Centralized Booking Record
          </div>
          <p className="text-[11px] text-emerald-100/80 mt-1 max-w-md mx-auto">
            Atomic record created in real-time. Eliminates sync delays, mismatched pricing, or double-booked inventory.
          </p>
        </div>

        {/* Downward Funnel */}
        <div className="flex flex-col items-center justify-center py-1">
          <div className="w-px h-5 bg-[#1e4b3e]/30"></div>
          <div className="p-1 bg-[#1e4b3e] text-white rounded-full">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 4 Core Pillars Generated */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { title: 'Guest Profile', desc: 'Unified identity & preferences', icon: Users, target: 'guest-account' as WorkflowNodeId },
            { title: 'Room Inventory', desc: 'Live dates lock & rate matrix', icon: BedDouble, target: 'room-lifecycle' as WorkflowNodeId },
            { title: 'Reservation', desc: 'Confirmed booking voucher', icon: FileText, target: 'booking' as WorkflowNodeId },
            { title: 'Guest Folio', desc: 'Zero-balance digital ledger', icon: Receipt, target: 'folio-billing' as WorkflowNodeId },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={() => onNavigateTo(item.target)}
                className="p-3 bg-[#f8faf9] border border-[#d6e5dd] hover:border-[#1e4b3e] hover:bg-white rounded-xl text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 bg-[#eaf2ee] text-[#1e4b3e] rounded-lg group-hover:bg-[#1e4b3e] group-hover:text-white transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#79998d] group-hover:text-[#1e4b3e] group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="text-xs font-semibold text-[#142823]">{item.title}</div>
                <div className="text-[10px] text-[#638075] mt-0.5">{item.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Central Platform Benefits */}
      <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-2.5">
        <div className="flex items-center space-x-2 text-xs font-bold text-[#1e4b3e] uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Central Platform Guarantees</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-2 text-[#4b6b60]">
            <CheckCircle2 className="w-4 h-4 text-[#1e4b3e] shrink-0" />
            <span><strong>One Guest Profile</strong> — across repeat visits & sister properties</span>
          </div>
          <div className="flex items-center space-x-2 text-[#4b6b60]">
            <CheckCircle2 className="w-4 h-4 text-[#1e4b3e] shrink-0" />
            <span><strong>One Room Inventory</strong> — absolute single source of truth</span>
          </div>
          <div className="flex items-center space-x-2 text-[#4b6b60]">
            <CheckCircle2 className="w-4 h-4 text-[#1e4b3e] shrink-0" />
            <span><strong>One Unified Folio</strong> — room, dining, spa, and activities</span>
          </div>
          <div className="flex items-center space-x-2 text-[#4b6b60]">
            <CheckCircle2 className="w-4 h-4 text-[#1e4b3e] shrink-0" />
            <span><strong>Connected Departments</strong> — reception, kitchen, housekeeping, billing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
