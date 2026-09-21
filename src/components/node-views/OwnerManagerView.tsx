import React from 'react';
import { 
  Users, 
  TrendingUp, 
  BedDouble, 
  UserCheck, 
  LogOut, 
  AlertCircle, 
  Activity, 
  FileSpreadsheet, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface OwnerManagerViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const OwnerManagerView: React.FC<OwnerManagerViewProps> = ({ onNavigateTo }) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Executive Leadership Portal</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Clean high-level command visibility for resort owners and general managers. View vital property health in seconds from any smartphone or tablet without wading through complicated reports.
        </p>
      </div>

      {/* Central Management View Card */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
          <div>
            <div className="text-[10px] font-bold text-[#1e4b3e] uppercase tracking-wider">
              Real-Time Property Health
            </div>
            <h3 className="font-serif font-bold text-base text-[#142823]">
              CENTRAL MANAGEMENT VIEW
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-[#1e4b3e] font-semibold border border-emerald-200">
            Nirvana Resort — Live
          </span>
        </div>

        {/* 6 Clean Executive Metric Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Occupancy</span>
              <BedDouble className="w-3.5 h-3.5 text-[#1e4b3e]" />
            </div>
            <div className="font-serif font-bold text-lg text-[#142823] mt-1">80%</div>
            <div className="text-[10px] text-[#638075]">32 of 40 Villas Occupied</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Total In-House Guests</span>
              <Users className="w-3.5 h-3.5 text-[#1e4b3e]" />
            </div>
            <div className="font-serif font-bold text-lg text-[#142823] mt-1">86 Guests</div>
            <div className="text-[10px] text-[#638075]">64 Adults • 22 Kids</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Daily Revenue</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#1e4b3e]" />
            </div>
            <div className="font-serif font-bold text-lg text-[#1e4b3e] mt-1 font-mono">₹2,84,500</div>
            <div className="text-[10px] text-[#638075]">Rooms + F&B + Spa</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Today's Check-ins</span>
              <UserCheck className="w-3.5 h-3.5 text-[#1e4b3e]" />
            </div>
            <div className="font-serif font-bold text-lg text-[#142823] mt-1">12 Arrivals</div>
            <div className="text-[10px] text-[#638075]">8 Completed • 4 En Route</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Today's Check-outs</span>
              <LogOut className="w-3.5 h-3.5 text-[#1e4b3e]" />
            </div>
            <div className="font-serif font-bold text-lg text-[#142823] mt-1">9 Departures</div>
            <div className="text-[10px] text-[#638075]">All 9 Folios Cleared</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6]">
            <div className="text-[11px] text-[#5b7a6f] flex items-center justify-between">
              <span>Pending Issues</span>
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
            </div>
            <div className="font-serif font-bold text-lg text-amber-900 mt-1">3 Tickets</div>
            <div className="text-[10px] text-amber-800">1 AC • 1 Wi-Fi • 1 Luggage</div>
          </div>
        </div>

        {/* Department Activity & Reports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#142823]">
              <Activity className="w-4 h-4 text-[#1e4b3e]" />
              <span>Department Activity</span>
            </div>
            <div className="space-y-1 text-xs text-[#5b7a6f]">
              <div className="flex justify-between"><span>Housekeeping:</span> <strong className="text-[#142823]">6 Cleaned • 2 In Progress</strong></div>
              <div className="flex justify-between"><span>Kitchen / KDS:</span> <strong className="text-[#142823]">14 KOTs Active • 14m avg</strong></div>
              <div className="flex justify-between"><span>Waitstaff:</span> <strong className="text-[#142823]">100% orders acknowledged &lt; 3m</strong></div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#142823]">
              <FileSpreadsheet className="w-4 h-4 text-[#1e4b3e]" />
              <span>Executive Reports</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <button
                onClick={() => onNavigateTo?.('daily-report')}
                className="w-full text-left p-1.5 rounded bg-white hover:bg-[#eaf2ee] border border-[#d6e5dd] flex items-center justify-between font-medium text-[#1e4b3e] cursor-pointer"
              >
                <span>Daily Night Audit & Resort Summary</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <div className="text-[11px] text-[#638075]">Auto-compiled every night at 11:59 PM.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
