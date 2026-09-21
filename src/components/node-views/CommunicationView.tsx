import React from 'react';
import { MessageSquare, Mail, Bell, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface CommunicationViewProps {
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const CommunicationView: React.FC<CommunicationViewProps> = () => {
  const channels = [
    { name: 'WhatsApp', desc: '98% open rate, high-touch interactive messages', icon: MessageSquare },
    { name: 'SMS', desc: 'Critical gate entry codes & OTP notifications', icon: Smartphone },
    { name: 'Email', desc: 'Detailed tax invoices & photo brochures', icon: Mail },
    { name: 'Automated Push', desc: 'Real-time staff alerts and service updates', icon: Bell },
  ];

  const triggers = [
    { title: 'Booking Confirmation', channel: 'WhatsApp + Email', desc: 'Sent instantly upon payment received' },
    { title: 'Payment Confirmation', channel: 'SMS + WhatsApp', desc: 'Advance deposit receipt with GST breakdown' },
    { title: 'Pre-arrival Check-in', channel: 'WhatsApp', desc: 'Sent 24 hours prior with digital registration link' },
    { title: 'Order Update', channel: 'WhatsApp / Web Push', desc: '"Your lunch is being prepared by Chef"' },
    { title: 'Service Request', channel: 'Internal Staff Alert', desc: 'Housekeeping alert on assigned floor device' },
    { title: 'Digital Invoice', channel: 'WhatsApp + Email', desc: 'Zero-touch folio summary at checkout' },
    { title: 'Checkout & Review', channel: 'WhatsApp', desc: 'Google review prompt 2 hours post departure' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#f0f6f3] border border-[#d6e5dd] p-4 rounded-2xl">
        <div className="flex items-center space-x-2 text-[#1e4b3e] text-xs font-bold uppercase tracking-wider mb-1">
          <MessageSquare className="w-4 h-4" />
          <span>Automated Omnichannel Communication</span>
        </div>
        <p className="text-xs text-[#4b6b60]">
          Intelligent event triggers eliminate manual messaging. The system communicates proactively with guests at each stage of their resort journey.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-[#d6e5dd] shadow-xs space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="p-3 rounded-xl bg-[#f8faf9] border border-[#e2ece6] flex flex-col items-start">
                <div className="p-1.5 bg-[#eaf2ee] text-[#1e4b3e] rounded-lg mb-1.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-bold text-[#142823]">{c.name}</div>
                <div className="text-[10px] text-[#638075] mt-0.5">{c.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2">
          <div className="text-[11px] font-bold text-[#142823] uppercase tracking-wider">
            Automated Lifecycle Triggers
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {triggers.map((t, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#142823]">{t.title}</span>
                  <span className="text-[10px] bg-[#eaf2ee] text-[#1e4b3e] px-1.5 py-0.5 rounded font-medium">
                    {t.channel}
                  </span>
                </div>
                <div className="text-[11px] text-[#638075]">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
