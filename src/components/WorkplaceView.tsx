import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { POLICIES_DATA } from '../data/policiesData';
import { Search, ChevronRight } from 'lucide-react';

interface WorkplaceViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
  initialSection?: string;
}

export const WorkplaceView: React.FC<WorkplaceViewProps> = ({ onOpenPolicy }) => {
  const [policySearchQuery, setPolicySearchQuery] = useState('');

  const filteredPolicies = POLICIES_DATA.filter((p) => {
    const q = policySearchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.whatItAnswers.some((a) => a.toLowerCase().includes(q)) ||
      p.keyThingsToKnow.some((k) => k.toLowerCase().includes(q))
    );
  });

  const appsHub = [
    { name: 'Zoho People 5.0', use: 'HRMS portal for leave, attendance check-in, performance, compensation, and profile.', access: 'Single Sign-On (SSO)', support: 'HRBP / HR Team' },
    { name: 'Zoho Expense', use: 'Domestic travel requests, flight/hotel bookings, per diem claims, and reimbursement reports.', access: 'SSO via Zoho Expense portal', support: 'Finance & Travel Desk' },
    { name: 'Zoho Recruit', use: 'Employee Referral Portal to refer candidates for open positions and track ₹20,000 bonus status.', access: 'Employee credentials in Zoho Recruit', support: 'Talent Acquisition Team' },
    { name: 'Microsoft Teams', use: 'Primary corporate instant messaging, video meetings, and department team channels.', access: 'Office 365 Account', support: 'IT Helpdesk' },
    { name: 'Microsoft Outlook', use: 'Corporate email communication and calendar scheduling.', access: 'Office 365 Account', support: 'IT Helpdesk' }
  ];

  return (
    <div className="space-y-20 pb-20 font-sans text-[#061210]">
      
      {/* 01. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● WORKPLACE & POLICY LIBRARY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            Policies That Guide The Work.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Official internal policy documentation for leave, domestic travel, performance reviews, POSH compliance, and corporate applications.
          </p>

          {/* Search Input */}
          <div className="relative max-w-2xl pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-6" />
            <input
              type="text"
              value={policySearchQuery}
              onChange={(e) => setPolicySearchQuery(e.target.value)}
              placeholder="Search policy library (leave, travel, POSH, PIP, PMS, per diem)..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#E2E4DC] focus:border-[#061210] rounded-2xl text-sm font-medium text-[#061210] placeholder-slate-400 focus:outline-none shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* 02. CLEAN COMPACT POLICY LIBRARY GRID */}
      <section id="policies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2E4DC] pb-3">
          <h2 className="text-2xl font-extrabold text-[#061210]">
            Official Policies ({filteredPolicies.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.id}
              onClick={() => onOpenPolicy(policy.id)}
              className="p-6 bg-white border border-[#E2E4DC] hover:border-[#061210] rounded-3xl space-y-4 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                    OFFICIAL POLICY
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">Rev. {policy.revisionDate}</span>
                </div>

                <h3 className="text-lg font-extrabold text-[#061210] group-hover:text-emerald-700">
                  {policy.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                  {policy.whatItAnswers[0]}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E4DC] flex items-center justify-between text-xs font-extrabold text-[#061210]">
                <span>VIEW OFFICIAL POLICY</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. INTERNAL APPLICATIONS HUB (Dark Section #061210) */}
      <section className="bg-[#061210] text-white py-16 border-t border-[#14332B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#14332B] pb-4">
            <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block mb-1">
              ● CORPORATE TOOLSTACK
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Internal Applications & Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsHub.map((app, idx) => (
              <div key={idx} className="p-6 bg-[#0B1C18] border border-[#14332B] rounded-3xl space-y-3">
                <h3 className="text-lg font-extrabold text-[#8CFF00]">{app.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{app.use}</p>
                <div className="pt-2 text-[10px] text-slate-400 border-t border-[#14332B] font-mono">
                  Access: {app.access}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
