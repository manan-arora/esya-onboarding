import React from 'react';
import type { ViewTab } from '../types';
import { SourceLabel } from './SourceLabel';
import { Workflow, MessageSquare, Video, HelpCircle, TrendingUp, ArrowRight } from 'lucide-react';

interface HowWeWorkViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const HowWeWorkView: React.FC<HowWeWorkViewProps> = ({ onOpenPolicy }) => {
  const workflowSteps = [
    { step: '01', name: 'NEED', desc: 'Identify business or technical requirement.' },
    { step: '02', name: 'DISCUSS', desc: 'Align with manager, team, & stakeholders.' },
    { step: '03', name: 'PLAN', desc: 'Define sprint goals, tasks, & deadlines.' },
    { step: '04', name: 'EXECUTE', desc: 'Write clean code & complete deliverables.' },
    { step: '05', name: 'REVIEW', desc: 'Conduct peer code reviews & QA testing.' },
    { step: '06', name: 'DELIVER', desc: 'Deploy to client / production environment.' },
    { step: '07', name: 'IMPROVE', desc: 'Gather feedback & refine sprint outcomes.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in text-slate-100">
      {/* Page Header */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / HOW WE WORK
          </span>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          HOW WE WORK AT ESYASOFT
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          Practical onboarding models explaining day-to-day collaboration, communication channels, meeting etiquette, documentation, and performance frameworks.
        </p>
      </div>

      {/* Sub-Section 1: HOW WORK HAPPENS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Workflow className="w-5 h-5 text-[#00FF66]" />
            <span>HOW WORK HAPPENS</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <p className="text-xs text-slate-300 font-sans">
          Conceptual onboarding model illustrating how deliverables move from initial need to deployment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 font-mono text-xs">
          {workflowSteps.map((w) => (
            <div key={w.step} className="p-3 bg-[#07110D] border border-[#162E21] rounded-lg space-y-1">
              <span className="text-[10px] text-[#00FF66] font-bold block">{w.step}. {w.name}</span>
              <p className="text-[11px] text-slate-300 font-sans">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 2: COMMUNICATION & MEETINGS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {/* Communication */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#00FF66]" />
              <span>COMMUNICATION CHANNELS</span>
            </h3>
            <SourceLabel type="ONBOARDING GUIDANCE" />
          </div>
          <ul className="space-y-2 text-xs text-slate-300 font-sans">
            <li className="flex items-start gap-2">
              <strong className="text-[#00FF66] font-mono whitespace-nowrap">MS Teams:</strong>
              <span>Daily quick chats, department channels, and project status calls.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-[#00FF66] font-mono whitespace-nowrap">Corporate Email:</strong>
              <span>Formal announcements, client updates, and official approvals.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-[#00FF66] font-mono whitespace-nowrap">Zoho People:</strong>
              <span>Leave requests, attendance check-in, performance reviews, & HR queries.</span>
            </li>
          </ul>
        </div>

        {/* Meetings */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Video className="w-4 h-4 text-teal-400" />
              <span>MEETING ETIQUETTE</span>
            </h3>
            <SourceLabel type="ONBOARDING GUIDANCE" />
          </div>
          <div className="grid grid-cols-3 gap-2 font-sans text-xs">
            <div className="p-2.5 bg-[#050807] border border-[#162E21] rounded-lg">
              <strong className="text-emerald-400 font-mono block text-[11px]">BEFORE</strong>
              <p className="text-slate-300 text-[11px] mt-0.5">Define agenda & review pre-read docs.</p>
            </div>
            <div className="p-2.5 bg-[#050807] border border-[#162E21] rounded-lg">
              <strong className="text-emerald-400 font-mono block text-[11px]">DURING</strong>
              <p className="text-slate-300 text-[11px] mt-0.5">Be punctual, concise, & take notes.</p>
            </div>
            <div className="p-2.5 bg-[#050807] border border-[#162E21] rounded-lg">
              <strong className="text-emerald-400 font-mono block text-[11px]">AFTER</strong>
              <p className="text-slate-300 text-[11px] mt-0.5">Send action items & follow up on tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: ASKING FOR HELP FLOW */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#00FF66]" />
            <span>ASKING FOR HELP WORKFLOW</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-center">
            {['STUCK', 'CHECK INFO', 'TRY', 'ASK', 'EXPLAIN WHAT TRIED', 'ESCALATE IF NEEDED'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded bg-[#050807] border border-[#00FF66]/30 text-[#00FF66] font-bold">
                  0{idx + 1}. {step}
                </span>
                {idx < arr.length - 1 && <span className="text-slate-600">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-300 font-sans">
            When blocked, first check available internal documentation or existing code. Try resolving it, then reach out to a colleague or manager clearly explaining what you have already attempted.
          </p>
        </div>
      </section>

      {/* Sub-Section 4: FEEDBACK & PERFORMANCE MANAGEMENT */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#00FF66]" />
            <span>FEEDBACK & PERFORMANCE FRAMEWORK</span>
          </h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {/* PMS Card */}
          <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">PMS (Performance Management System)</span>
              <SourceLabel type="OFFICIAL" />
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Annual April-March appraisal cycle evaluating performance on a 1-5 rating scale. Goal setting completed by May for existing staff and within 60 days for new hires.
            </p>
            <button
              onClick={() => onOpenPolicy('pms-policy')}
              className="px-3 py-1.5 rounded bg-[#00FF66]/15 border border-[#00FF66]/40 text-[#00FF66] font-bold hover:bg-[#00FF66]/30 transition-all flex items-center gap-1.5"
            >
              <span>[ READ OFFICIAL PMS POLICY ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* PIP Card */}
          <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">PIP (Performance Improvement Plan)</span>
              <SourceLabel type="OFFICIAL" />
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Structured 1-month or 2-month developmental framework to support underperforming employees with regular weekly/bi-weekly review check-ins tracked transparently in Zoho People.
            </p>
            <button
              onClick={() => onOpenPolicy('pip-policy')}
              className="px-3 py-1.5 rounded bg-[#00FF66]/15 border border-[#00FF66]/40 text-[#00FF66] font-bold hover:bg-[#00FF66]/30 transition-all flex items-center gap-1.5"
            >
              <span>[ READ OFFICIAL PIP POLICY ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
