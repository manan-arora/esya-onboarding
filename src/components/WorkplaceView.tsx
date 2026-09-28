import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { POLICIES_DATA } from '../data/policiesData';
import { SourceLabel } from './SourceLabel';
import { FileText, Search, Laptop, CreditCard, Building, ArrowRight } from 'lucide-react';

interface WorkplaceViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
  initialSection?: string;
}

export const WorkplaceView: React.FC<WorkplaceViewProps> = ({
  onOpenPolicy
}) => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in text-slate-100">
      {/* Header Section */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / WORKPLACE
          </span>
          <SourceLabel type="OFFICIAL" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
          WORKPLACE, POLICIES & SYSTEMS
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          Search official company policy documents, understand Zoho HRMS, IT access setup, travel claims, and workplace facilities.
        </p>
      </div>

      {/* Sub-Section 1: SEARCHABLE POLICY LIBRARY */}
      <section id="policies" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#162E21] pb-3">
          <div>
            <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#00FF66]" />
              <span>OFFICIAL POLICY LIBRARY ({POLICIES_DATA.length} DOCUMENTS)</span>
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              Authoritative internal Esyasoft policies. Click [ READ OFFICIAL POLICY ] to view full document text.
            </p>
          </div>
          <SourceLabel type="OFFICIAL" />
        </div>

        {/* Policy Search Input */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-[#00FF66] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={policySearchQuery}
            onChange={(e) => setPolicySearchQuery(e.target.value)}
            placeholder="Search policy library (leave, travel, POSH, PIP, PMS, referral, per diem)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#07110D] border border-[#162E21] focus:border-[#00FF66] rounded-lg text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
          />
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.id}
              className="p-6 bg-[#07110D] border border-[#162E21] hover:border-[#00FF66]/40 rounded-xl space-y-4 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{policy.title}</span>
                  </h3>
                  <SourceLabel type="OFFICIAL" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 bg-[#050807] p-2.5 rounded-lg border border-[#162E21]">
                  <div>
                    <span className="block text-slate-500">APPLICABILITY:</span>
                    <span className="text-emerald-300 font-medium">{policy.applicability}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">OWNER:</span>
                    <span className="text-emerald-300 font-medium">{policy.owner}</span>
                  </div>
                </div>

                {/* Key Things to Know Highlights */}
                <div>
                  <span className="text-[10px] font-bold text-[#00FF66] block uppercase mb-1">
                    KEY THINGS TO KNOW:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300 font-sans">
                    {policy.keyThingsToKnow.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#00FF66] font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#162E21] flex items-center justify-between">
                <span className="text-[10px] text-slate-500">Rev: {policy.revisionDate}</span>
                <button
                  onClick={() => onOpenPolicy(policy.id)}
                  className="px-3 py-1.5 rounded bg-[#00FF66]/15 hover:bg-[#00FF66]/30 border border-[#00FF66]/40 text-[#00FF66] font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>[ READ OFFICIAL POLICY ]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 2: HRMS GUIDE (ZOHO PEOPLE 5.0) */}
      <section id="hrms" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">HRMS GUIDE: ZOHO PEOPLE 5.0</h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">1. LEAVE SERVICE</span>
              <span className="text-slate-300 text-[11px] font-sans">Apply for EL, SL, CL, Menstrual leave & check leave balance.</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">2. ATTENDANCE</span>
              <span className="text-slate-300 text-[11px] font-sans">Web check-in/out, mark breaks, and request regularization.</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">3. PERFORMANCE</span>
              <span className="text-slate-400 text-[11px] font-sans">View KRAs, goals, peer feedback, & self-appraisals.</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">4. COMPENSATION</span>
              <span className="text-slate-300 text-[11px] font-sans">View payslips and download annual revision letters.</span>
            </div>
          </div>
          <button
            onClick={() => onOpenPolicy('zoho-people-handbook')}
            className="text-xs text-[#00FF66] font-bold hover:underline flex items-center gap-1"
          >
            <span>[ READ OFFICIAL ZOHO PEOPLE HANDBOOK ]</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Sub-Section 3: IT & ACCESS ("GET CONNECTED") */}
      <section id="it-access" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Laptop className="w-5 h-5 text-[#00FF66]" />
            <span>IT & ACCESS: GET CONNECTED</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-center">
            {['ACCOUNT', 'DEVICE', 'NETWORK', 'COMMUNICATION', 'BUSINESS SYSTEMS', 'ROLE ACCESS'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded bg-[#050807] border border-teal-500/30 text-teal-300 font-bold">
                  0{idx + 1}. {step}
                </span>
                {idx < arr.length - 1 && <span className="text-slate-600">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Section 4: APPLICATIONS HUB */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">APPLICATIONS HUB</h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {appsHub.map((app, idx) => (
            <div key={idx} className="p-4 bg-[#07110D] border border-[#162E21] rounded-xl space-y-2">
              <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                <span className="text-sm font-bold text-white">{app.name}</span>
                <SourceLabel type="COMPANY CONTEXT" />
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{app.use}</p>
              <div className="pt-2 border-t border-[#162E21] text-[10px] text-slate-400 space-y-0.5">
                <div>Access: <span className="text-emerald-300">{app.access}</span></div>
                <div>Support: <span className="text-slate-300">{app.support}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 5: TRAVEL & EXPENSES */}
      <section id="travel" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#00FF66]" />
            <span>DOMESTIC TRAVEL & EXPENSES WORKFLOW</span>
          </h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center">
            {['BEFORE TRAVEL', 'APPROVAL', 'BOOKING', 'TRAVEL', 'DOCUMENTATION', 'EXPENSE CLAIM'].map((step, idx) => (
              <div key={step} className="p-2.5 bg-[#050807] border border-[#162E21] rounded-lg">
                <span className="text-[#00FF66] font-bold block text-[10px]">0{idx + 1}</span>
                <span className="text-slate-200 text-[11px] font-bold">{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#162E21]">
            <p className="text-xs text-slate-300 font-sans">
              All travel requests and expense reimbursements must be processed via Zoho Expense. Air travel permitted only for trips &gt; 6 hours.
            </p>
            <button
              onClick={() => onOpenPolicy('domestic-travel-policy')}
              className="px-3 py-1.5 rounded bg-[#00FF66]/15 border border-[#00FF66]/40 text-[#00FF66] font-bold text-xs hover:bg-[#00FF66]/30 transition-all flex items-center gap-1"
            >
              <span>[ READ OFFICIAL TRAVEL POLICY ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sub-Section 6: FACILITIES & GCC INFO */}
      <section id="facilities" className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-teal-400" />
            <span>FACILITIES & LOCATION INFORMATION</span>
          </h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
            <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
              <span className="text-sm font-bold text-white">GENERAL EMPLOYEE INFORMATION</span>
              <SourceLabel type="COMPANY CONTEXT" />
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Standard workplace access rules, office working hours, building security passes, and emergency contact details apply across all Esyasoft offices (Bengaluru, Mangalore, Noida, Bhopal).
            </p>
          </div>

          <div className="p-6 bg-teal-950/20 border border-teal-800/40 rounded-xl space-y-3">
            <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
              <span className="text-sm font-bold text-teal-300">PROGRAM-SPECIFIC / MANGALORE GCC</span>
              <SourceLabel type="PROJECT / ROLE SPECIFIC" />
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Specific residential or rotational program arrangements (e.g. Graduate Engineer Trainee residential programs) apply exclusively to designated program cohorts and are not company-wide policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
