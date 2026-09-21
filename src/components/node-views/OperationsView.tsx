import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Wrench, 
  Shirt, 
  ChefHat, 
  ConciergeBell, 
  Package, 
  Users, 
  Bell, 
  Check, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { WorkflowNodeId } from '../../types';

interface OperationsViewProps {
  initialRole?: WorkflowNodeId;
  onNavigateTo?: (id: WorkflowNodeId) => void;
}

export const OperationsView: React.FC<OperationsViewProps> = ({
  initialRole = 'waiter-op',
  onNavigateTo,
}) => {
  // Normalize role
  const getSafeRole = (role: WorkflowNodeId) => {
    if ([
      'reception-op',
      'housekeeping-op',
      'maintenance-op',
      'laundry-op',
      'kitchen-op',
      'waiter-op',
      'inventory-op',
      'staff-op',
    ].includes(role)) {
      return role;
    }
    return 'waiter-op';
  };

  const [activeRole, setActiveRole] = useState<WorkflowNodeId>(getSafeRole(initialRole));

  // Interactive local states for prototype feel
  const [waiterTasks, setWaiterTasks] = useState([
    { id: 1, title: '🔔 New Order', room: 'Room 101', status: 'Pending', time: '2m ago' },
    { id: 2, title: '🔔 Order Ready', room: 'Table 12 (Pool Deck)', status: 'Ready for Pickup', time: 'Just now' },
    { id: 3, title: '🔔 Room Service', room: 'Room 205 (High Tea)', status: 'Pending', time: '5m ago' },
  ]);

  const [kdsStage, setKdsStage] = useState<'New KOT' | 'Preparing' | 'Ready'>('Preparing');
  const [hkStage, setHkStage] = useState<'Cleaning Required' | 'Cleaning' | 'Inspection' | 'Ready'>('Cleaning');
  const [maintStage, setMaintStage] = useState<'New' | 'Assigned' | 'In Progress' | 'Resolved'>('In Progress');
  const [laundryStage, setLaundryStage] = useState<'Pickup Request' | 'Items Received' | 'Processing' | 'Ready' | 'Delivered'>('Processing');

  const updateWaiterTask = (id: number, newStatus: string) => {
    setWaiterTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const roles = [
    { id: 'reception-op', name: 'Reception', icon: UserCheck },
    { id: 'housekeeping-op', name: 'Housekeeping', icon: Sparkles },
    { id: 'maintenance-op', name: 'Maintenance', icon: Wrench },
    { id: 'laundry-op', name: 'Laundry', icon: Shirt },
    { id: 'kitchen-op', name: 'Kitchen / KDS', icon: ChefHat },
    { id: 'waiter-op', name: 'Waiter', icon: ConciergeBell },
    { id: 'inventory-op', name: 'Inventory', icon: Package },
    { id: 'staff-op', name: 'Staff Management', icon: Users },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Role Navigation Bar */}
      <div>
        <div className="text-[11px] font-semibold text-[#4b6b60] uppercase tracking-wider mb-2">
          Select Department Interface
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id as WorkflowNodeId)}
                className={`p-2.5 rounded-xl border text-left flex items-center space-x-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#1e4b3e] bg-[#1e4b3e] text-white shadow-xs font-semibold'
                    : 'border-[#d6e5dd] bg-white text-[#142823] hover:border-[#1e4b3e]/40 hover:bg-[#f8faf9]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-200' : 'text-[#1e4b3e]'}`} />
                <span className="text-xs truncate">{r.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Role Content Display */}
      {/* 1. WAITER */}
      {activeRole === 'waiter-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <ConciergeBell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">WAITER MOBILE INTERFACE</h3>
                <div className="text-[11px] text-[#5b7a6f]">Real-time live order dispatch & service notifications</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#1e4b3e] text-[11px] font-medium border border-emerald-200">
              Active Shift: 3 Alerts
            </span>
          </div>

          <div className="space-y-3">
            {waiterTasks.map((task) => (
              <div
                key={task.id}
                className="p-3.5 bg-white rounded-xl border border-[#d6e5dd] shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xs text-[#142823]">{task.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#eaf2ee] text-[#1e4b3e] font-medium">
                      {task.room}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#638075]">{task.time}</span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#f0f4f2]">
                  <div className="text-xs text-[#4b6b60]">
                    Status: <strong className="text-[#142823]">{task.status}</strong>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => updateWaiterTask(task.id, 'Viewing')}
                      className="px-2.5 py-1 text-[11px] rounded-lg border border-[#d6e5dd] text-[#142823] hover:bg-[#f8faf9] cursor-pointer"
                    >
                      View
                    </button>
                    <button
                      onClick={() => updateWaiterTask(task.id, 'Accepted')}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-[#eaf2ee] text-[#1e4b3e] font-medium hover:bg-[#d8e8df] cursor-pointer"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateWaiterTask(task.id, 'Delivered ✓')}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-[#1e4b3e] text-white font-medium hover:bg-[#15382e] cursor-pointer"
                    >
                      Deliver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. KITCHEN / KDS */}
      {activeRole === 'kitchen-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <ChefHat className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">KITCHEN / KDS (Kitchen Display System)</h3>
                <div className="text-[11px] text-[#5b7a6f]">Connected POS & live chef prep queues</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[#1e4b3e] bg-white px-2.5 py-1 rounded-lg border border-[#d6e5dd]">
              Avg Prep: 14 min
            </span>
          </div>

          {/* Interactive KDS Stages */}
          <div className="bg-white rounded-xl p-4 border border-[#d6e5dd] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#142823]">KOT Progression Pipeline</span>
              <span className="text-[11px] text-[#5b7a6f]">Click stage to simulate order lifecycle:</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['New KOT', 'Preparing', 'Ready'] as const).map((stage) => {
                const isCurrent = kdsStage === stage;
                return (
                  <button
                    key={stage}
                    onClick={() => setKdsStage(stage)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#1e4b3e] text-white border-[#1e4b3e] font-semibold shadow-xs'
                        : 'bg-[#f8faf9] text-[#4b6b60] border-[#d6e5dd] hover:bg-[#eaf2ee]'
                    }`}
                  >
                    <div className="text-xs">{stage}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sample KOT Ticket */}
          <div className="p-4 bg-white rounded-xl border-2 border-[#1e4b3e]/30 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-dashed border-[#d6e5dd] pb-2">
              <div>
                <div className="font-mono font-bold text-sm text-[#142823]">KOT #184</div>
                <div className="text-[11px] text-[#5b7a6f]">Room 101 (Pool Villa) • Server: Amit S.</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-emerald-100 text-[#1e4b3e]">
                  {kdsStage}
                </span>
                <div className="text-[10px] text-[#638075] mt-0.5">Elapsed: 08:32</div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-medium text-[#142823]">
                <span>1x Paneer Tikka (Less spicy)</span>
                <span className="text-[#638075]">Prep: Starters</span>
              </div>
              <div className="flex justify-between font-medium text-[#142823]">
                <span>1x Dal Makhani (Traditional)</span>
                <span className="text-[#638075]">Prep: Main Curry</span>
              </div>
              <div className="flex justify-between font-medium text-[#142823]">
                <span>2x Butter Garlic Naan</span>
                <span className="text-[#638075]">Prep: Tandoor</span>
              </div>
            </div>

            <div className="pt-2 border-t border-dashed border-[#d6e5dd] flex justify-between items-center text-[11px] text-[#5b7a6f]">
              <span>Total 3 Items</span>
              <span>Automatically updates POS & Folio</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. HOUSEKEEPING */}
      {activeRole === 'housekeeping-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">HOUSEKEEPING DISPATCH</h3>
                <div className="text-[11px] text-[#5b7a6f]">Room turnover, linen inventory & inspection checklist</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-white border border-[#d6e5dd] rounded-lg font-medium text-[#142823]">
              Villa 101
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#d6e5dd] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-xs text-[#142823]">Room 101 — Checkout Completed</div>
                <div className="text-[11px] text-[#5b7a6f]">Turnover required before next arrival (02:00 PM)</div>
              </div>
              <span className="text-[11px] font-bold text-[#1e4b3e] bg-[#eaf2ee] px-2 py-0.5 rounded">
                Current: {hkStage}
              </span>
            </div>

            {/* Stepper buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {(['Cleaning Required', 'Cleaning', 'Inspection', 'Ready'] as const).map((stage, idx) => {
                const isActive = hkStage === stage;
                return (
                  <button
                    key={stage}
                    onClick={() => setHkStage(stage)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1e4b3e] text-white border-[#1e4b3e] font-semibold'
                        : 'bg-[#f8faf9] text-[#4b6b60] border-[#d6e5dd] hover:bg-[#eaf2ee]'
                    }`}
                  >
                    <div className="text-[10px] text-emerald-200">Step 0{idx + 1}</div>
                    <div className="text-xs truncate">{stage}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. MAINTENANCE */}
      {activeRole === 'maintenance-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">ENGINEERING & MAINTENANCE</h3>
                <div className="text-[11px] text-[#5b7a6f]">Facility work orders, HVAC, electrical & preventive logs</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg font-medium">
              Priority: High
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#d6e5dd] space-y-3">
            <div>
              <div className="font-bold text-xs text-[#142823]">Room 101 — AC Not Cooling</div>
              <div className="text-[11px] text-[#5b7a6f]">Reported by guest via portal at 11:20 AM</div>
            </div>

            {/* Stage Progress */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {(['New', 'Assigned', 'In Progress', 'Resolved'] as const).map((stage) => {
                const isActive = maintStage === stage;
                return (
                  <button
                    key={stage}
                    onClick={() => setMaintStage(stage)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1e4b3e] text-white border-[#1e4b3e] font-semibold'
                        : 'bg-[#f8faf9] text-[#4b6b60] border-[#d6e5dd] hover:bg-[#eaf2ee]'
                    }`}
                  >
                    <div className="text-xs">{stage}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 5. LAUNDRY */}
      {activeRole === 'laundry-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <Shirt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">LAUNDRY & LINEN SERVICES</h3>
                <div className="text-[11px] text-[#5b7a6f]">Guest garments, housekeeping linens, barcoded tracking</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-white border border-[#d6e5dd] rounded-lg font-medium text-[#142823]">
              Room 101
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#d6e5dd] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#142823]">Guest Laundry Order #L-429</span>
              <span className="text-[11px] font-semibold text-[#1e4b3e] bg-[#eaf2ee] px-2 py-0.5 rounded">
                Stage: {laundryStage}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-xs">
              {(['Pickup Request', 'Items Received', 'Processing', 'Ready', 'Delivered'] as const).map((stage) => {
                const isActive = laundryStage === stage;
                return (
                  <button
                    key={stage}
                    onClick={() => setLaundryStage(stage)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1e4b3e] text-white border-[#1e4b3e] font-semibold'
                        : 'bg-[#f8faf9] text-[#4b6b60] border-[#d6e5dd] hover:bg-[#eaf2ee]'
                    }`}
                  >
                    <div className="text-[10px] truncate">{stage}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 6. RECEPTION */}
      {activeRole === 'reception-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">RECEPTION & FRONT DESK</h3>
                <div className="text-[11px] text-[#5b7a6f]">Arrivals, departures, keycards & in-house guest care</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-[#1e4b3e] text-white rounded-lg font-medium">
              12 Check-ins Today
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              { title: 'New Booking', desc: 'Instant reservation creation' },
              { title: 'Check-in', desc: 'Scan passport / digital registration' },
              { title: 'Guest Verification', desc: 'KYC & payment verification' },
              { title: 'Room Assignment', desc: 'Allocate clean & inspected villas' },
              { title: 'Guest Folio', desc: 'Real-time billing & charge review' },
              { title: 'Check-out', desc: 'Settlement, feedback & key return' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
                <div className="font-bold text-[#142823]">{item.title}</div>
                <div className="text-[10px] text-[#638075] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. INVENTORY */}
      {activeRole === 'inventory-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">CENTRAL STORES & INVENTORY</h3>
                <div className="text-[11px] text-[#5b7a6f]">F&B supplies, amenities, housekeeping linens, GRN logs</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg font-medium">
              3 Low Stock Alerts
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              { title: 'Stock Levels', desc: 'Real-time counts across kitchen & stores' },
              { title: 'Purchase Orders', desc: 'Approved PO creation for local vendors' },
              { title: 'Suppliers', desc: 'Vendor ledger, rate contracts & contacts' },
              { title: 'GRN (Goods Receipt)', desc: 'Store gate-entry inspection logs' },
              { title: 'Stock Transfer', desc: 'Main store to Pavilion kitchen / Spa' },
              { title: 'Low Stock Alerts', desc: 'Automated re-order threshold triggers' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
                <div className="font-bold text-[#142823]">{item.title}</div>
                <div className="text-[10px] text-[#638075] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. STAFF MANAGEMENT */}
      {activeRole === 'staff-op' && (
        <div className="bg-[#f7faf8] rounded-2xl p-5 border border-[#d6e5dd] space-y-4">
          <div className="flex items-center justify-between border-b border-[#d6e5dd] pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1e4b3e] text-white rounded-lg">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#142823] text-base">STAFF & HUMAN RESOURCES</h3>
                <div className="text-[11px] text-[#5b7a6f]">Shift scheduling, biometric attendance, access permissions</div>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg font-medium">
              48 On Duty
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              { title: 'Biometric Attendance', desc: 'Shift clock-in/out tracking' },
              { title: 'Leave Management', desc: 'Staff leave approvals & balances' },
              { title: 'Roster & Shifts', desc: 'Morning, evening & night allocations' },
              { title: 'Roles & Permissions', desc: 'Granular access for POS, PMS, KDS' },
              { title: 'Staff Reports', desc: 'Overtime, efficiency & task ratings' },
              { title: 'Internal Training', desc: 'Hospitality standard checklists' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#d6e5dd]">
                <div className="font-bold text-[#142823]">{item.title}</div>
                <div className="text-[10px] text-[#638075] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
