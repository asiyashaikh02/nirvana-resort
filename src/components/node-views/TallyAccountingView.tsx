import React from 'react';
import { FileSpreadsheet, ArrowDown, ArrowRight, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface TallyAccountingViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const TallyAccountingView: React.FC<TallyAccountingViewProps> = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Financial & Tally ERP Synchronization</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Export audited resort invoices, guest receipts, F&B sales, and GST ledgers directly into Tally Prime / ERP 9 without double entry.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        {/* The 3-step requested flow */}
        <div className="flex flex-col items-center space-y-2 text-xs">
          <div className="w-full max-w-sm p-3.5 bg-[#f8faf9] border border-[#e2ece6] rounded-xl text-center">
            <div className="font-bold text-[#142823]">Billing Data</div>
            <div className="text-[11px] text-[#638075]">Audited guest folios, restaurant bills & payment vouchers</div>
          </div>

          <ArrowDown className="w-4 h-4 text-[#1e4b3e]" />

          <div className="w-full max-w-sm p-3.5 bg-[#eaf2ee] border border-[#1e4b3e]/30 rounded-xl text-center">
            <div className="font-bold text-[#1e4b3e]">Accounting Export</div>
            <div className="text-[11px] text-[#4b6b60]">Automated XML / CSV ledger mapping & tax reconciliation</div>
          </div>

          <ArrowDown className="w-4 h-4 text-[#1e4b3e]" />

          <div className="w-full max-w-sm p-3.5 bg-[#1e4b3e] text-white rounded-xl text-center shadow-xs">
            <div className="font-bold">Tally Prime / ERP 9</div>
            <div className="text-[11px] text-emerald-100/90">Direct ledger entry into CA's accounting records</div>
          </div>
        </div>

        {/* Ledger Breakdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-2">
          {[
            { title: 'Room Sales Ledger', desc: 'Mapped to Villa tariff revenue' },
            { title: 'F&B Food Ledger', desc: 'Kitchen & Pavilion restaurant sales' },
            { title: 'GST / Tax Ledger', desc: 'CGST 9% + SGST 9% auto-segregated' },
            { title: 'Payment Gateways', desc: 'Bank accounts, UPI & Card settlements' },
          ].map((l, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-[#f8faf9] border border-[#e2ece6]">
              <div className="font-semibold text-[#142823] text-[11px]">{l.title}</div>
              <div className="text-[10px] text-[#638075] mt-0.5">{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
