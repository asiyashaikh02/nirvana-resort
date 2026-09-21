import React, { useState } from 'react';
import { 
  Receipt, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  LogOut, 
  ShieldCheck, 
  Download,
  DollarSign
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface FolioBillingViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const FolioBillingView: React.FC<FolioBillingViewProps> = ({ onNavigateTo }) => {
  const [checkoutSimulated, setCheckoutSimulated] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <Receipt className="w-4 h-4" />
          <span>Unified Guest Folio & Settlement</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Every charge incurred across rooms, restaurants, spa, laundry, and excursions gathers automatically in real-time into ONE central folio. Eliminates missing bills at checkout.
        </p>
      </div>

      {/* The Math Formula Card */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
          <div>
            <div className="text-[10px] font-bold text-[#1e4b3e] uppercase tracking-wider">
              Mathematical Folio Formulation
            </div>
            <h3 className="font-serif font-bold text-base text-[#142823]">
              ONE GUEST FOLIO — VILLA 101
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#eaf2ee] text-[#1e4b3e]">
            Folio #FL-9082
          </span>
        </div>

        {/* Formula breakdown */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">Room Charges (3 Nights @ ₹7,500)</span>
            <span className="font-bold text-[#142823]">₹22,500</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">+ Restaurant (Pavilion Dinner)</span>
            <span className="font-bold text-[#142823]">₹2,450</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">+ Room Service (Breakfast & High Tea)</span>
            <span className="font-bold text-[#142823]">₹950</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">+ Laundry (Express Dry Clean)</span>
            <span className="font-bold text-[#142823]">₹600</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">+ Other Services (Ayurvedic Spa)</span>
            <span className="font-bold text-[#142823]">₹3,500</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#f8faf9] flex items-center justify-between">
            <span className="font-sans font-medium text-[#142823]">+ Taxes & Luxury Cess (18% GST)</span>
            <span className="font-bold text-[#142823]">₹5,400</span>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-emerald-800">
            <span className="font-sans font-medium">- Advance Booking Payment</span>
            <span className="font-bold">-₹15,000</span>
          </div>

          {/* Sum */}
          <div className="p-3 rounded-xl bg-[#1e4b3e] text-white flex items-center justify-between text-sm pt-3 font-sans">
            <div>
              <div className="text-[10px] text-emerald-200 uppercase font-mono tracking-wider">= Final Balance Due</div>
              <div className="font-serif font-bold text-lg">₹20,400</div>
            </div>
            <div className="text-right text-xs text-emerald-100">
              <span>Ready for Final Settlement</span>
            </div>
          </div>
        </div>

        {/* 4-Step Checkout Pipeline */}
        <div className="pt-3 border-t border-[#d6e5dd] space-y-3">
          <div className="text-[11px] font-bold text-[#142823] uppercase tracking-wider">
            Settlement & Departure Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              { title: 'Folio Review', note: 'Digital confirmation on guest phone', icon: Receipt },
              { title: 'Payment', note: 'UPI, Credit Card, Cash or Split', icon: CreditCard },
              { title: 'GST Invoice', note: 'Automated tax invoice generated', icon: FileText },
              { title: 'Checkout', note: 'Keys surrendered & room marked dirty', icon: LogOut },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="p-3 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#1e4b3e] font-semibold">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{step.title}</span>
                  </div>
                  <div className="text-[10px] text-[#638075]">{step.note}</div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCheckoutSimulated(true)}
              className="px-3.5 py-2 rounded-xl bg-[#1e4b3e] text-white hover:bg-[#163b31] text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{checkoutSimulated ? '✓ Checkout Complete!' : 'Simulate 1-Click Checkout'}</span>
            </button>

            {checkoutSimulated && (
              <span className="text-xs text-[#1e4b3e] font-medium bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200">
                Room 101 now marked DIRTY → Handed to Housekeeping
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
