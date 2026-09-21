import React, { useState } from 'react';
import { WorkflowNodeId } from '../../types';
import { 
  Globe, 
  Tag, 
  Phone, 
  MessageSquare, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  CreditCard, 
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

interface BookingViewProps {
  activeSubSource?: WorkflowNodeId;
  onSelectSubSource: (id: WorkflowNodeId) => void;
  onNavigateTo: (id: WorkflowNodeId) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  activeSubSource = 'website',
  onSelectSubSource,
  onNavigateTo,
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const sources = [
    { id: 'website', name: 'Website', icon: Globe, desc: 'Direct booking engine' },
    { id: 'ota', name: 'OTA Channels', icon: Tag, desc: 'Booking.com, Agoda, etc.' },
    { id: 'call', name: 'Phone / Desk', icon: Phone, desc: 'Direct enquiries' },
    { id: 'social', name: 'Social / Chat', icon: MessageSquare, desc: 'WhatsApp, Instagram' },
    { id: 'reception-source', name: 'Reception Walk-in', icon: UserCheck, desc: 'Front desk direct' },
  ] as const;

  const currentSource = (['website', 'ota', 'call', 'social', 'reception-source', 'other-source'].includes(activeSubSource))
    ? activeSubSource
    : 'website';

  return (
    <div className="space-y-6">
      {/* Source selector tabs */}
      <div>
        <div className="text-[11px] font-semibold tracking-wider text-[#4b6b60] uppercase mb-2">
          Select Booking Channel
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {sources.map((src) => {
            const Icon = src.icon;
            const isSelected = currentSource === src.id;
            return (
              <button
                key={src.id}
                onClick={() => onSelectSubSource(src.id as WorkflowNodeId)}
                className={`p-2.5 rounded-xl border text-left transition-all duration-150 flex items-start space-x-2.5 ${
                  isSelected
                    ? 'border-[#1e4b3e] bg-[#1e4b3e]/5 shadow-sm text-[#142823]'
                    : 'border-[#e0ebe5] bg-white hover:border-[#1e4b3e]/40 text-[#4b6b60]'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-[#1e4b3e] text-white' : 'bg-[#eaf2ee] text-[#1e4b3e]'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#142823]">{src.name}</div>
                  <div className="text-[10px] text-[#638075] line-clamp-1">{src.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Content based on source */}
      {currentSource === 'website' && (
        <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div>
              <span className="text-xs font-bold text-[#1e4b3e] tracking-wide uppercase">Channel 01</span>
              <h3 className="text-base font-serif font-bold text-[#122822]">Direct Website Booking Engine</h3>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1e4b3e]/10 text-[#1e4b3e] border border-[#1e4b3e]/20">
              Zero Commission
            </span>
          </div>

          <p className="text-xs text-[#4b6b60] leading-relaxed">
            Guests visit the Nirvana Resort brand website to view live room availability, select curated packages, and confirm their reservation directly.
          </p>

          {/* Sequential 6-step flow */}
          <div className="space-y-2">
            <div className="text-[11px] font-semibold tracking-wider text-[#1e4b3e] uppercase">
              Guest Booking Journey
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { step: '01', title: 'View Rooms & Villas', desc: 'High-res photos, 360° tour, amenities' },
                { step: '02', title: 'Check Availability', desc: 'Real-time inventory lookup directly from PMS' },
                { step: '03', title: 'Select Room & Plan', desc: 'Deluxe Villa, AP / MAP / CP dining plans' },
                { step: '04', title: 'Guest Details', desc: 'Instant profile creation or repeat guest recognition' },
                { step: '05', title: 'Online Payment', desc: 'Secure payment gateway tokenization' },
                { step: '06', title: 'Booking Confirmation', desc: 'Instant WhatsApp & Email voucher' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedRoomIndex(idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    selectedRoomIndex === idx
                      ? 'border-[#1e4b3e] bg-white shadow-xs'
                      : 'border-[#dbe6df] bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-[#1e4b3e] bg-[#eaf2ee] px-1.5 py-0.5 rounded">
                      {item.step}
                    </span>
                    <span className="font-semibold text-[#142823] text-xs">{item.title}</span>
                  </div>
                  <div className="text-[11px] text-[#5b7a6f] mt-1 pl-6">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Connection to Central Reservation */}
          <div className="pt-2 border-t border-[#d6e5dd] flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-[#1e4b3e] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1e4b3e] animate-pulse"></span>
              <span>Website connects instantly to Central Reservation</span>
            </div>
            <button
              onClick={() => onNavigateTo('central-reservation')}
              className="text-xs text-[#1e4b3e] font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
            >
              <span>View Central Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {currentSource === 'ota' && (
        <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div>
              <span className="text-xs font-bold text-[#1e4b3e] tracking-wide uppercase">Channel 02</span>
              <h3 className="text-base font-serif font-bold text-[#122822]">OTA Channels & Channel Manager</h3>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1e4b3e]/10 text-[#1e4b3e] border border-[#1e4b3e]/20">
              2-Way Sync
            </span>
          </div>

          <div className="text-xs text-[#4b6b60]">
            Connected OTA portals feed bookings directly into the central resort engine, eliminating overbooking risks.
          </div>

          {/* Connected OTA logos list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            {['Booking.com', 'Agoda', 'Expedia', 'MakeMyTrip', 'Airbnb', 'TripAdvisor', 'Yatra', 'Cleartrip'].map((ota) => (
              <div key={ota} className="p-2 rounded-lg bg-white border border-[#d6e5dd] font-medium text-[#122822] shadow-2xs">
                {ota}
              </div>
            ))}
          </div>

          {/* Flow representation */}
          <div className="bg-white rounded-xl p-3 border border-[#d6e5dd] space-y-2">
            <div className="text-[11px] font-semibold text-[#1e4b3e] uppercase tracking-wider">
              Automatic Booking Ingestion
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#142823]">
              <span className="px-2 py-1 bg-[#f0f6f2] rounded-md font-medium border border-[#d6e5dd]">OTA Booking</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2 py-1 bg-[#f0f6f2] rounded-md font-medium border border-[#d6e5dd]">Reservation Received</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2 py-1 bg-[#1e4b3e] text-white rounded-md font-medium">Central Reservation</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2 py-1 bg-[#d7e9e0] text-[#133c30] rounded-md font-medium border border-[#bcd6c9]">Inventory Updated</span>
            </div>
          </div>

          {/* 4 Synchronization Badges */}
          <div>
            <div className="text-[11px] font-semibold text-[#4b6b60] uppercase tracking-wider mb-1.5">
              Continuous 2-Way Channel Synchronization
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { title: 'Availability Sync', note: 'Prevents double-booking across all channels' },
                { title: 'Rate Sync', note: 'Push dynamic seasonal or weekend rates instantly' },
                { title: 'Reservation Sync', note: 'Auto-imports guest info, dates & meal plan' },
                { title: 'Modification / Cancel Sync', note: 'Auto-releases rooms when guest cancels online' },
              ].map((sync, i) => (
                <div key={i} className="flex items-start space-x-2 p-2 bg-white/70 rounded-lg border border-[#dbe6df]">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4b3e] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#142823] text-xs">{sync.title}</div>
                    <div className="text-[10px] text-[#638075]">{sync.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentSource === 'call' && (
        <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div>
              <span className="text-xs font-bold text-[#1e4b3e] tracking-wide uppercase">Channel 03</span>
              <h3 className="text-base font-serif font-bold text-[#122822]">Phone Call & Direct Enquiry</h3>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1e4b3e]/10 text-[#1e4b3e]">
              Front Desk / Sales
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Reception Call</div>
              <div className="text-[10px] text-[#638075] mt-0.5">Inbound guest hotline enquiry</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Reservation Desk</div>
              <div className="text-[10px] text-[#638075] mt-0.5">Central resort sales agents</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Direct Corporate Enquiry</div>
              <div className="text-[10px] text-[#638075] mt-0.5">Group & wedding inquiries</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#d6e5dd] space-y-2">
            <div className="text-[11px] font-semibold text-[#1e4b3e] uppercase tracking-wider">
              Operator Reservation Flow
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 bg-[#f0f6f2] rounded-md font-medium">Call / Enquiry</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2.5 py-1 bg-[#f0f6f2] rounded-md font-medium">Reception Entry</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2.5 py-1 bg-[#f0f6f2] rounded-md font-medium">Guest Details</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2.5 py-1 bg-[#1e4b3e] text-white rounded-md font-semibold">Central Reservation</span>
            </div>
          </div>
        </div>
      )}

      {currentSource === 'social' && (
        <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div>
              <span className="text-xs font-bold text-[#1e4b3e] tracking-wide uppercase">Channel 04</span>
              <h3 className="text-base font-serif font-bold text-[#122822]">Social & Messaging Inquiries</h3>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1e4b3e]/10 text-[#1e4b3e]">
              Conversational Commerce
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">WhatsApp Booking</div>
              <div className="text-[10px] text-[#638075]">Chatbot quote & payment link</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Instagram DM</div>
              <div className="text-[10px] text-[#638075]">Direct message lead capture</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Facebook Messenger</div>
              <div className="text-[10px] text-[#638075]">Promotional campaign enquiry</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
              <div className="font-semibold text-[#142823]">Other Social Channels</div>
              <div className="text-[10px] text-[#638075]">Influencer and concierge leads</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#d6e5dd] space-y-2">
            <div className="text-[11px] font-semibold text-[#1e4b3e] uppercase tracking-wider">
              Social Lead Conversion Flow
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 bg-[#f0f6f2] rounded-md font-medium">Social Enquiry</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2.5 py-1 bg-[#f0f6f2] rounded-md font-medium">Quote & Booking Confirmation</span>
              <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
              <span className="px-2.5 py-1 bg-[#1e4b3e] text-white rounded-md font-semibold">Central Reservation</span>
            </div>
          </div>
        </div>
      )}

      {(currentSource === 'reception-source' || currentSource === 'other-source') && (
        <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div>
              <span className="text-xs font-bold text-[#1e4b3e] tracking-wide uppercase">Channel 05</span>
              <h3 className="text-base font-serif font-bold text-[#122822]">Reception & Walk-in Bookings</h3>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1e4b3e]/10 text-[#1e4b3e]">
              On-Property
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              { title: 'Walk-in Booking', desc: 'Direct gate arrival booking' },
              { title: 'Manual Booking', desc: 'VIP / Owner referral entries' },
              { title: 'Guest Verification', desc: 'Digital ID / Passport capture' },
              { title: 'Check-in & Keys', desc: 'Instant physical/digital key pass' },
              { title: 'Room Assignment', desc: 'Auto or manual villa allocation' },
              { title: 'Guest Folio Opened', desc: 'Auto-zero initial bill created' },
              { title: 'Check-out Handling', desc: 'Final review & settlement' },
              { title: 'Booking Management', desc: 'Dates or meal plan adjustments' },
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-white rounded-xl border border-[#d6e5dd]">
                <div className="font-semibold text-[#142823] text-xs">{item.title}</div>
                <div className="text-[10px] text-[#638075] mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
