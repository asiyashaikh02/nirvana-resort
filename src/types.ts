export type WorkflowNodeId =
  | 'nirvana-resort'
  | 'booking'
  | 'website'
  | 'ota'
  | 'call'
  | 'social'
  | 'other-source'
  | 'reception-source'
  | 'central-reservation'
  | 'guest-account'
  | 'food-subflow'
  | 'service-requests'
  | 'help-support'
  | 'my-stay'
  | 'guest-portal'
  | 'operations'
  | 'reception-op'
  | 'housekeeping-op'
  | 'maintenance-op'
  | 'laundry-op'
  | 'kitchen-op'
  | 'waiter-op'
  | 'inventory-op'
  | 'staff-op'
  | 'realtime-coordination'
  | 'folio-billing'
  | 'checkout'
  | 'owner-manager'
  | 'daily-report'
  | 'whatsapp-cloud'
  | 'room-lifecycle'
  | 'food-restaurant-flow'
  | 'multi-property'
  | 'communication'
  | 'tally-accounting';

export interface WorkflowBreadcrumb {
  id: WorkflowNodeId;
  label: string;
}

export interface NodeMeta {
  id: WorkflowNodeId;
  title: string;
  subtitle?: string;
  category: 'core' | 'source' | 'portal' | 'operations' | 'billing' | 'executive' | 'auxiliary';
  parent?: WorkflowNodeId;
}
