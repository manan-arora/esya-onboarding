import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { CheckCircle2, Square, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface StartHereViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const StartHereView: React.FC<StartHereViewProps> = ({ onOpenPolicy }) => {
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const firstDayChecklist = [
    { id: 'fd-1', text: 'Meet your manager/reporting contact.' },
    { id: 'fd-2', text: 'Understand what your immediate team does.' },
    { id: 'fd-3', text: 'Know what you are expected to focus on first.' },
    { id: 'fd-4', text: 'Meet the people you will work with most closely.' },
    { id: 'fd-5', text: 'Confirm access to relevant systems.' },
    { id: 'fd-6', text: 'Understand primary team communication channels.' },
    { id: 'fd-7', text: 'Find important company resources and policies.' },
    { id: 'fd-[#061210]', text: 'Understand who to approach when blocked.' },
    { id: 'fd-9', text: 'Ask what you should read or understand first.' },
    { id: 'fd-10', text: 'Write down questions.' }
  ];

  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / firstDayChecklist.length) * 100);

  return (
    <div className="space-y-20 pb-20 font-sans text-[#061210] selection:bg-[#8CFF00] selection:text-[#061210]">
      
      {/* 01. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● START HERE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            Your practical first steps.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            There is a lot to take in when you join a new company. Start with what is relevant to you today. The sections below cover the things most new joiners need first: getting ready, getting settled, understanding who to talk to, and finding the systems and information you will use.
          </p>
        </div>
      </section>

      {/* 02. BEFORE YOU JOIN */}
      <section id="before-you-join" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● PRE-JOINING PREPARATION
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            Before You Join
          </h2>
        </div>

        <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
          If you have not started yet, you do not need to prepare for everything. Focus on knowing the basics: where and when you are expected to report, who your joining or HR contact is, what documents or information you need to provide, whether any equipment or access arrangements have been communicated, whether there are location-specific instructions, and where you can find the latest official joining information.
        </p>

        <p className="text-xs text-slate-500 font-semibold italic">
          Your offer, joining communication and official HR/Admin communication should always take priority over this guide.
        </p>

        {/* Checklist Box */}
        <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
          <h3 className="text-lg font-extrabold text-[#061210] uppercase tracking-wider">
            Pre-Joining Checklist
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Read your joining communication carefully.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Save the contact details provided by HR or your joining coordinator.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Note your joining date, reporting location and reporting instructions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Complete requested forms/documentation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Keep required identification and employment documents accessible.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Check whether laptop, email, access card or other equipment arrangements have been communicated.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>If relocating/travelling for a programme, read the latest official travel/accommodation communication.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">✓</span>
              <span>Do not worry about learning the entire company before Day 1.</span>
            </li>
          </ul>
        </div>

        {/* Callout Quote */}
        <div className="p-6 bg-[#061210] text-white rounded-2xl border border-[#14332B] shadow-lg">
          <p className="text-sm font-medium text-slate-200">
            <span className="text-[#8CFF00] font-extrabold mr-2">● GUIDANCE:</span>
            "You are allowed to arrive without knowing everything. Curiosity is more useful than trying to memorise the company website before you start."
          </p>
        </div>
      </section>

      {/* 03. FIRST DAY */}
      <section id="first-day" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● DAY 1 ORIENTATION
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            First Day
          </h2>
        </div>

        <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
          <p>
            Your first day is mainly about orientation and connection. You are not expected to understand the entire organisation, technology stack, product, or your role in a few hours.
          </p>
          <p className="font-semibold text-[#061210]">
            Try to leave the day knowing: 1. who you report to, 2. who your immediate teammates are, 3. what your first responsibilities are, 4. which systems you need access to, 5. where official information lives, 6. how your team communicates, 7. what you should focus on next.
          </p>
        </div>

        {/* Interactive First Day Checklist */}
        <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E2E4DC] pb-4">
            <div>
              <h3 className="text-lg font-extrabold text-[#061210] uppercase tracking-wider">
                First-Day Action Checklist
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Click any task below to mark as completed ({progressPercent}% complete).</p>
            </div>
            <div className="w-32 bg-[#E7E9E0] rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#8CFF00] h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {firstDayChecklist.map((item) => {
              const checked = !!completedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    checked
                      ? 'bg-[#F4F5F0] border-[#8CFF00] text-slate-700'
                      : 'bg-white border-[#E2E4DC] hover:border-[#061210] text-[#061210]'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-[#061210]">
                    {checked ? (
                      <CheckCircle2 className="w-5 h-5 text-[#76DA00] fill-current" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <span className={`text-xs font-extrabold leading-relaxed ${checked ? 'line-through text-slate-500' : 'text-[#061210]'}`}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Questions Worth Asking */}
        <div className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 shadow-xl">
          <h3 className="text-lg font-extrabold text-[#8CFF00] uppercase tracking-wider flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            <span>QUESTIONS WORTH ASKING ON DAY 1</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
            {[
              'What should I focus on during my first week?',
              'Who should I approach when I need help?',
              'Where does the team keep documentation?',
              'Which communication channel should I use for what?',
              'What meetings should I attend?',
              'Is there anything I should read before my first task?',
              'What would you like me to understand by the end of my first month?'
            ].map((q, idx) => (
              <li key={idx} className="p-4 bg-[#0B1C18] border border-[#14332B] rounded-xl flex items-start gap-3">
                <span className="text-[#8CFF00] font-extrabold">{idx + 1}.</span>
                <span className="leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04. FIRST WEEK */}
      <section id="first-week" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● WEEK 1 CONTEXT
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            First Week
          </h2>
        </div>

        <p className="text-base text-slate-700 leading-relaxed font-normal">
          The first week is about building context.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
              DAY 1 — CONNECT
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">Meet people and understand where you fit.</p>
          </div>

          <div className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
              DAY 2 — UNDERSTAND
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">Learn what your team does and why it matters.</p>
          </div>

          <div className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
              DAY 3 — OBSERVE
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">Watch how communication, meetings, documentation and decisions happen.</p>
          </div>

          <div className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
              DAY 4 — EXPLORE
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">Read systems, products, processes or technical material relevant to your role.</p>
          </div>

          <div className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
              DAY 5 — REFLECT
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">Write down: what you understand, what is still unclear, who you need to speak to, what you want to learn next.</p>
          </div>
        </div>

        {/* First-week outcome */}
        <div className="p-6 bg-[#061210] text-white rounded-2xl border border-[#14332B] shadow-lg">
          <p className="text-sm font-medium text-slate-200">
            <span className="text-[#8CFF00] font-extrabold mr-2">● FIRST-WEEK OUTCOME:</span>
            By the end of your first week, aim to explain: "This is what my team does, this is where my work fits, these are the people I work with, these are the systems I use, and this is what I need to learn next."
          </p>
        </div>
      </section>

      {/* 05. ESSENTIAL SYSTEMS & ACCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● TOOLSTACK & ACCESS
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            Essential systems & access
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4">
            <h3 className="text-lg font-extrabold text-[#061210] uppercase">Known company tools</h3>
            <ul className="space-y-3 text-xs font-medium text-slate-700">
              <li className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block text-sm">Zoho People</strong>
                <span>Employee/HR-related activities (Leave, Attendance, Profile, PMS).</span>
              </li>
              <li className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block text-sm">Zoho Expense</strong>
                <span>Expense claims and domestic travel reimbursements.</span>
              </li>
              <li className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block text-sm">Zoho Recruit</strong>
                <span>Recruitment-related activities and employee referrals.</span>
              </li>
              <li className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block text-sm">Microsoft Teams</strong>
                <span>Corporate chat, channels, and video meetings.</span>
              </li>
              <li className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block text-sm">Outlook</strong>
                <span>Corporate email and calendar scheduling.</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Do not assume every employee uses every system. Your team or HR communication should tell you which systems apply to your role.
            </p>
          </div>

          <div className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 border border-[#14332B] shadow-xl">
            <h3 className="text-lg font-extrabold text-[#8CFF00] uppercase">If something is not working</h3>
            <ol className="space-y-3 text-xs font-medium text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <span>Check whether the issue is specific to your account/system.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <span>Read the available official instructions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <span>Ask your immediate team if they know the correct route.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <span>Contact the relevant IT/HR/Admin support channel.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-xs">5</span>
                <span>Describe what you were trying to do, what happened and any visible error.</span>
              </li>
            </ol>
            <div className="p-4 bg-[#0B1C18] rounded-xl border border-[#14332B] text-xs text-[#8CFF00] font-mono mt-4">
              Never share passwords or sensitive credentials when requesting help.
            </div>
          </div>
        </div>
      </section>

      {/* 06. I NEED TO... (PERSISTENT UTILITY SECTION 4) */}
      <section id="i-need-to" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● PERSISTENT UTILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061210]">
            I Need To...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Take Leave */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — Leave Policy v3.1
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Take leave</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Check leave type and balance in Zoho People.</li>
                  <li>Check advance notice / approval rules.</li>
                  <li>Apply through Zoho People HRMS.</li>
                  <li>Obtain manager approval.</li>
                </ol>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *5+ days EL requires 15 days advance notice. Unapproved leave may be treated as LOP.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('leave-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN LEAVE POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Travel for Work */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — Domestic Travel Policy v1.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Travel for work</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Raise Trip Request in Zoho Expense.</li>
                  <li>Obtain Reporting Manager approval.</li>
                  <li>Use Travel Desk for booking.</li>
                  <li>Submit reimbursement within 30 working days of return.</li>
                </ol>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *Air travel allowed only if journey &gt;6 hours. Personal car ₹15/km, bike ₹10/km.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('domestic-travel-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN TRAVEL POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Check Performance Goals */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — PMS Policy v1.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Check performance goals</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <p>Open <strong>Zoho People → Performance</strong>.</p>
                <p className="text-slate-600">New hires have goals assigned within 60 days of joining. Appraisal cycle runs April to March annually.</p>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *Employees joining on/before Sept 30 are eligible for current cycle revision.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('pms-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN PMS POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. Training / Certification Reimbursement */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — Learning Reimbursement v1.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Training reimbursement</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Get prior written approval from Manager, BU Head & Talent Head.</li>
                  <li>Complete course & obtain invoice/certificate.</li>
                  <li>Submit claim via Zoho Expense.</li>
                </ol>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *Service commitment matrix applies for costs &gt;₹10,000. Retake fees not covered.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('training-certification-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN TRAINING POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5. Refer Someone */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — Referral Policy v1.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Refer a candidate</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <p>Log in to <strong>Zoho Recruit → Employee Referral</strong>, select position, and upload candidate resume.</p>
                <p className="text-slate-600 font-semibold text-emerald-950">Referral Bonus: ₹20,000 (disbursed 90 days post DOJ).</p>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *Must be submitted via Zoho Recruit before candidate applies elsewhere.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('employee-referral-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN REFERRAL POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 6. Report Workplace Concern */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — POSH Policy v3.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Report a concern</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Contact Internal Complaints Committee (Divya Prasad).</li>
                  <li>Preserve digital evidence (screenshots, emails, logs).</li>
                  <li>Lodge within 3 months of incident.</li>
                </ol>
                <p className="text-slate-500 text-[11px] italic pt-1">
                  *Process is strictly confidential and covers physical and digital spaces.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('posh-policy')}
                className="v1-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN POSH POLICY</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 7. Fix Attendance */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-3">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                OFFICIAL — Zoho People Handbook v5.0
              </span>
              <h3 className="text-xl font-extrabold text-[#061210]">Fix attendance or log timesheets</h3>
              <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-1.5">
                <p className="font-semibold text-[#061210]">What do I do?</p>
                <p>Use <strong>Zoho People → Attendance</strong> for check-in/out, breaks, permission/on-duty requests, and attendance regularisation. Use <strong>Zoho People → Timesheets</strong> to log job hours.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E2E4DC]">
              <button
                onClick={() => onOpenPolicy('zoho-people-handbook')}
                className="v1-btn-primary px-6 py-2.5 text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>OPEN ZOHO PEOPLE HANDBOOK</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
