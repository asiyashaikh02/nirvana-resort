import React, { useState } from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  Cloud, 
  Check, 
  Copy, 
  CheckCircle2, 
  Send, 
  Share2, 
  FileText,
  Calendar,
  X
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface DailyReportViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const DailyReportView: React.FC<DailyReportViewProps> = ({ onNavigateTo }) => {
  const [showWhatsAppPreview, setShowWhatsAppPreview] = useState<boolean>(false);
  const [cloudSaved, setCloudSaved] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const reportDate = '24 September 2026';

  const handleSaveToCloud = () => {
    setCloudSaved(true);
    setTimeout(() => {
      // Keep state saved
    }, 300);
  };

  const whatsappMessageText = `*NIRVANA RESORT — DAILY EXECUTIVE SUMMARY*
📅 Date: 24 September 2026
🏨 Property: Nirvana Resort & Spa

👥 Total Guests: 86
📈 Occupancy: 80% (32/40 Villas)
💰 Revenue: ₹2,84,500
• Rooms: ₹1,80,000
• F&B (Pavilion & In-Room): ₹68,500
• Spa & Wellness: ₹24,000
• Activities / Safari: ₹12,000

🔑 Check-ins Today: 12
🚪 Check-outs Today: 9
⚠️ Pending Issues: 3 (All assigned to duty team)
🧹 Housekeeping SLA: 98.4%
⭐ Guest Satisfaction: 4.9 / 5.0

_Generated automatically by Nirvana Resort Management System_`;

  const copyToClipboard = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(whatsappMessageText).catch(() => {
          // Silent fallback in restricted iframe
        });
      }
    } catch {
      // Ignore security policy exception in sandboxed environments
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>Automated Daily Flash Audit</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Every evening at midnight or on-demand, the central engine computes the property metrics, delivers the executive snapshot directly to owners via WhatsApp, and archives the audited backup to encrypted cloud storage.
        </p>
      </div>

      {/* Main Report Card */}
      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
          <div>
            <div className="text-[10px] font-bold text-[#1e4b3e] uppercase tracking-wider">
              End-of-Day Audit Report
            </div>
            <h3 className="font-serif font-bold text-base text-[#142823]">
              DAILY RESORT SUMMARY
            </h3>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#eaf2ee] text-[#1e4b3e] border border-[#d6e5dd]">
            {reportDate}
          </span>
        </div>

        {/* 6 Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Total Guests</div>
            <div className="text-base font-bold text-[#142823] mt-0.5">86</div>
          </div>
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Occupancy</div>
            <div className="text-base font-bold text-[#1e4b3e] mt-0.5">80%</div>
          </div>
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Daily Revenue</div>
            <div className="text-base font-bold text-[#142823] mt-0.5 font-mono">₹2,84,500</div>
          </div>
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Check-ins</div>
            <div className="text-base font-bold text-[#142823] mt-0.5">12</div>
          </div>
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Check-outs</div>
            <div className="text-base font-bold text-[#142823] mt-0.5">9</div>
          </div>
          <div className="p-3 bg-[#f8faf9] rounded-xl border border-[#e2ece6]">
            <div className="text-[10px] text-[#638075] uppercase">Pending Issues</div>
            <div className="text-base font-bold text-amber-800 mt-0.5">3</div>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowWhatsAppPreview(true)}
            className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>SEND VIA WHATSAPP</span>
          </button>

          <button
            onClick={handleSaveToCloud}
            className="px-4 py-2.5 rounded-xl bg-[#1e4b3e] hover:bg-[#163b31] text-white text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
          >
            <Cloud className="w-4 h-4" />
            <span>SAVE TO CLOUD</span>
          </button>
        </div>

        {/* Cloud Saved Confirmation Banner */}
        {cloudSaved && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-[#1e4b3e] flex items-center justify-between animate-fadeIn">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold">✓ Daily Report Saved</div>
                <div className="text-[11px] text-emerald-800">{reportDate} • Hash: #NIRVANA-ARC-2409</div>
              </div>
            </div>
            <span className="text-[10px] bg-white px-2 py-0.5 rounded text-emerald-900 border border-emerald-200">
              Encrypted Cloud Archive
            </span>
          </div>
        )}
      </div>

      {/* Realistic WhatsApp Message Preview Modal */}
      {showWhatsAppPreview && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#efeae2] rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-neutral-300">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] text-white p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  NR
                </div>
                <div>
                  <div className="font-semibold text-xs leading-tight">Nirvana Executive Bot</div>
                  <div className="text-[10px] text-emerald-200">Online • Automated System</div>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppPreview(false)}
                className="p-1 rounded-full hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body with Chat Pattern */}
            <div className="p-4 space-y-3 max-h-[380px] overflow-y-auto">
              <div className="flex justify-center">
                <span className="bg-white/80 text-[10px] px-2.5 py-0.5 rounded-full text-neutral-600 shadow-2xs">
                  TODAY
                </span>
              </div>

              {/* Message Bubble */}
              <div className="bg-[#dcf8c6] p-3.5 rounded-2xl rounded-tr-none shadow-xs text-xs text-neutral-900 leading-relaxed font-sans max-w-[92%] ml-auto border border-emerald-200/50">
                <div className="font-bold text-[#075e54] text-xs pb-1 border-b border-emerald-300/40">
                  NIRVANA RESORT — DAILY EXECUTIVE SUMMARY
                </div>
                <div className="py-1.5 space-y-1 text-[11px]">
                  <div>📅 <strong>Date:</strong> 24 September 2026</div>
                  <div>🏨 <strong>Property:</strong> Nirvana Resort & Spa</div>
                  <div className="pt-1">👥 <strong>Total Guests:</strong> 86</div>
                  <div>📈 <strong>Occupancy:</strong> 80% (32/40 Villas)</div>
                  <div>💰 <strong>Revenue:</strong> ₹2,84,500</div>
                  <div className="pl-3 text-[10px] text-neutral-700">
                    • Rooms: ₹1,80,000<br/>
                    • F&B (Pavilion & Villa): ₹68,500<br/>
                    • Spa & Wellness: ₹24,000<br/>
                    • Safari & Activities: ₹12,000
                  </div>
                  <div className="pt-1">🔑 <strong>Check-ins Today:</strong> 12</div>
                  <div>🚪 <strong>Check-outs Today:</strong> 9</div>
                  <div>⚠️ <strong>Pending Issues:</strong> 3 (Assigned to Duty Team)</div>
                </div>
                <div className="pt-1 text-[9px] text-neutral-500 italic border-t border-emerald-300/40 mt-1 flex justify-between items-center">
                  <span>Generated automatically by PMS</span>
                  <span className="font-mono">11:59 PM ✓✓</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="bg-white p-3 border-t border-neutral-200 flex items-center justify-between text-xs">
              <span className="text-[11px] text-neutral-500">Simulated WhatsApp message</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center space-x-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
                <button
                  onClick={() => setShowWhatsAppPreview(false)}
                  className="px-3 py-1 rounded bg-[#075e54] text-white hover:bg-[#064e46] font-medium cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
