import React, { useState } from 'react';
import { WorkflowNodeId } from './types';
import { Header } from './components/Header';
import { WorkflowMap } from './components/WorkflowMap';
import { DetailPanel } from './components/DetailPanel';
import { Footer } from './components/Footer';
import { Play, Sparkles } from 'lucide-react';

export default function App() {
  const [activeNode, setActiveNode] = useState<WorkflowNodeId | null>(null);

  // Guided walkthrough steps
  const tourSteps: WorkflowNodeId[] = [
    'booking',
    'website',
    'ota',
    'central-reservation',
    'guest-account',
    'guest-portal',
    'operations',
    'waiter-op',
    'kitchen-op',
    'room-lifecycle',
    'folio-billing',
    'owner-manager',
    'daily-report',
  ];

  const handleStartTour = () => {
    setActiveNode('booking');
  };

  const handleNextTourStep = () => {
    if (!activeNode) {
      setActiveNode('booking');
      return;
    }
    const idx = tourSteps.indexOf(activeNode);
    if (idx !== -1 && idx < tourSteps.length - 1) {
      setActiveNode(tourSteps[idx + 1]);
    } else {
      setActiveNode(tourSteps[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#142823] selection:bg-[#1e4b3e]/20">
      {/* Top sticky navigation header */}
      <Header
        activeNode={activeNode}
        onReset={() => setActiveNode(null)}
        onSelectNode={(id) => setActiveNode(id)}
      />

      {/* Main interactive workflow canvas */}
      <main className="flex-1 flex flex-col items-center justify-start">
        {/* Floating Quick Action Tour Pill */}
        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={handleNextTourStep}
            className="px-4 py-1.5 rounded-full bg-white border border-[#bed8cb] hover:border-[#1e4b3e] shadow-2xs hover:shadow-xs text-xs font-semibold text-[#1e4b3e] flex items-center space-x-1.5 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1e4b3e]" />
            <span>{activeNode ? 'Advance to Next Workflow Node →' : 'Start End-to-End Walkthrough'}</span>
          </button>
        </div>

        {/* Core Architecture Map */}
        <div className="w-full">
          <WorkflowMap
            activeNode={activeNode}
            onSelectNode={(id) => setActiveNode(id)}
          />
        </div>
      </main>

      {/* Slide-out Interactive Detail Panel / Drawer */}
      <DetailPanel
        activeNode={activeNode}
        onClose={() => setActiveNode(null)}
        onSelectNode={(id) => setActiveNode(id)}
      />

      {/* Architectural Branding Footer */}
      <Footer />
    </div>
  );
}
