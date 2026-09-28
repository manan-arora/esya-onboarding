import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { POLICIES_DATA } from '../data/policiesData';
import { ChevronDown, ChevronUp, FileText, Search } from 'lucide-react';

interface HowWeWorkViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const HowWeWorkView: React.FC<HowWeWorkViewProps> = ({ onOpenPolicy }) => {
  const [expandedPolicyId, setExpandedPolicyId] = useState<string | null>(null);
  const [policySearchQuery, setPolicySearchQuery] = useState<string>('');

  const whoDoIAskMatrix = [
    { question: 'Role / priorities', startWith: 'Manager' },
    { question: 'Team work', startWith: 'Manager / teammate' },
    { question: 'Technical implementation', startWith: 'Team / assigned technical contact' },
    { question: 'Access / technical issues', startWith: 'IT / official support route' },
    { question: 'Leave / HR process', startWith: 'HR / HRMS instructions' },
    { question: 'Expenses', startWith: 'Finance / current expense process' },
    { question: 'Travel', startWith: 'Admin / Travel process / current policy' },
    { question: 'Performance', startWith: 'Manager / HR' },
    { question: 'Workplace concerns', startWith: 'HR / applicable formal policy' },
    { question: 'Learning', startWith: 'Manager / relevant L&D contact' },
    { question: 'Something you cannot classify', startWith: 'Manager or HR' }
  ];

  const filteredPolicies = POLICIES_DATA.filter((p) => {
    const q = policySearchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.whatItAnswers.some((a) => a.toLowerCase().includes(q)) ||
      p.keyThingsToKnow.some((k) => k.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-20 pb-20 font-sans text-[#061210] selection:bg-[#8CFF00] selection:text-[#061210]">

      {/* 01. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● HOW WE WORK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            Learn the everyday rhythm of work.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Every team has its own details, but good work usually depends on the same basics: clear communication, shared context, ownership, respect, documentation and timely feedback. This section gives you the common foundation. Your manager and team provide the role-specific details.
          </p>
        </div>
      </section>

      {/* 02. COMMUNICATE & MEETINGS */}
      <section id="communication" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Communicate */}
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● COMMUNICATION GUIDELINES
            </span>
            <h2 className="text-2xl font-extrabold text-[#061210]">Communicate early. Communicate clearly.</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              You will often know something your teammate does not know: task blocked, requirement unclear, deadline at risk, error found, mistaking made. Do not wait for the perfect moment to communicate.
            </p>
            <div className="p-4 bg-[#F4F5F0] rounded-2xl text-xs space-y-2 border border-[#E2E4DC]">
              <span className="font-extrabold text-[#061210] block uppercase">A useful update answers:</span>
              <p className="text-slate-800">What happened? What have I done? What is blocked? What do I need? What happens next?</p>
            </div>
            <div className="p-4 bg-[#061210] text-white rounded-2xl text-xs space-y-2">
              <span className="text-[#8CFF00] font-extrabold block">INSTEAD OF "I AM STUCK", TRY:</span>
              <p className="text-slate-300 italic">
                "I am implementing X. I completed A and B, but I am blocked because I do not have access to C. I have checked the available documentation. Could you point me to the correct access process?"
              </p>
            </div>
          </div>

          {/* Meetings */}
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● MEETING ETIQUETTE
            </span>
            <h2 className="text-2xl font-extrabold text-[#061210]">Meetings are for people, not just calendars.</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              You do not need to speak in every meeting. You should know why you are there.
            </p>
            <div className="space-y-2 text-xs font-medium">
              <div className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block">BEFORE:</strong> Know the topic, read shared material, prepare questions.
              </div>
              <div className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block">DURING:</strong> Listen, avoid interrupting, ask when unclear, stay relevant, note decisions.
              </div>
              <div className="p-3 bg-[#F4F5F0] rounded-xl">
                <strong className="text-[#061210] block">AFTER:</strong> Know what was decided, what you own and when you need to act.
              </div>
            </div>
            <p className="text-xs text-slate-500 italic pt-2">
              If invited to an unclear meeting: "Could you help me understand what you would like me to contribute to this meeting?"
            </p>
          </div>

        </div>
      </section>

      {/* 03. DOCUMENTATION, COLLABORATION, OWNERSHIP & FEEDBACK */}
      <section id="rhythm" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Documentation */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-3">
            <span className="text-[10px] font-extrabold text-[#061210] uppercase tracking-widest block">DOCUMENTATION</span>
            <h3 className="text-lg font-extrabold text-[#061210]">Make it findable</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Good documentation helps answer: What is this? Why does it exist? How does it work? What should I do next?
            </p>
          </div>

          {/* Collaborate */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-3">
            <span className="text-[10px] font-extrabold text-[#061210] uppercase tracking-widest block">COLLABORATION</span>
            <h3 className="text-lg font-extrabold text-[#061210]">Cross boundaries</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When requesting help: 1. explain what, 2. explain why, 3. provide context, 4. reasonable timeline, 5. acknowledge, 6. close loop.
            </p>
          </div>

          {/* Ownership */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-3">
            <span className="text-[10px] font-extrabold text-[#061210] uppercase tracking-widest block">OWNERSHIP</span>
            <h3 className="text-lg font-extrabold text-[#061210]">Stay responsible</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ownership means staying responsible for moving your work forward. If blocked, make it visible and take the next step.
            </p>
          </div>

          {/* Feedback */}
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-3">
            <span className="text-[10px] font-extrabold text-[#061210] uppercase tracking-widest block">FEEDBACK</span>
            <h3 className="text-lg font-extrabold text-[#061210]">Part of the work</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Feedback conversation outcome: "What happened, why it matters, and what I can do differently."
            </p>
          </div>

        </div>
      </section>

      {/* 04. PERFORMANCE & IF THINGS ARE NOT GOING WELL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-[#061210] text-white rounded-3xl space-y-6 shadow-2xl border border-[#14332B]">
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block">
              ● PERFORMANCE & SUPPORT
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Understand success & raise issues early.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-300">
            <div className="space-y-2">
              <span className="text-[#8CFF00] font-extrabold uppercase block text-sm">SUCCESS & EVALUATION</span>
              <p className="leading-relaxed">
                Your manager should help you understand your role, priorities and expectations. For formal rules, use the current Performance Management policy.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[#8CFF00] font-extrabold uppercase block text-sm">IF THINGS ARE NOT GOING WELL</span>
              <p className="leading-relaxed">
                A difficult period does not have to become a silent period. If you are struggling with workload or technical blockers, raise it early with your manager or HR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. POLICY LIBRARY */}
      <section id="policy-library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
              ● ACCESSIBLE POLICY SOURCE OF TRUTH
            </span>
            <h2 className="text-3xl font-extrabold text-[#061210]">Policy Library</h2>
          </div>

          <div className="relative w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={policySearchQuery}
              onChange={(e) => setPolicySearchQuery(e.target.value)}
              placeholder="Search policies..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-[#E2E4DC] focus:border-[#061210] rounded-xl text-xs"
            />
          </div>
        </div>

        {/* Important Policy Notice */}
        <div className="p-6 bg-white border border-[#E2E4DC] rounded-3xl space-y-2 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] text-[10px] font-extrabold uppercase">
            ● IMPORTANT POLICY NOTICE
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            All summaries, cards and policy shortcuts on this website are for orientation and convenience. The official policy document maintained in Esyasoft&apos;s authorised HR systems (Zoho People / Zoho Expense / Zoho Recruit / ICC registry) is the authoritative source of truth.
          </p>
        </div>

        {/* Policy Accordion List */}
        <div className="space-y-4">
          {filteredPolicies.map((policy) => {
            const isExpanded = expandedPolicyId === policy.id;
            return (
              <div key={policy.id} className="bg-white border border-[#E2E4DC] rounded-2xl overflow-hidden transition-all shadow-xs">
                <div
                  onClick={() => setExpandedPolicyId(isExpanded ? null : policy.id)}
                  className="p-6 cursor-pointer flex items-center justify-between hover:bg-[#F4F5F0] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                      OFFICIAL POLICY
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#061210]">{policy.title}</h3>
                      <span className="text-xs text-slate-500 font-mono">
                        v{policy.version} • Rev. {policy.revisionDate} • Owner: {policy.owner}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPolicy(policy.id);
                      }}
                      title="View Policy Summary Modal"
                      className="w-9 h-9 rounded-xl bg-[#061210] hover:bg-[#14332B] text-[#8CFF00] transition-colors cursor-pointer flex items-center justify-center shadow-xs shrink-0"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#061210]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-6 pt-4 border-t border-[#E2E4DC] bg-[#F4F5F0] space-y-6 text-xs text-slate-700">
                    
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white border border-[#E2E4DC] rounded-xl font-sans">
                      <div>
                        <span className="text-slate-500 font-bold block text-[10px] uppercase">APPLICABILITY:</span>
                        <span className="text-[#061210] font-semibold">{policy.applicability}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-bold block text-[10px] uppercase">POLICY OWNER:</span>
                        <span className="text-[#061210] font-semibold">{policy.owner}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-bold block text-[10px] uppercase">PREPARED / APPROVED BY:</span>
                        <span className="text-[#061210] font-semibold">
                          {policy.preparedBy} / {policy.approvedBy}
                        </span>
                      </div>
                    </div>

                    {/* What It Answers */}
                    <div className="space-y-2">
                      <span className="font-extrabold text-[#061210] block uppercase tracking-wider">● WHAT IT ANSWERS:</span>
                      <ul className="space-y-1.5 text-slate-800 font-medium">
                        {policy.whatItAnswers.map((ans, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#061210] font-bold">•</span>
                            <span>{ans}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Things to Know / Highlights */}
                    <div className="space-y-2">
                      <span className="font-extrabold text-[#061210] block uppercase tracking-wider">● KEY POLICY HIGHLIGHTS & RULES:</span>
                      <ul className="space-y-2 text-slate-800 font-medium">
                        {policy.keyThingsToKnow.map((ktk, idx) => (
                          <li key={idx} className="p-3 bg-white border border-[#E2E4DC] rounded-xl flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-[10px]">{idx + 1}</span>
                            <span className="leading-relaxed">{ktk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Official Source Precedence Footer */}
                    <div className="p-4 bg-[#061210] text-white rounded-xl space-y-3 border border-[#14332B]">
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        <strong className="text-[#8CFF00]">Official source:</strong> This section is a practical summary of the applicable company policy. The latest official policy available through Esyasoft&apos;s authorised HR systems takes precedence.
                      </p>
                      <a
                        href="https://people.zoho.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#8CFF00] text-[#061210] text-xs font-extrabold rounded-lg hover:bg-[#76DA00] transition-colors"
                      >
                        <span>FIND THIS POLICY IN ZOHO PEOPLE</span>
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 06. WHO DO I ASK? MATRIX */}
      <section id="who-do-i-ask" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● SUPPORT NETWORK MATRIX
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">Who do I ask?</h2>
        </div>

        <div className="rounded-3xl overflow-hidden border border-[#E2E4DC] bg-white shadow-xs">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#061210] text-[#8CFF00] font-extrabold uppercase tracking-wider">
              <tr>
                <th className="p-4">QUESTION / NEED</th>
                <th className="p-4">START WITH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E4DC] text-slate-800 font-medium">
              {whoDoIAskMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F4F5F0] transition-colors">
                  <td className="p-4 font-bold text-[#061210]">{row.question}</td>
                  <td className="p-4 font-semibold text-slate-700">{row.startWith}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">
          You do not need to know the answer. You need to know who can help.
        </p>
      </section>

    </div>
  );
};
