import React, { useState } from 'react';
import { SYSTEM_GRID_NODES } from '../data/gridData';
import type { GridNode, ViewTab } from '../types';
import { Activity, Zap, Circle } from 'lucide-react';

interface EsyasoftGridProps {
  onNavigateNode: (targetTab: ViewTab, targetSection?: string) => void;
  selectedNodeId?: string;
  className?: string;
  darkTheme?: boolean;
  integrated?: boolean; // If true, hides outer chrome/header for hero integration
}

export const EsyasoftGrid: React.FC<EsyasoftGridProps> = ({
  onNavigateNode,
  selectedNodeId = 'you',
  className = '',
  darkTheme = true,
  integrated = false
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>(selectedNodeId);

  const currentNode = SYSTEM_GRID_NODES.find((n) => n.id === activeNodeId) || SYSTEM_GRID_NODES[0];
  const hoveredNode = SYSTEM_GRID_NODES.find((n) => n.id === hoveredNodeId);

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
    <div
      className={`relative w-full rounded-3xl overflow-hidden transition-all duration-500 max-w-full ${
        darkTheme
          ? 'bg-[#061210] text-white border border-[#14332B]'
          : 'bg-[#F4F5F0] text-[#061210] border border-[#E2E4DC]'
      } ${className}`}
    >
      {/* Background Energy Grid Visual Pattern */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          darkTheme ? 'bg-grid-pattern-dark opacity-40' : 'bg-grid-pattern opacity-60'
        }`}
      />

      {/* Optional Integrated Header (Only shown when NOT integrated inside Hero) */}
      {!integrated && (
        <div className={`relative z-10 flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b max-w-full overflow-hidden ${
          darkTheme ? 'bg-[#0B1C18]/90 border-[#14332B]' : 'bg-white border-[#E2E4DC]'
        }`}>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8CFF00] min-w-0">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
            <span className="truncate">ESYASOFT CONNECTED ECOSYSTEM GRID</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 ml-2">
            <span className="w-2 h-2 rounded-full bg-[#8CFF00] animate-ping" />
            <span className="hidden xs:inline">LIVE NETWORK NODES</span>
          </div>
        </div>
      )}

      {/* Interactive SVG Network Diagram */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[320px] sm:min-h-[460px] flex items-center justify-center p-2 sm:p-4 overflow-hidden max-w-full">
        
        {/* Glow backdrop behind network */}
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#8CFF00]/10 blur-[80px] sm:blur-[100px] pointer-events-none" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8CFF00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {SYSTEM_GRID_NODES.map((node) => {
            return node.connectedTo.map((targetId) => {
              const targetNode = SYSTEM_GRID_NODES.find((n) => n.id === targetId);
              if (!targetNode) return null;
              if (node.id > targetId) return null;

              const isConnectedToHover =
                hoveredNodeId === node.id ||
                hoveredNodeId === targetId ||
                (activeNodeId === node.id && (node.connectedTo.includes(targetId) || targetNode.connectedTo.includes(node.id)));

              return (
                <g key={`${node.id}-${targetId}`}>
                  {/* Base Connection Line */}
                  <line
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isConnectedToHover ? '#8CFF00' : darkTheme ? '#183D34' : '#CCD0C0'}
                    strokeWidth={isConnectedToHover ? 2.5 : 1.2}
                    strokeDasharray={isConnectedToHover ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                  {/* Energy Pulse Glow */}
                  {isConnectedToHover && (
                    <line
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="url(#energyGrad)"
                      strokeWidth={4}
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  )}
                </g>
              );
            });
          })}
        </svg>

        {/* Interactive System Nodes */}
        {SYSTEM_GRID_NODES.map((node) => {
          const isSelected = activeNodeId === node.id;
          const isHovered = hoveredNodeId === node.id;
          const isConnected = activeConnections.has(node.id);
          const isYou = node.id === 'you';

          // Clamp translation alignment for nodes near right or left boundary
          const alignClass = node.x > 75 ? '-translate-x-[75%]' : node.x < 25 ? '-translate-x-[25%]' : '-translate-x-1/2';

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => handleNodeClick(node)}
              className={`absolute -translate-y-1/2 z-20 cursor-pointer group ${alignClass}`}
            >
              <div className="relative flex flex-col items-center">
                
                {/* Active Energy Pulse Ring */}
                {(isSelected || isHovered || isYou) && (
                  <div className="absolute inset-0 -m-2 sm:-m-3.5 rounded-full bg-[#8CFF00]/25 animate-ping pointer-events-none" />
                )}

                {/* Node Icon Circle */}
                <div
                  className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] scale-110 sm:scale-115 shadow-[0_0_20px_rgba(140,255,0,0.5)]'
                      : isHovered
                      ? 'bg-[#0E2922] text-[#8CFF00] border-[#8CFF00] scale-105 sm:scale-110'
                      : isConnected
                      ? darkTheme
                        ? 'bg-[#0B1C18] text-[#8CFF00] border-[#8CFF00]/60'
                        : 'bg-white text-[#061210] border-[#8CFF00]/70'
                      : darkTheme
                      ? 'bg-[#0B1C18] text-slate-400 border-[#183D34] group-hover:border-[#8CFF00]/50'
                      : 'bg-white text-slate-500 border-[#E2E4DC] group-hover:border-[#8CFF00]'
                  }`}
                >
                  {isYou ? (
                    <Activity className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.5]" />
                  ) : (
                    <Circle className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${isSelected ? 'fill-[#061210]' : 'fill-current'}`} />
                  )}
                </div>

                {/* Node Label Pill */}
                <div
                  className={`mt-1 sm:mt-2 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-sans text-[8px] sm:text-xs font-extrabold uppercase tracking-wider max-w-[75px] sm:max-w-none text-center truncate sm:whitespace-nowrap border transition-all duration-200 shadow-md ${
                    isSelected
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00]'
                      : isHovered
                      ? darkTheme
                        ? 'bg-[#0B1C18] text-[#8CFF00] border-[#8CFF00]'
                        : 'bg-white text-[#061210] border-[#8CFF00]'
                      : isConnected
                      ? darkTheme
                        ? 'bg-[#061210] text-slate-200 border-[#183D34]'
                        : 'bg-white text-slate-800 border-[#E2E4DC]'
                      : darkTheme
                      ? 'bg-[#061210]/90 text-slate-400 border-[#183D34]/50'
                      : 'bg-white/90 text-slate-600 border-[#E2E4DC]'
                  }`}
                >
                  {node.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
