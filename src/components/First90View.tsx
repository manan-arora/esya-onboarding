import React, { useState } from 'react';
import type { ViewTab } from '../types';

interface First90ViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
}

export const First90View: React.FC<First90ViewProps> = () => {
  const [selectedStage, setSelectedStage] = useState<'connect' | 'understand' | 'participate' | 'contribute'>('connect');

  return (
    <div className="space-y-20 pb-20 font-sans text-[#061210] selection:bg-[#8CFF00] selection:text-[#061210]">
      
      {/* 01. HERO SECTION */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● FIRST 90</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            A simple route through your first three months.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Your first 90 days are not a race to know everything. They are a period of building context: meeting people, understanding your role, learning the business, getting comfortable with the way work happens, and gradually taking more ownership. This route is a guide, not a rigid schedule. Your actual experience depends on your role, team, project, location and manager.
          </p>

          {/* Connected System Route Visual Bar */}
          <div className="pt-4">
            <div className="p-6 bg-[#061210] text-white rounded-3xl shadow-2xl space-y-6 border border-[#14332B]">
              <div className="flex items-center justify-between text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest">
                <span>ONBOARDING ROUTE</span>
                <span>DAYS 1–7 ──── DAYS 8–30 ──── DAYS 31–60 ──── DAYS 61–90</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button
                  onClick={() => setSelectedStage('connect')}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedStage === 'connect'
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] font-extrabold shadow-lg scale-105'
                      : 'bg-[#0B1C18] text-slate-200 border-[#14332B] hover:border-slate-500'
                  }`}
                >
                  <span className="text-[10px] font-mono block">DAYS 1–7</span>
                  <h3 className="text-base font-extrabold uppercase">CONNECT</h3>
                </button>

                <button
                  onClick={() => setSelectedStage('understand')}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedStage === 'understand'
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] font-extrabold shadow-lg scale-105'
                      : 'bg-[#0B1C18] text-slate-200 border-[#14332B] hover:border-slate-500'
                  }`}
                >
                  <span className="text-[10px] font-mono block">DAYS 8–30</span>
                  <h3 className="text-base font-extrabold uppercase">UNDERSTAND</h3>
                </button>

                <button
                  onClick={() => setSelectedStage('participate')}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedStage === 'participate'
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] font-extrabold shadow-lg scale-105'
                      : 'bg-[#0B1C18] text-slate-200 border-[#14332B] hover:border-slate-500'
                  }`}
                >
                  <span className="text-[10px] font-mono block">DAYS 31–60</span>
                  <h3 className="text-base font-extrabold uppercase">PARTICIPATE</h3>
                </button>

                <button
                  onClick={() => setSelectedStage('contribute')}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedStage === 'contribute'
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] font-extrabold shadow-lg scale-105'
                      : 'bg-[#0B1C18] text-slate-200 border-[#14332B] hover:border-slate-500'
                  }`}
                >
                  <span className="text-[10px] font-mono block">DAYS 61–90</span>
                  <h3 className="text-base font-extrabold uppercase">CONTRIBUTE</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STAGE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* DAYS 1-7 CONNECT */}
        {selectedStage === 'connect' && (
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-8 shadow-sm">
            <div className="border-b border-[#E2E4DC] pb-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                DAYS 1–7
              </span>
              <h2 className="text-3xl font-extrabold text-[#061210]">CONNECT</h2>
              <p className="text-base text-slate-700 font-semibold">Meet the people. Find your place. Get oriented.</p>
              <p className="text-xs text-slate-500">Focus on becoming comfortable enough to ask questions and know where to find help.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">UNDERSTAND</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Manager & immediate teammates</li>
                  <li>• Team purpose & first responsibilities</li>
                  <li>• Relevant systems & communication channels</li>
                  <li>• Documentation & who helps when blocked</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">DO</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Meet people & understand team purpose</li>
                  <li>• Get relevant system access</li>
                  <li>• Read key documentation</li>
                  <li>• Attend relevant meetings</li>
                  <li>• Start a glossary & keep questions</li>
                  <li>• Have a manager check-in</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">ASK</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• What should I learn first?</li>
                  <li>• What should I not worry about yet?</li>
                  <li>• What does the team need from me in Month 1?</li>
                  <li>• What is the best way to ask for help?</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#061210] text-white rounded-2xl text-xs shadow-md">
              <span className="text-[#8CFF00] font-extrabold block text-sm uppercase mb-1">END-STATE:</span>
              "I know who I work with, what my team does, where to find information, and what I need to focus on next."
            </div>
          </div>
        )}

        {/* DAYS 8-30 UNDERSTAND */}
        {selectedStage === 'understand' && (
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-8 shadow-sm">
            <div className="border-b border-[#E2E4DC] pb-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                DAYS 8–30
              </span>
              <h2 className="text-3xl font-extrabold text-[#061210]">UNDERSTAND</h2>
              <p className="text-base text-slate-700 font-semibold">Move from knowing names and systems to understanding the work.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">UNDERSTAND</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Problem team solves & users</li>
                  <li>• Products, platforms & processes</li>
                  <li>• How work enters & is reviewed</li>
                  <li>• Dependencies & domain terms</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">DO</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Read documentation & shadow experienced people</li>
                  <li>• Understand one product/process area</li>
                  <li>• Follow one piece of work</li>
                  <li>• Learn business vocabulary</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">ASK</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• What is the most important problem team solves?</li>
                  <li>• Who depends on our work?</li>
                  <li>• What usually goes wrong?</li>
                  <li>• What does good quality look like?</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#061210] text-white rounded-2xl text-xs shadow-md">
              <span className="text-[#8CFF00] font-extrabold block text-sm uppercase mb-1">END-STATE:</span>
              "This is what my team does, this is why it matters, this is how work moves through the team, and this is where my role contributes."
            </div>
          </div>
        )}

        {/* DAYS 31-60 PARTICIPATE */}
        {selectedStage === 'participate' && (
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-8 shadow-sm">
            <div className="border-b border-[#E2E4DC] pb-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                DAYS 31–60
              </span>
              <h2 className="text-3xl font-extrabold text-[#061210]">PARTICIPATE</h2>
              <p className="text-base text-slate-700 font-semibold">Start contributing with context.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">UNDERSTAND</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• How priorities & work assignment work</li>
                  <li>• How quality is checked & blockers handled</li>
                  <li>• How decisions are documented</li>
                  <li>• Where you can act without waiting</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">DO</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Own an appropriate task/deliverable</li>
                  <li>• Communicate progress & raise blockers</li>
                  <li>• Ask for feedback</li>
                  <li>• Learn from outside your role</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">ASK</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• What am I doing well?</li>
                  <li>• Where am I still creating unnecessary dependency?</li>
                  <li>• What should I become more independent at?</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#061210] text-white rounded-2xl text-xs shadow-md">
              <span className="text-[#8CFF00] font-extrabold block text-sm uppercase mb-1">END-STATE:</span>
              "I can take a piece of work, understand what is expected, communicate clearly, get help when needed, and carry it through to an outcome."
            </div>
          </div>
        )}

        {/* DAYS 61-90 CONTRIBUTE */}
        {selectedStage === 'contribute' && (
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-8 shadow-sm">
            <div className="border-b border-[#E2E4DC] pb-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                DAYS 61–90
              </span>
              <h2 className="text-3xl font-extrabold text-[#061210]">CONTRIBUTE</h2>
              <p className="text-base text-slate-700 font-semibold">Become someone the team can rely on.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">UNDERSTAND</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Where you create value & team relies on you</li>
                  <li>• Skills to deepen & key relationships</li>
                  <li>• How work connects to wider goals</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">DO</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• Own appropriate work & suggest improvements</li>
                  <li>• Share useful knowledge & build relationships</li>
                  <li>• Ask for a 90-day feedback conversation</li>
                  <li>• Define three development priorities</li>
                </ul>
              </div>

              <div className="p-5 bg-[#F4F5F0] rounded-2xl space-y-2">
                <span className="font-extrabold text-[#061210] block text-sm uppercase">ASK</span>
                <ul className="space-y-1 text-slate-700">
                  <li>• What should I continue? What should I change?</li>
                  <li>• Where can I take more ownership?</li>
                  <li>• What would make me a stronger contributor over next 6 months?</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#061210] text-white rounded-2xl text-xs shadow-md">
              <span className="text-[#8CFF00] font-extrabold block text-sm uppercase mb-1">END-STATE:</span>
              "I understand my role, my team and the business context well enough to contribute with increasing ownership, and I know what I need to learn next."
            </div>
          </div>
        )}

      </section>

      {/* 03. 30 / 60 / 90 REFLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● MILESTONE REFLECTION CONVERSATIONS
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            30 / 60 / 90 Reflection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Day 30 */}
          <div className="p-6 bg-[#061210] text-white border border-[#14332B] rounded-3xl space-y-4 shadow-xl">
            <span className="text-xs font-mono text-[#8CFF00] font-extrabold uppercase block">AROUND DAY 30</span>
            <h3 className="text-lg font-extrabold text-white">Laying the Groundwork</h3>
            <div className="space-y-2 text-xs text-slate-300 font-normal">
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px]">ASK YOURSELF:</span>
              <p>• What do I understand now that I did not on Day 1?</p>
              <p>• Who are the people I rely on?</p>
              <p>• What is still confusing?</p>
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px] pt-2">ASK YOUR MANAGER:</span>
              <p>• Am I focusing on the right things?</p>
              <p>• What should I improve?</p>
            </div>
          </div>

          {/* Day 60 */}
          <div className="p-6 bg-[#061210] text-white border border-[#14332B] rounded-3xl space-y-4 shadow-xl">
            <span className="text-xs font-mono text-[#8CFF00] font-extrabold uppercase block">AROUND DAY 60</span>
            <h3 className="text-lg font-extrabold text-white">Building Momentum</h3>
            <div className="space-y-2 text-xs text-slate-300 font-normal">
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px]">ASK YOURSELF:</span>
              <p>• What can I now do independently?</p>
              <p>• Where do I still need frequent help?</p>
              <p>• What process could I improve?</p>
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px] pt-2">ASK YOUR MANAGER:</span>
              <p>• Where am I becoming stronger?</p>
              <p>• Where should I take more ownership?</p>
            </div>
          </div>

          {/* Day 90 */}
          <div className="p-6 bg-[#061210] text-white border border-[#14332B] rounded-3xl space-y-4 shadow-xl">
            <span className="text-xs font-mono text-[#8CFF00] font-extrabold uppercase block">AROUND DAY 90</span>
            <h3 className="text-lg font-extrabold text-white">Owning Your Role</h3>
            <div className="space-y-2 text-xs text-slate-300 font-normal">
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px]">ASK YOURSELF:</span>
              <p>• Can I explain what my team does?</p>
              <p>• Do I understand where my work fits?</p>
              <p>• What do I want to improve in next 6 months?</p>
              <span className="text-[#8CFF00] font-extrabold block uppercase text-[10px] pt-2">ASK YOUR MANAGER:</span>
              <p>• What should I continue / change?</p>
              <p>• What should my next development priority be?</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
