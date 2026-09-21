import React, { useEffect } from 'react';
import { X, ChevronRight, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { WorkflowNodeId } from '../types';
import { BookingView } from './node-views/BookingView';
import { CentralReservationView } from './node-views/CentralReservationView';
import { GuestAccountView } from './node-views/GuestAccountView';
import { GuestPortalView } from './node-views/GuestPortalView';
import { OperationsView } from './node-views/OperationsView';
import { RoomLifecycleView } from './node-views/RoomLifecycleView';
import { FoodFlowView } from './node-views/FoodFlowView';
import { FolioBillingView } from './node-views/FolioBillingView';
import { OwnerManagerView } from './node-views/OwnerManagerView';
import { DailyReportView } from './node-views/DailyReportView';
import { MultiPropertyView } from './node-views/MultiPropertyView';
import { CommunicationView } from './node-views/CommunicationView';
import { TallyAccountingView } from './node-views/TallyAccountingView';

interface DetailPanelProps {
  activeNode: WorkflowNodeId | null;
  onClose: () => void;
  onSelectNode: (id: WorkflowNodeId) => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  activeNode,
  onClose,
  onSelectNode,
}) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (activeNode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeNode, onClose]);

  if (!activeNode) return null;

  // Title and subtitle helper
  const getNodeDetails = (nodeId: WorkflowNodeId) => {
    switch (nodeId) {
      case 'nirvana-resort':
        return {
          title: 'Nirvana Resort Core Platform',
          category: 'Platform Architecture',
          breadcrumb: ['Nirvana Resort'],
          prev: null as WorkflowNodeId | null,
          next: 'booking' as WorkflowNodeId | null,
        };
      case 'booking':
      case 'website':
      case 'ota':
      case 'call':
      case 'social':
      case 'other-source':
      case 'reception-source':
        return {
          title: 'Booking & Ingestion Channels',
          category: 'Reservation Ingestion',
          breadcrumb: ['Nirvana Resort', 'Booking Sources'],
          prev: 'nirvana-resort' as WorkflowNodeId | null,
          next: 'central-reservation' as WorkflowNodeId | null,
        };
      case 'central-reservation':
        return {
          title: 'Central Reservation System (CRS)',
          category: 'Core Data Layer',
          breadcrumb: ['Nirvana Resort', 'Central Reservation'],
          prev: 'booking' as WorkflowNodeId | null,
          next: 'guest-account' as WorkflowNodeId | null,
        };
      case 'guest-account':
        return {
          title: 'Centralized Guest Account Profile',
          category: 'Guest Identity',
          breadcrumb: ['Central Reservation', 'Guest Account'],
          prev: 'central-reservation' as WorkflowNodeId | null,
          next: 'guest-portal' as WorkflowNodeId | null,
        };
      case 'guest-portal':
      case 'food-subflow':
      case 'service-requests':
      case 'help-support':
      case 'my-stay':
        return {
          title: 'Guest Portal / Resort Experience',
          category: 'Digital Touchpoint',
          breadcrumb: ['Guest Account', 'Guest Portal'],
          prev: 'guest-account' as WorkflowNodeId | null,
          next: 'operations' as WorkflowNodeId | null,
        };
      case 'operations':
      case 'reception-op':
      case 'housekeeping-op':
      case 'maintenance-op':
      case 'laundry-op':
      case 'kitchen-op':
      case 'waiter-op':
      case 'inventory-op':
      case 'staff-op':
      case 'realtime-coordination':
        return {
          title: 'Resort Operations & Staff Interfaces',
          category: 'Department Operations',
          breadcrumb: ['Guest Portal', 'Operations'],
          prev: 'guest-portal' as WorkflowNodeId | null,
          next: 'folio-billing' as WorkflowNodeId | null,
        };
      case 'room-lifecycle':
        return {
          title: '10-Stage Room Lifecycle',
          category: 'Inventory Operations',
          breadcrumb: ['Operations', 'Room Status'],
          prev: 'operations' as WorkflowNodeId | null,
          next: 'folio-billing' as WorkflowNodeId | null,
        };
      case 'food-restaurant-flow':
        return {
          title: 'Restaurant & POS Workflow',
          category: 'F&B Architecture',
          breadcrumb: ['Guest Portal', 'POS', 'KDS'],
          prev: 'guest-portal' as WorkflowNodeId | null,
          next: 'operations' as WorkflowNodeId | null,
        };
      case 'folio-billing':
        return {
          title: 'Folio & Billing System',
          category: 'Financial Ledger',
          breadcrumb: ['Operations', 'Folio + Billing'],
          prev: 'operations' as WorkflowNodeId | null,
          next: 'checkout' as WorkflowNodeId | null,
        };
      case 'checkout':
        return {
          title: 'Guest Departure & Settlement',
          category: 'Front Desk Protocol',
          breadcrumb: ['Folio + Billing', 'Checkout'],
          prev: 'folio-billing' as WorkflowNodeId | null,
          next: 'owner-manager' as WorkflowNodeId | null,
        };
      case 'owner-manager':
        return {
          title: 'Owner & General Manager View',
          category: 'Executive Command',
          breadcrumb: ['Operations', 'Owner / Manager'],
          prev: 'checkout' as WorkflowNodeId | null,
          next: 'daily-report' as WorkflowNodeId | null,
        };
      case 'daily-report':
      case 'whatsapp-cloud':
        return {
          title: 'Daily Report & Cloud Archival',
          category: 'Reporting & Archival',
          breadcrumb: ['Owner / Manager', 'Daily Report'],
          prev: 'owner-manager' as WorkflowNodeId | null,
          next: null as WorkflowNodeId | null,
        };
      case 'multi-property':
        return {
          title: 'Multi-Property Network',
          category: 'Enterprise Scaling',
          breadcrumb: ['Nirvana Group', 'Multi-Property'],
          prev: 'nirvana-resort' as WorkflowNodeId | null,
          next: null as WorkflowNodeId | null,
        };
      case 'communication':
        return {
          title: 'Omnichannel Guest Messaging',
          category: 'Communication Automation',
          breadcrumb: ['Guest Touchpoints', 'Communication'],
          prev: 'guest-portal' as WorkflowNodeId | null,
          next: null as WorkflowNodeId | null,
        };
      case 'tally-accounting':
        return {
          title: 'Tally Prime / Accounting Sync',
          category: 'ERP Integration',
          breadcrumb: ['Folio + Billing', 'Tally Export'],
          prev: 'folio-billing' as WorkflowNodeId | null,
          next: null as WorkflowNodeId | null,
        };
      default:
        return {
          title: 'Workflow Component',
          category: 'Nirvana System',
          breadcrumb: ['Nirvana Resort', activeNode],
          prev: null,
          next: null,
        };
    }
  };

  const meta = getNodeDetails(activeNode);

  return (
    <>
      {/* Dimmed backdrop on smaller screens */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 lg:hidden backdrop-blur-2xs transition-opacity"
      />

      {/* Slide-out Drawer */}
      <aside
        id="workflow-detail-drawer"
        className="fixed top-0 right-0 z-50 h-[100dvh] max-h-[100dvh] w-full sm:w-[540px] md:w-[600px] lg:w-[640px] bg-white shadow-2xl border-l border-[#d6e5dd] flex flex-col transition-transform duration-300 ease-out animate-slideLeft overscroll-contain"
      >
        {/* Mobile Pull Indicator Bar */}
        <div className="sm:hidden w-full flex items-center justify-center pt-2 pb-1 bg-[#f8faf9] shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-[#cbdad2]"></div>
        </div>

        {/* Drawer Header */}
        <div className="p-3.5 sm:p-5 border-b border-[#e2ece6] bg-[#f8faf9] flex items-center justify-between shrink-0 gap-3">
          <div className="space-y-0.5 sm:space-y-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center flex-wrap gap-1 text-[10px] sm:text-[11px] font-medium text-[#4b6b60] uppercase tracking-wider">
              {meta.breadcrumb.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3 h-3 text-[#87a497] shrink-0" />}
                  <span className="truncate">{crumb}</span>
                </React.Fragment>
              ))}
            </div>

            <h2 className="text-sm sm:text-lg font-serif font-bold text-[#142823] tracking-wide truncate">
              {meta.title}
            </h2>
          </div>

          <div className="flex items-center shrink-0">
            <button
              onClick={onClose}
              className="p-2 sm:p-1.5 rounded-xl border border-[#d6e5dd] bg-white hover:bg-[#eaf2ee] active:scale-95 text-[#142823] transition-all cursor-pointer flex items-center space-x-1.5 text-xs px-3 min-h-[40px] shadow-2xs"
              title="Close panel (Esc)"
            >
              <span className="text-[11px] font-medium text-[#4b6b60]">Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Render corresponding view */}
          {activeNode === 'nirvana-resort' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#f0f6f3] border border-[#d6e5dd] rounded-2xl">
                <h3 className="font-serif font-bold text-base text-[#122822] mb-1">
                  Nirvana Resort Central Platform
                </h3>
                <p className="text-[#4b6b60] leading-relaxed">
                  The unified hospitality operating system purpose-built for luxury resorts. It binds booking channels, real-time inventory, in-room guest services, kitchen display systems, and executive intelligence into a single connected platform.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#d6e5dd] space-y-2">
                <div className="font-bold text-[#142823]">How this interactive prototype works:</div>
                <ul className="list-disc pl-5 space-y-1.5 text-[#5b7a6f]">
                  <li>Click any node on the central map to reveal its operational workflows.</li>
                  <li>Notice how all booking channels converge directly into Central Reservation.</li>
                  <li>Explore the guest mobile portal and follow an order from room to kitchen to folio.</li>
                  <li>Inspect role-based staff views for Waiter, Chef, Housekeeping and Maintenance.</li>
                </ul>
              </div>
            </div>
          )}

          {(['booking', 'website', 'ota', 'call', 'social', 'reception-source', 'other-source'].includes(activeNode)) && (
            <BookingView
              activeSubSource={activeNode}
              onSelectSubSource={(id) => onSelectNode(id)}
              onNavigateTo={(id) => onSelectNode(id)}
            />
          )}

          {activeNode === 'central-reservation' && (
            <CentralReservationView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'guest-account' && (
            <GuestAccountView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {(['guest-portal', 'food-subflow', 'service-requests', 'help-support', 'my-stay'].includes(activeNode)) && (
            <GuestPortalView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {(['operations', 'reception-op', 'housekeeping-op', 'maintenance-op', 'laundry-op', 'kitchen-op', 'waiter-op', 'inventory-op', 'staff-op'].includes(activeNode)) && (
            <OperationsView
              initialRole={activeNode}
              onNavigateTo={(id) => onSelectNode(id)}
            />
          )}

          {activeNode === 'realtime-coordination' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#f0f6f3] border border-[#d6e5dd] rounded-2xl">
                <h4 className="font-serif font-bold text-sm text-[#142823]">
                  Real-Time Department Coordination
                </h4>
                <p className="text-xs text-[#4b6b60] mt-1 leading-relaxed">
                  Every staff member operates from the same live state. When housekeeping marks a room ready, reception sees it immediately. When a guest orders a meal, kitchen prep begins and the bill auto-posts to the room folio.
                </p>
              </div>
              <OperationsView initialRole="waiter-op" onNavigateTo={onSelectNode} />
            </div>
          )}

          {activeNode === 'room-lifecycle' && (
            <RoomLifecycleView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'food-restaurant-flow' && (
            <FoodFlowView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'folio-billing' && (
            <FolioBillingView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'checkout' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#f0f6f3] border border-[#d6e5dd] rounded-2xl">
                <h4 className="font-serif font-bold text-sm text-[#142823]">
                  Guest Checkout Protocol
                </h4>
                <p className="text-xs text-[#4b6b60] mt-1">
                  Settlement verified • Keycards returned • Villa auto-flagged as DIRTY for turnover • Tax invoice emailed • Thank you message sent via WhatsApp.
                </p>
              </div>
              <FolioBillingView onNavigateTo={(id) => onSelectNode(id)} />
            </div>
          )}

          {activeNode === 'owner-manager' && (
            <OwnerManagerView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {(activeNode === 'daily-report' || activeNode === 'whatsapp-cloud') && (
            <DailyReportView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'multi-property' && (
            <MultiPropertyView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'communication' && (
            <CommunicationView onNavigateTo={(id) => onSelectNode(id)} />
          )}

          {activeNode === 'tally-accounting' && (
            <TallyAccountingView onNavigateTo={(id) => onSelectNode(id)} />
          )}
        </div>

        {/* Drawer Footer with Flow Steppers */}
        <div className="p-3 sm:p-4 pb-[max(0.875rem,env(safe-area-inset-bottom))] border-t border-[#e2ece6] bg-[#f8faf9] flex items-center justify-between shrink-0 text-xs gap-2">
          {meta.prev ? (
            <button
              onClick={() => onSelectNode(meta.prev!)}
              className="px-3.5 py-2.5 min-h-[42px] rounded-xl border border-[#d6e5dd] bg-white hover:bg-[#f8faf9] active:scale-95 text-[#4b6b60] font-medium flex items-center space-x-1.5 transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
          ) : (
            <div />
          )}

          {meta.next ? (
            <button
              onClick={() => onSelectNode(meta.next!)}
              className="px-4 py-2.5 min-h-[42px] rounded-xl bg-[#1e4b3e] text-white hover:bg-[#15382e] active:scale-95 font-medium flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs ml-auto"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2.5 min-h-[42px] rounded-xl border border-[#d6e5dd] bg-white hover:bg-[#f8faf9] active:scale-95 text-[#4b6b60] font-medium transition-all cursor-pointer ml-auto"
            >
              Return to Map
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
