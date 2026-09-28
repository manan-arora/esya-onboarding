import React from 'react';
import type { ViewTab } from '../types';

interface CompanyViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
}

export const CompanyView: React.FC<CompanyViewProps> = () => {
  return (
    <div className="space-y-20 pb-20 font-sans text-[#061210] selection:bg-[#8CFF00] selection:text-[#061210]">
      
      {/* 01. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● ESYASOFT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            Understand where you have joined.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Esyasoft works across technology, infrastructure and energy-transition solutions. Understanding the company does not mean memorising every product. It means understanding the problem space, the customers and utilities we work with, the kinds of solutions we build, and how different skills come together to create them.
          </p>
        </div>
      </section>

      {/* 02. SO, WHAT IS ESYASOFT? & WHY DOES THIS WORK MATTER? */}
      <section id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* So, what is Esyasoft? */}
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● COMPANY OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061210]">So, what is Esyasoft?</h2>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                Esyasoft describes itself as a global energy transition technology group. Its public portfolio spans smart utility solutions, software, analytics and AI, Energy as a Service, battery energy storage systems, and e-mobility. Its work extends across electricity, water and gas utilities and other parts of the energy-transition ecosystem.
              </p>
              <p>
                In simple terms, Esyasoft works on the systems that help energy and utility infrastructure become more connected, visible, intelligent and efficient. That can involve physical devices and infrastructure, communications and IoT, software platforms, data, analytics, AI, storage, mobility and energy services.
              </p>
              <p className="font-semibold text-[#061210]">
                This is why people with very different backgrounds can contribute here: engineers, software developers, data and AI specialists, product and project teams, operations, finance, sales, business teams and many others can all be part of the same larger system.
              </p>
            </div>
          </div>

          {/* Why does this work matter? */}
          <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● PURPOSE & CONTEXT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061210]">Why does this work matter?</h2>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                Electricity, water and other utility services are part of everyday life. The systems behind them are large, physical and increasingly data-driven. They have to operate reliably while demand, technology, infrastructure and customer expectations continue to change.
              </p>
              <p>
                The energy transition adds another layer of complexity. Renewable generation, storage, electric mobility, connected infrastructure and digital systems all need to work together.
              </p>
              <p className="font-semibold text-[#061210]">
                Esyasoft's public mission is centred on enabling smarter, cleaner and more connected energy systems.
              </p>
              <div className="p-4 bg-[#061210] text-white rounded-2xl text-xs mt-2 border border-[#14332B]">
                <span className="text-[#8CFF00] font-extrabold block mb-1">KEY PERSPECTIVE:</span>
                You may work on a small part of a much larger system. Understanding that larger system helps you understand why your work matters.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 03. VISION & VALUES */}
      <section id="values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Published Vision */}
        <div className="p-10 bg-[#061210] text-white rounded-3xl space-y-4 shadow-2xl border border-[#14332B]">
          <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block">
            ● PUBLISHED VISION
          </span>
          <blockquote className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
            "To be the world's largest energy transition company driving the future of energy."
          </blockquote>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            The company describes this ambition through energy-transition technology, infrastructure and platforms, with a stated goal of directly impacting 1 billion lives and reducing approximately 10 billion tonnes of CO₂e.
          </p>
          <div className="p-4 bg-[#0B1C18] rounded-xl border border-[#14332B] text-xs text-[#8CFF00]">
            These are company-level ambitions. As a new joiner, you do not need to carry the entire ambition on your shoulders. Your part is to understand the problem you are working on, do your work well, learn continuously, and contribute to the team around you.
          </div>
        </div>

        {/* Company Values */}
        <div className="space-y-6">
          <div className="border-b border-[#E2E4DC] pb-4">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
              ● OUR VALUES
            </span>
            <h2 className="text-3xl font-extrabold text-[#061210]">Values in Everyday Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PEOPLE FIRST */}
            <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                VALUE 01
              </span>
              <h3 className="text-2xl font-extrabold text-[#061210]">PEOPLE FIRST</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                People are at the core of what Esyasoft does, internally and externally.
              </p>
              <div className="pt-2 border-t border-[#E2E4DC]">
                <span className="text-[11px] font-extrabold text-[#061210] block mb-2 uppercase">In everyday work:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• Treat people with respect.</li>
                  <li>• Make space for questions.</li>
                  <li>• Help someone who is new to a problem.</li>
                  <li>• Listen before responding.</li>
                  <li>• Give feedback about the work, not the person.</li>
                </ul>
              </div>
            </div>

            {/* TECHNOLOGY EXCELLENCE */}
            <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                VALUE 02
              </span>
              <h3 className="text-2xl font-extrabold text-[#061210]">TECHNOLOGY EXCELLENCE</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                Innovation, quality products and continuous learning.
              </p>
              <div className="pt-2 border-t border-[#E2E4DC]">
                <span className="text-[11px] font-extrabold text-[#061210] block mb-2 uppercase">In everyday work:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• Understand before implementing.</li>
                  <li>• Prefer quality over shortcuts.</li>
                  <li>• Keep learning & test what you build.</li>
                  <li>• Document important decisions.</li>
                  <li>• Learn from reviews and feedback.</li>
                </ul>
              </div>
            </div>

            {/* DELIVERY EXCELLENCE */}
            <div className="p-8 bg-white border border-[#E2E4DC] rounded-3xl space-y-4 shadow-xs">
              <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                VALUE 03
              </span>
              <h3 className="text-2xl font-extrabold text-[#061210]">DELIVERY EXCELLENCE</h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                Agility, flexibility and continuous improvement.
              </p>
              <div className="pt-2 border-t border-[#E2E4DC]">
                <span className="text-[11px] font-extrabold text-[#061210] block mb-2 uppercase">In everyday work:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>• Communicate early when blocked.</li>
                  <li>• Be realistic about deliverables.</li>
                  <li>• Raise risks before surprises.</li>
                  <li>• Finish the loop instead of assuming.</li>
                  <li>• Learn from what went wrong.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04. HOW THE BUSINESS FITS TOGETHER & BUSINESS AREAS */}
      <section id="business-areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● ARCHITECTURE & PORTFOLIO
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">How the Business Fits Together</h2>
        </div>

        {/* Simplified Onboarding Model Diagram */}
        <div className="p-8 bg-[#061210] text-white rounded-3xl space-y-6 shadow-xl border border-[#14332B]">
          <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block">
            SIMPLIFIED ONBOARDING MODEL
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-extrabold">
            {['PHYSICAL WORLD', 'INFRASTRUCTURE & DEVICES', 'CONNECTIVITY & DATA', 'SOFTWARE PLATFORMS', 'ANALYTICS & AI', 'OPERATIONS & DECISIONS', 'REAL-WORLD OUTCOMES'].map((layer, idx, arr) => (
              <React.Fragment key={layer}>
                <div className="p-3 bg-[#0B1C18] border border-[#14332B] rounded-xl text-center flex-1 min-w-[140px]">
                  <span className="text-[#8CFF00] block text-[10px]">0{idx + 1}</span>
                  <span>{layer}</span>
                </div>
                {idx < arr.length - 1 && <span className="text-[#8CFF00] hidden lg:inline">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            A connected asset can produce data. Communications and IoT infrastructure can move that data. Software can store, manage and expose it. Analytics and AI can help turn it into insight. Utility and energy teams can use that information to make operational decisions.
          </p>
        </div>

        {/* Business Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#E2E4DC] rounded-2xl space-y-3">
            <h3 className="text-lg font-extrabold text-[#061210]">Smart Utility Solutions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esyasoft helps electricity, water and gas utilities modernize infrastructure through smart metering, AMI, IoT connectivity, data platforms and digital utility operations.
            </p>
            <span className="text-[11px] font-bold text-[#061210] block pt-2 border-t border-[#E2E4DC]">
              For a new joiner: Think about how a utility moves from physical infrastructure to data-driven operations.
            </span>
          </div>

          <div className="p-6 bg-white border border-[#E2E4DC] rounded-2xl space-y-3">
            <h3 className="text-lg font-extrabold text-[#061210]">Software, Analytics & AI</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Software, analytics and AI turn utility and infrastructure data into information that people can use for planning, monitoring, forecasting and operational decisions.
            </p>
            <span className="text-[11px] font-bold text-[#061210] block pt-2 border-t border-[#E2E4DC]">
              For a new joiner: Ask not only "What data do we have?" but also "What decision can this data help someone make?"
            </span>
          </div>

          <div className="p-6 bg-white border border-[#E2E4DC] rounded-2xl space-y-3">
            <h3 className="text-lg font-extrabold text-[#061210]">Energy as a Service</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esyasoft's public portfolio includes Energy as a Service capabilities focused on energy access, optimization, demand flexibility and managed energy solutions.
            </p>
            <span className="text-[11px] font-bold text-[#061210] block pt-2 border-t border-[#E2E4DC]">
              For a new joiner: The energy transition can also involve how energy is delivered and managed as a service.
            </span>
          </div>

          <div className="p-6 bg-white border border-[#E2E4DC] rounded-2xl space-y-3">
            <h3 className="text-lg font-extrabold text-[#061210]">Battery Energy Storage Systems</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Battery energy storage can help integrate renewable energy, manage peaks, support grid stability and improve resilience.
            </p>
            <span className="text-[11px] font-bold text-[#061210] block pt-2 border-t border-[#E2E4DC]">
              For a new joiner: Think of storage as a way of adding flexibility to an energy system.
            </span>
          </div>

          <div className="p-6 bg-white border border-[#E2E4DC] rounded-2xl space-y-3">
            <h3 className="text-lg font-extrabold text-[#061210]">e-Mobility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esyasoft's public portfolio includes EV charging infrastructure, charge-point management software, fleet electrification and mobility data.
            </p>
            <span className="text-[11px] font-bold text-[#061210] block pt-2 border-t border-[#E2E4DC]">
              For a new joiner: e-mobility connects energy infrastructure, software and transportation.
            </span>
          </div>
        </div>
      </section>

      {/* 05. METER TO DECISION & UTILITY WORLD */}
      <section id="meter-to-decision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● UTILITY SYSTEM VALUE CHAIN
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">Meter-to-Decision Workflow</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {[
            { step: '1. MEASURE', desc: 'A meter records consumption.' },
            { step: '2. CONNECT', desc: 'Infrastructure communicates info.' },
            { step: '3. COLLECT', desc: 'Data reaches storage systems.' },
            { step: '4. VALIDATE', desc: 'Data is checked for quality & gaps.' },
            { step: '5. ANALYSE', desc: 'AI/analytics identify patterns.' },
            { step: '6. DECIDE', desc: 'People decide what needs attention.' },
            { step: '7. ACT', desc: 'Operational action is taken.' }
          ].map((s, idx) => (
            <div key={idx} className="p-4 bg-[#061210] text-white border border-[#14332B] rounded-2xl space-y-1 text-xs">
              <span className="text-[#8CFF00] font-extrabold block text-[11px]">{s.step}</span>
              <p className="text-slate-300 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. CULTURE & HOW YOUR ROLE FITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-10 bg-white border border-[#E2E4DC] rounded-3xl space-y-8 shadow-xs">
          <div className="border-b border-[#E2E4DC] pb-4 space-y-2">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● CULTURE & CONTRIBUTION
            </span>
            <h2 className="text-3xl font-extrabold text-[#061210]">How Your Role Fits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-[#F4F5F0] rounded-2xl space-y-2">
              <span className="text-[#061210] font-extrabold block text-sm">1. ABOUT ME</span>
              <p className="text-slate-700">What am I responsible for? What do I need to learn? What does good work look like?</p>
            </div>

            <div className="p-6 bg-[#F4F5F0] rounded-2xl space-y-2">
              <span className="text-[#061210] font-extrabold block text-sm">2. ABOUT MY TEAM</span>
              <p className="text-slate-700">What does my team own? Who depends on our work? Who do we depend on?</p>
            </div>

            <div className="p-6 bg-[#F4F5F0] rounded-2xl space-y-2">
              <span className="text-[#061210] font-extrabold block text-sm">3. ABOUT THE PROBLEM</span>
              <p className="text-slate-700">Who uses what we build? What problem are we solving? What happens if the system does not work?</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
