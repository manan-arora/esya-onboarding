import React, { useState } from 'react';
import { SYSTEM_GRID_NODES } from '../data/gridData';
import type { GridNode, ViewTab } from '../types';
import { ArrowRight, Activity, Circle, Zap } from 'lucide-react';

interface EsyasoftGridProps {
  onNavigateNode: (targetTab: ViewTab, targetSection?: string) => void;
  selectedNodeId?: string;
  className?: string;
}

export const EsyasoftGrid: React.FC<EsyasoftGridProps> = ({
  onNavigateNode,
  selectedNodeId = 'you',
  className = ''
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>(selectedNodeId);

  const currentNode = SYSTEM_GRID_NODES.find((n) => n.id === activeNodeId) || SYSTEM_GRID_NODES[0];
  const hoveredNode = SYSTEM_GRID_NODES.find((n) => n.id === hoveredNodeId);

  // Helper to find connections
  const activeConnections = new Set<string>();
  const activeTargetNode = hoveredNode || currentNode;

  if (activeTargetNode) {
    activeConnections.add(activeTargetNode.id);
    activeTargetNode.connectedTo.forEach((id) => activeConnections.add(id));
  }

  const handleNodeClick = (node: GridNode) => {
    setActiveNodeId(node.id);
    onNavigateNode(node.targetTab, node.targetSection);
  };

  return (
    <div className={`relative w-full bg-[#050807] border border-[#162E21] rounded-xl overflow-hidden shadow-2xl ${className}`}>
      {/* Background Grid Pattern Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Grid Header Controls */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-[#07110D]/90 border-b border-[#162E21]">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#00FF66]" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            ESYASOFT ENERGY SYSTEM GRID
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
          <span>NETWORK ACTIVE</span>
        </div>
      </div>

      {/* SVG Connections Layer */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] sm:min-h-[480px]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {SYSTEM_GRID_NODES.map((node) => {
            return node.connectedTo.map((targetId) => {
              const targetNode = SYSTEM_GRID_NODES.find((n) => n.id === targetId);
              if (!targetNode) return null;

              // Avoid duplicate lines by ensuring x1 < x2 or id comparison
              if (node.id > targetId) return null;

              const isConnectedToHover =
                (hoveredNodeId === node.id || hoveredNodeId === targetId) ||
                (activeNodeId === node.id && (node.connectedTo.includes(targetId) || targetNode.connectedTo.includes(node.id)));

              return (
                <g key={`${node.id}-${targetId}`}>
                  <line
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isConnectedToHover ? '#00FF66' : '#1F382B'}
                    strokeWidth={isConnectedToHover ? 2 : 1}
                    strokeDasharray={isConnectedToHover ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                  {isConnectedToHover && (
                    <line
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="#00FF66"
                      strokeWidth={3}
                      strokeLinecap="round"
                      opacity={0.6}
                      className="animate-pulse"
                    />
                  )}
                </g>
              );
            });
          })}
        </svg>

        {/* Nodes Layer */}
        {SYSTEM_GRID_NODES.map((node) => {
          const isSelected = activeNodeId === node.id;
          const isHovered = hoveredNodeId === node.id;
          const isConnected = activeConnections.has(node.id);
          const isYou = node.id === 'you';

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => handleNodeClick(node)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            >
              <div className="relative flex flex-col items-center">
                {/* Outer Glow Pulse for Active/Selected */}
                {(isSelected || isHovered || isYou) && (
                  <div className="absolute inset-0 -m-3 rounded-full bg-[#00FF66]/20 animate-ping pointer-events-none" />
                )}

                {/* Node Icon Circle */}
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#00FF66] text-[#050807] border-[#00FF66] shadow-[0_0_20px_#00FF66]'
                      : isHovered
                      ? 'bg-emerald-900/80 text-[#00FF66] border-[#00FF66] scale-110 shadow-[0_0_15px_rgba(0,255,102,0.5)]'
                      : isConnected
                      ? 'bg-[#071610] text-[#00FF66] border-[#00FF66]/60'
                      : 'bg-[#050807] text-slate-500 border-[#1F382B] group-hover:border-slate-400'
                  }`}
                >
                  {isYou ? (
                    <Activity className="w-4 h-4 animate-spin-slow" />
                  ) : (
                    <Circle className={`w-3 h-3 ${isSelected ? 'fill-[#050807]' : 'fill-current'}`} />
                  )}
                </div>

                {/* Node Label */}
                <div
                  className={`mt-1.5 px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-bold whitespace-nowrap tracking-wide border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#00FF66] text-[#050807] border-[#00FF66]'
                      : isHovered
                      ? 'bg-[#071610] text-[#00FF66] border-[#00FF66]'
                      : isConnected
                      ? 'bg-[#07110D]/90 text-emerald-300 border-[#162E21]'
                      : 'bg-[#050807]/80 text-slate-400 border-transparent group-hover:text-slate-200'
                  }`}
                >
                  {node.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Footer Bar */}
      <div className="relative z-10 px-4 py-3 bg-[#07110D] border-t border-[#162E21] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">SELECTED NODE:</span>
            <span className="text-xs font-bold text-[#00FF66]">{currentNode.label}</span>
          </div>
          <p className="text-xs text-slate-300 font-sans mt-0.5 max-w-2xl">{currentNode.description}</p>
        </div>
        <button
          onClick={() => handleNodeClick(currentNode)}
          className="flex items-center gap-2 px-4 py-2 rounded bg-[#00FF66] hover:bg-[#00E676] text-[#050807] font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] whitespace-nowrap"
        >
          <span>NAVIGATE TO SECTION</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
