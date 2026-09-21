import React from 'react';
import { 
  Utensils, 
  Smartphone, 
  Receipt, 
  ChefHat, 
  ConciergeBell, 
  BedDouble, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface FoodFlowViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const FoodFlowView: React.FC<FoodFlowViewProps> = ({ onNavigateTo }) => {
  const steps = [
    { label: 'GUEST', desc: 'In Villa 101 or Pavilion Restaurant table', icon: BedDouble },
    { label: 'GUEST PORTAL', desc: 'Scans QR code on table or villa bedside', icon: Smartphone },
    { label: 'FOOD ORDER', desc: 'Selects dishes, adds spice / dietary notes', icon: Utensils },
    { label: 'RESTAURANT / POS', desc: 'Central restaurant management & cashier terminal', icon: Layers },
    { label: 'KOT', desc: 'Kitchen Order Ticket generated instantaneously', icon: Receipt },
    { label: 'KDS', desc: 'Kitchen Display System screens in chef station', icon: ChefHat },
    { label: 'KITCHEN', desc: 'Food prepared with live station timer', icon: ChefHat },
    { label: 'READY', desc: 'Chef marks ticket ready on touch monitor', icon: CheckCircle2 },
    { label: 'WAITER', desc: 'Waiter phone notifies & collects tray from pass', icon: ConciergeBell },
    { label: 'GUEST / ROOM', desc: 'Hot gourmet meal served to Villa 101', icon: BedDouble },
    { label: 'GUEST FOLIO', desc: 'Charge seamlessly billed to Villa 101 folio', icon: Receipt },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <Utensils className="w-4 h-4" />
          <span>Connected POS & F&B Architecture</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Unlike disjointed third-party restaurant software, the Nirvana Resort restaurant POS and kitchen display system (KDS) are natively hardwired into the central resort platform. Dining charges automatically post to the guest's folio with zero manual cashier re-entry.
        </p>
      </div>

      {/* Sequential Food Flow Diagram */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-3">
        <div className="text-[11px] font-bold text-[#142823] uppercase tracking-wider mb-2">
          End-to-End Dining & Room Service Flow
        </div>

        <div className="space-y-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHighlight = step.label.includes('POS') || step.label.includes('KDS') || step.label.includes('FOLIO');
            return (
              <div key={idx}>
                <div
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                    isHighlight
                      ? 'bg-[#eaf2ee] border-[#1e4b3e]/40 shadow-xs'
                      : 'bg-[#f8faf9] border-[#e2ece6]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#1e4b3e] text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-[#142823] flex items-center space-x-2">
                        <span>{step.label}</span>
                        {isHighlight && (
                          <span className="text-[9px] bg-[#1e4b3e] text-white px-1.5 py-0.2 rounded font-semibold">
                            Connected Core
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#5b7a6f]">{step.desc}</div>
                    </div>
                  </div>
                  <Icon className="w-4 h-4 text-[#1e4b3e] shrink-0 opacity-70" />
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#1e4b3e]/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
