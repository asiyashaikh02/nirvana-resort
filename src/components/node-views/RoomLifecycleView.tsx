import React, { useState } from 'react';
import { 
  BedDouble, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Sparkles, 
  UserCheck, 
  LogOut, 
  ShieldCheck,
  Eye
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface RoomLifecycleViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const RoomLifecycleView: React.FC<RoomLifecycleViewProps> = ({ onNavigateTo }) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(3); // OCCUPIED

  const stages = [
    { name: 'AVAILABLE', dept: 'PMS Engine', desc: 'Ready for guest booking on website & OTAs', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
    { name: 'RESERVED', dept: 'Central Res', desc: 'Advance payment received, dates blocked', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { name: 'CHECK-IN', dept: 'Reception', desc: 'Guest arrival & digital key assignment', color: 'bg-teal-100 text-teal-800 border-teal-300' },
    { name: 'OCCUPIED', dept: 'Guest Stay', desc: 'In-house guest stay, live folio active', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
    { name: 'CHECK-OUT', dept: 'Reception', desc: 'Folio settled & guest departure complete', color: 'bg-amber-100 text-amber-800 border-amber-300' },
    { name: 'DIRTY', dept: 'Housekeeping', desc: 'Auto-flagged for housekeeping turnover', color: 'bg-red-100 text-red-800 border-red-300' },
    { name: 'CLEANING', dept: 'Housekeeping', desc: 'Staff inside villa executing sanitized protocol', color: 'bg-orange-100 text-orange-800 border-orange-300' },
    { name: 'INSPECTION', dept: 'Supervisor', desc: 'Floor manager quality checklist approval', color: 'bg-purple-100 text-purple-800 border-purple-300' },
    { name: 'READY', dept: 'Reception', desc: 'Villa unlocked for instant front-desk assignment', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
    { name: 'AVAILABLE', dept: 'Inventory', desc: 'Cycle completed & published back to channels', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  ];

  const current = stages[activeStageIdx];

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <BedDouble className="w-4 h-4" />
          <span>Full Room Lifecycle Engine</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Every villa transitions through a strict 10-phase operational lifecycle. This prevents uncleaned rooms from being assigned and ensures reception, housekeeping, and channel inventory stay synchronized in real time.
        </p>
      </div>

      {/* Interactive horizontal/wrap stepper */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#142823] uppercase tracking-wider">
            10-Phase Circular Status Pipeline
          </span>
          <span className="text-[11px] text-[#638075]">Click any phase to inspect</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {stages.map((stage, idx) => {
            const isSelected = activeStageIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStageIdx(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#1e4b3e] bg-[#1e4b3e] text-white shadow-xs'
                    : 'border-[#dbe6df] bg-[#f8faf9] hover:bg-white text-[#142823]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-200' : 'text-[#638075]'}`}>
                    0{idx + 1}
                  </span>
                  {idx < stages.length - 1 ? (
                    <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-emerald-200' : 'text-[#87a497]'}`} />
                  ) : (
                    <RefreshCw className={`w-3 h-3 ${isSelected ? 'text-emerald-200' : 'text-[#87a497]'}`} />
                  )}
                </div>
                <div className="text-xs font-bold mt-1 truncate">{stage.name}</div>
                <div className={`text-[10px] truncate ${isSelected ? 'text-emerald-100' : 'text-[#638075]'}`}>
                  {stage.dept}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Callout */}
        <div className="p-4 rounded-xl bg-[#f7faf8] border border-[#d6e5dd] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${current.color}`}>
                Phase {activeStageIdx + 1}: {current.name}
              </span>
              <span className="text-xs font-medium text-[#142823]">
                Managed by: <strong>{current.dept}</strong>
              </span>
            </div>
            <p className="text-xs text-[#5b7a6f] mt-1.5">{current.desc}</p>
          </div>

          <div className="shrink-0 flex items-center space-x-2">
            <button
              onClick={() => setActiveStageIdx((prev) => (prev + 1) % stages.length)}
              className="px-3 py-1.5 rounded-lg bg-[#1e4b3e] text-white hover:bg-[#15382e] text-xs font-medium flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Advance Status</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
