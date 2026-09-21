import React, { useState } from 'react';
import { 
  User, 
  BedDouble, 
  Receipt, 
  Utensils, 
  Sparkles, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface GuestAccountViewProps {
  onNavigateTo: (id: WorkflowNodeId) => void;
}

export const GuestAccountView: React.FC<GuestAccountViewProps> = ({ onNavigateTo }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'preferences'>('overview');

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-[#1e4b3e] to-[#285d4f] rounded-2xl p-5 text-white shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-serif text-lg font-bold">
              RS
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-serif font-bold tracking-wide">Rahul Sharma</h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-300/20 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-300/30">
                  Gold Tier Guest
                </span>
              </div>
              <div className="text-xs text-emerald-100/80 mt-0.5 flex items-center space-x-3">
                <span>Guest ID: <strong className="font-mono">NRV-G-000184</strong></span>
                <span>•</span>
                <span>Room: <strong className="font-mono">Villa 101</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigateTo('guest-portal')}
              className="px-3 py-1.5 rounded-xl bg-white text-[#1e4b3e] hover:bg-emerald-50 text-xs font-semibold shadow-xs transition-all flex items-center space-x-1 cursor-pointer"
            >
              <span>Open Guest Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick pill stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-white/15 text-xs">
          <div>
            <div className="text-[10px] text-emerald-200/80 uppercase">Current Stay</div>
            <div className="font-semibold text-white">24 Sep – 27 Sep (3 N)</div>
          </div>
          <div>
            <div className="text-[10px] text-emerald-200/80 uppercase">Room Category</div>
            <div className="font-semibold text-white">Luxury Pool Villa</div>
          </div>
          <div>
            <div className="text-[10px] text-emerald-200/80 uppercase">Live Folio Balance</div>
            <div className="font-semibold text-white font-mono">₹20,400</div>
          </div>
          <div>
            <div className="text-[10px] text-emerald-200/80 uppercase">Total Visits</div>
            <div className="font-semibold text-white">3 Stays (Nirvana Group)</div>
          </div>
        </div>
      </div>

      {/* Profile Sections navigation */}
      <div className="flex space-x-2 border-b border-[#d6e5dd] pb-2 text-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === 'overview'
              ? 'bg-[#1e4b3e] text-white'
              : 'text-[#4b6b60] hover:bg-[#eaf2ee]'
          }`}
        >
          Unified Profile Overview
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === 'orders'
              ? 'bg-[#1e4b3e] text-white'
              : 'text-[#4b6b60] hover:bg-[#eaf2ee]'
          }`}
        >
          Orders & Charges ({3})
        </button>
        <button
          onClick={() => setActiveTab('preferences')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === 'preferences'
              ? 'bg-[#1e4b3e] text-white'
              : 'text-[#4b6b60] hover:bg-[#eaf2ee]'
          }`}
        >
          Guest Preferences
        </button>
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Current Stay & Room */}
          <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#142823] flex items-center space-x-1.5">
                <BedDouble className="w-4 h-4 text-[#1e4b3e]" />
                <span>Current Stay Details</span>
              </span>
              <span className="text-[10px] bg-emerald-100 text-[#1e4b3e] px-2 py-0.5 rounded font-medium">
                Checked In
              </span>
            </div>
            <div className="text-[#4b6b60] space-y-1">
              <div>Villa: <strong>Villa 101 (Pool View)</strong></div>
              <div>Check-in: 24 Sep 2026, 02:00 PM</div>
              <div>Expected Check-out: 27 Sep 2026, 11:00 AM</div>
              <div>Guests: 2 Adults, 1 Child</div>
              <div>Meal Plan: Modified American Plan (MAP - Breakfast + Dinner)</div>
            </div>
          </div>

          {/* Booking History */}
          <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#142823] flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-[#1e4b3e]" />
                <span>Booking History</span>
              </span>
              <span className="text-[10px] text-[#638075]">Across Properties</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded-lg bg-[#f8faf9] border border-[#e4ede8]">
                <div className="font-semibold text-[#142823]">Nirvana Resort — Tadoba</div>
                <div className="text-[10px] text-[#638075]">Dec 2025 • 2 Nights • Tiger Safari Suite</div>
              </div>
              <div className="p-2 rounded-lg bg-[#f8faf9] border border-[#e4ede8]">
                <div className="font-semibold text-[#142823]">Nirvana Resort — Goa</div>
                <div className="text-[10px] text-[#638075]">Apr 2025 • 4 Nights • Beachfront Cottage</div>
              </div>
            </div>
          </div>

          {/* Live Folio Snapshot */}
          <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#142823] flex items-center space-x-1.5">
                <Receipt className="w-4 h-4 text-[#1e4b3e]" />
                <span>Live Folio Snapshot</span>
              </span>
              <button
                onClick={() => onNavigateTo('folio-billing')}
                className="text-[10px] text-[#1e4b3e] font-semibold hover:underline"
              >
                Inspect Folio →
              </button>
            </div>
            <div className="text-[#4b6b60] space-y-1">
              <div className="flex justify-between"><span>Room Charges (3 Nights):</span> <span className="font-mono">₹22,500</span></div>
              <div className="flex justify-between"><span>Restaurant & Service:</span> <span className="font-mono">₹4,000</span></div>
              <div className="flex justify-between"><span>Deposit Received:</span> <span className="font-mono text-emerald-700">-₹15,000</span></div>
              <div className="pt-1.5 border-t border-[#e4ede8] flex justify-between font-bold text-[#142823]">
                <span>Balance Due:</span>
                <span className="font-mono text-[#1e4b3e]">₹20,400 (inc. taxes)</span>
              </div>
            </div>
          </div>

          {/* Contact & Verification */}
          <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-2">
            <span className="font-bold text-[#142823] flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1e4b3e]" />
              <span>Contact & Digital KYC</span>
            </span>
            <div className="text-[#4b6b60] space-y-1">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#1e4b3e]" />
                <span>+91 98230 XXXXX (WhatsApp verified)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#1e4b3e]" />
                <span>rahul.sharma@example.com</span>
              </div>
              <div className="text-[10px] text-[#638075] pt-1">
                ID Verified: Passport on file • Car: MH 12 AB 4590
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Orders */}
      {activeTab === 'orders' && (
        <div className="space-y-2 text-xs">
          {[
            { item: 'Jungle Dinner at The Pavilion', type: 'Dining', amount: '₹2,450', time: 'Yesterday, 8:40 PM', status: 'Posted to Folio' },
            { item: 'Ayurvedic Abhyanga Spa Session', type: 'Spa & Wellness', amount: '₹3,500', time: 'Today, 11:00 AM', status: 'Posted to Folio' },
            { item: 'Express Laundry (2 Shirts, 1 Trouser)', type: 'Laundry', amount: '₹600', time: 'Today, 2:15 PM', status: 'Posted to Folio' },
          ].map((order, idx) => (
            <div key={idx} className="p-3 bg-white rounded-xl border border-[#d6e5dd] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#142823]">{order.item}</div>
                <div className="text-[10px] text-[#638075] mt-0.5">{order.type} • {order.time}</div>
              </div>
              <div className="text-right">
                <div className="font-mono font-bold text-[#1e4b3e]">{order.amount}</div>
                <div className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block mt-0.5">
                  {order.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Preferences */}
      {activeTab === 'preferences' && (
        <div className="p-4 bg-white rounded-2xl border border-[#d6e5dd] space-y-3 text-xs">
          <div className="text-xs font-bold text-[#142823]">Recorded Guest Preferences</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 bg-[#f8faf9] rounded-xl border border-[#e4ede8]">
              <div className="font-semibold text-[#1e4b3e]">Bedding & Room</div>
              <div className="text-[11px] text-[#5b7a6f]">Non-feather memory foam pillows, quiet high villa requested.</div>
            </div>
            <div className="p-2.5 bg-[#f8faf9] rounded-xl border border-[#e4ede8]">
              <div className="font-semibold text-[#1e4b3e]">Dietary & Beverage</div>
              <div className="text-[11px] text-[#5b7a6f]">Vegetarian, no bell peppers, prefers freshly brewed green tea at breakfast.</div>
            </div>
            <div className="p-2.5 bg-[#f8faf9] rounded-xl border border-[#e4ede8]">
              <div className="font-semibold text-[#1e4b3e]">Special Milestones</div>
              <div className="text-[11px] text-[#5b7a6f]">Wedding Anniversary on 26th September (Complimentary fruit basket placed).</div>
            </div>
            <div className="p-2.5 bg-[#f8faf9] rounded-xl border border-[#e4ede8]">
              <div className="font-semibold text-[#1e4b3e]">Transportation</div>
              <div className="text-[11px] text-[#5b7a6f]">Airport pickup requested on departure day at 11:30 AM.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
