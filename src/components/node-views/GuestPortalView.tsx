import React, { useState } from 'react';
import { 
  Utensils, 
  ConciergeBell, 
  Sparkles, 
  Shirt, 
  Wrench, 
  Receipt, 
  Headphones, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Clock,
  Send
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface GuestPortalViewProps {
  onNavigateTo: (id: WorkflowNodeId) => void;
}

export const GuestPortalView: React.FC<GuestPortalViewProps> = ({ onNavigateTo }) => {
  const [selectedService, setSelectedService] = useState<string>('ORDER FOOD');
  const [interactiveOrderStep, setInteractiveOrderStep] = useState<number>(3); // Place Order

  const portalServices = [
    { label: 'ORDER FOOD', icon: Utensils, desc: 'Dining & Villa Delivery' },
    { label: 'ROOM SERVICE', icon: ConciergeBell, desc: 'Snacks, Amenities, Tea' },
    { label: 'HOUSEKEEPING', icon: Sparkles, desc: 'Extra towels, Cleaning' },
    { label: 'LAUNDRY', icon: Shirt, desc: 'Same-day press & wash' },
    { label: 'MAINTENANCE / HELP', icon: Wrench, desc: 'AC, TV, Wi-Fi support' },
    { label: 'MY FOLIO', icon: Receipt, desc: 'View live stay invoice' },
    { label: 'RECEPTION / SUPPORT', icon: Headphones, desc: 'Front desk direct line' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <Smartphone className="w-4 h-4" />
          <span>Guest Digital Touchpoint</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Guests access the web portal directly via QR code placed in Villa 101 or WhatsApp link without downloading any app. Every action directly feeds the resort operations workflow.
        </p>
      </div>

      {/* Side-by-side or stacked: Mobile Phone Mockup + Active Micro-Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Phone Shell Mockup (5 cols) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-[280px] sm:w-[300px] bg-[#142823] p-3 rounded-[38px] shadow-xl border-4 border-[#254d41] relative">
            {/* Top speaker & camera notch */}
            <div className="w-24 h-4 bg-[#142823] rounded-b-xl mx-auto mb-2 flex items-center justify-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
              <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
            </div>

            {/* Inner Phone Screen */}
            <div className="bg-[#f7faf8] rounded-[28px] overflow-hidden p-4 space-y-3.5 border border-white/10 text-xs">
              {/* Resort Header */}
              <div className="text-center pt-1 border-b border-[#e2ece6] pb-3">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#1e4b3e] uppercase">
                  NIRVANA RESORT
                </div>
                <div className="text-xs font-semibold text-[#142823] mt-0.5">
                  Guest Digital Portal
                </div>
              </div>

              {/* Welcome Badge */}
              <div className="bg-gradient-to-br from-[#1e4b3e] to-[#2b6051] text-white p-3 rounded-xl shadow-xs">
                <div className="text-[11px] text-emerald-200">Welcome to paradise</div>
                <div className="font-serif font-bold text-sm">Rahul Sharma</div>
                <div className="flex justify-between items-center text-[10px] text-emerald-100/90 mt-1.5 pt-1.5 border-t border-white/15">
                  <span>Room 101 (Pool Villa)</span>
                  <span>24 Sep – 27 Sep</span>
                </div>
              </div>

              {/* Service Buttons List */}
              <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-0.5">
                <div className="text-[10px] font-bold text-[#5b7a6f] uppercase tracking-wider px-1">
                  Touchless Resort Services
                </div>
                {portalServices.map((svc) => {
                  const Icon = svc.icon;
                  const isSelected = selectedService === svc.label;
                  return (
                    <button
                      key={svc.label}
                      onClick={() => setSelectedService(svc.label)}
                      className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1e4b3e] text-white shadow-xs font-semibold'
                          : 'bg-white hover:bg-[#eaf2ee] text-[#142823] border border-[#e2ece6]'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-[#1e4b3e]'}`} />
                        <span className="text-xs tracking-wide">{svc.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#87a497]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Bottom simulated Home Indicator */}
              <div className="pt-2 flex justify-center">
                <div className="w-20 h-1 bg-neutral-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Micro-Workflow Visualizer (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#e2ece6] pb-3">
            <div>
              <span className="text-[10px] font-bold text-[#1e4b3e] uppercase tracking-wider">
                Instant Triggered Workflow
              </span>
              <h4 className="text-base font-serif font-bold text-[#122822]">
                {selectedService}
              </h4>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#eaf2ee] text-[#1e4b3e] border border-[#d6e5dd]">
              Live In-Room Link
            </span>
          </div>

          {/* Workflow specific branches */}
          {selectedService === 'ORDER FOOD' && (
            <div className="space-y-4">
              <p className="text-xs text-[#4b6b60]">
                When Rahul orders in the portal, the order routes through POS directly to KDS in the kitchen, notifying the assigned waiter and posting the charge to his folio:
              </p>

              {/* The 8-step connected flow requested in the prompt */}
              <div className="space-y-1.5">
                {[
                  { step: '01', title: 'Order Food', detail: 'Guest clicks menu in Villa 101' },
                  { step: '02', title: 'Digital Menu', detail: 'Browse photos, chef specials & dietary tags' },
                  { step: '03', title: 'Select Items', detail: '1x Paneer Tikka, 1x Dal Makhani, 2x Naan' },
                  { step: '04', title: 'Place Order', detail: 'One-click authenticated order submit' },
                  { step: '05', title: 'Restaurant / POS', detail: 'Instant KOT auto-generated & bill opened' },
                  { step: '06', title: 'Kitchen KDS', detail: 'Chef screen notifies order with prep timer' },
                  { step: '07', title: 'Waiter Dispatched', detail: 'Waiter phone notifies order ready for pickup' },
                  { step: '08', title: 'Guest Delivered & Folio Posted', detail: 'Villa 101 delivered + ₹1,450 to Folio' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-[#f8faf9] rounded-xl border border-[#e2ece6] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#1e4b3e] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                        {s.step}
                      </span>
                      <span className="font-semibold text-[#142823]">{s.title}</span>
                    </div>
                    <span className="text-[11px] text-[#5b7a6f]">{s.detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onNavigateTo('kitchen-op')}
                  className="text-xs text-[#1e4b3e] font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>See Kitchen / KDS Interface</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigateTo('waiter-op')}
                  className="text-xs text-[#1e4b3e] font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>See Waiter View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {selectedService === 'ROOM SERVICE' && (
            <div className="space-y-4 text-xs">
              <p className="text-[#4b6b60]">
                Requests for coffee, afternoon high tea, ice buckets, or extra cutlery route directly to the on-duty resort butler and waiter team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                  <div className="font-semibold text-[#142823]">Guest Request</div>
                  <div className="text-[#5b7a6f] mt-1">"Please send fresh ginger-lemon tea & extra cups to Villa 101"</div>
                </div>
                <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                  <div className="font-semibold text-[#142823]">Butler Notification</div>
                  <div className="text-[#5b7a6f] mt-1">Waiter device rings with high-priority audio chime</div>
                </div>
              </div>
              <div className="p-3 bg-[#eaf2ee] rounded-xl border border-[#bcd6c9] text-[#133c30]">
                <strong>SLA Tracking:</strong> Response within 4 minutes. Delivered within 12 minutes.
              </div>
            </div>
          )}

          {selectedService === 'HOUSEKEEPING' && (
            <div className="space-y-4 text-xs">
              <p className="text-[#4b6b60]">
                Guests tap to request turndown service, extra bath towels, or complete villa cleaning:
              </p>
              <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6] space-y-2">
                <div className="flex items-center space-x-2 text-[#1e4b3e] font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Housekeeping Dispatch Flow</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-1 bg-white border border-[#d6e5dd] rounded">Guest Tap</span>
                  <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
                  <span className="px-2 py-1 bg-white border border-[#d6e5dd] rounded">Floor Supervisor Assigned</span>
                  <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
                  <span className="px-2 py-1 bg-[#1e4b3e] text-white rounded">Housekeeper Mobile App</span>
                  <ArrowRight className="w-3 h-3 text-[#1e4b3e]" />
                  <span className="px-2 py-1 bg-[#d7e9e0] text-[#133c30] rounded">Completed & Verified</span>
                </div>
              </div>
            </div>
          )}

          {selectedService === 'LAUNDRY' && (
            <div className="space-y-3 text-xs">
              <p className="text-[#4b6b60]">
                Schedule villa pickup for pressing, dry cleaning, or express wash:
              </p>
              <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                <div className="font-semibold text-[#142823]">Pickup Request Flow</div>
                <div className="text-[#5b7a6f] mt-1">
                  Pickup Scheduled (3:00 PM) → Linen bag collected from Villa 101 → Barcoded item intake → Laundry processing → Returned pressed to wardrobe → Bill posted to Folio.
                </div>
              </div>
            </div>
          )}

          {selectedService === 'MAINTENANCE / HELP' && (
            <div className="space-y-3 text-xs">
              <p className="text-[#4b6b60]">
                Instant ticket creation for rapid technical resolution:
              </p>
              <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                <div className="font-semibold text-[#142823]">Maintenance Escalation</div>
                <div className="text-[#5b7a6f] mt-1">
                  AC temperature adjustment / filter check → Duty technician auto-assigned via engineering app → Status updates in real-time on guest phone.
                </div>
              </div>
            </div>
          )}

          {selectedService === 'MY FOLIO' && (
            <div className="space-y-3 text-xs">
              <p className="text-[#4b6b60]">
                Complete transparency without standing in line at the front desk:
              </p>
              <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                <div className="font-semibold text-[#142823]">Live Folio Access</div>
                <div className="text-[#5b7a6f] mt-1">
                  Rahul can inspect all room charges, restaurant bills, and taxes, or settle with UPI / card before departure.
                </div>
              </div>
            </div>
          )}

          {selectedService === 'RECEPTION / SUPPORT' && (
            <div className="space-y-3 text-xs">
              <p className="text-[#4b6b60]">
                Direct line to resort duty manager and concierge:
              </p>
              <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
                <div className="font-semibold text-[#142823]">Front Desk Concierge</div>
                <div className="text-[#5b7a6f] mt-1">
                  One-tap WhatsApp concierge chat or voice call for tiger safari bookings, airport transfer, or local sightseeing.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
