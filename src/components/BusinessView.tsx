import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { DATA_PIPELINE_STAGES, PRODUCT_LIBRARY, SMART_UTILITY_SECTORS } from '../data/businessData';
import { SourceLabel } from './SourceLabel';
import { Zap, Cpu, Battery, Activity, Filter } from 'lucide-react';

interface BusinessViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  initialSection?: string;
}

export const BusinessView: React.FC<BusinessViewProps> = () => {
  const [selectedPipelineStep, setSelectedPipelineStep] = useState<number>(1);
  const [productCategoryFilter, setProductCategoryFilter] = useState<string>('ALL');

  const activePipelineStage = DATA_PIPELINE_STAGES.find((s) => s.step === selectedPipelineStep) || DATA_PIPELINE_STAGES[0];

  const filteredProducts = productCategoryFilter === 'ALL'
    ? PRODUCT_LIBRARY
    : PRODUCT_LIBRARY.filter((p) => p.category === productCategoryFilter);

  const productCategories = ['ALL', 'Smart Metering & AMI', 'Grid Software & Analytics', 'Energy Storage & BESS', 'e-Mobility', 'IoT & Automation'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in text-slate-100">
      {/* Ecosystem Header */}
      <div className="border-b border-[#162E21] pb-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / OUR BUSINESS
          </span>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
          UNDERSTAND THE ENERGY SYSTEM
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          How Esyasoft maps smart grid software, meter data pipelines, AI analytics, battery storage, and e-Mobility across the energy value chain.
        </p>

        {/* Energy Value Chain Header Bar */}
        <div className="p-4 bg-[#07110D] border border-[#162E21] rounded-xl font-mono text-xs flex flex-wrap items-center justify-between gap-2">
          <span className="text-slate-400 font-bold uppercase tracking-wider">ENERGY VALUE CHAIN:</span>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            {['ENERGY', 'GENERATE', 'STORE', 'DISTRIBUTE', 'MEASURE', 'MANAGE', 'ANALYSE', 'OPTIMISE'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-[#00FF66] border border-[#00FF66]/30 font-bold">
                  {step}
                </span>
                {idx < arr.length - 1 && <span className="text-slate-500">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-Section 1: SMART UTILITY SOLUTIONS (Electricity, Water, Gas) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">SMART UTILITY SOLUTIONS</h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {SMART_UTILITY_SECTORS.map((sector) => (
            <div key={sector.id} className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                  <span className="text-sm font-bold text-[#00FF66]">{sector.name}</span>
                  <Zap className="w-4 h-4 text-[#00FF66]" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">WHAT IS IT?</span>
                  <p className="text-xs text-white font-sans mt-0.5">{sector.whatIsIt}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">PROBLEM SOLVED</span>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">{sector.problemSolved}</p>
                </div>
                <div>
                  <span className="text-[10px] text-teal-400 block font-bold uppercase">WHERE ESYASOFT FITS</span>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">{sector.esyasoftRole}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#162E21] flex flex-wrap gap-1">
                {sector.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-[10px] text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 2: FOLLOW THE DATA (Signature Interactive Pipeline) */}
      <section id="follow-the-data" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#00FF66]" />
            <span>FOLLOW THE DATA (SMART METER → ACTION)</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <p className="text-xs text-slate-300 font-sans">
          Click any stage below to follow how meter telemetry transforms into actionable operational decisions across Esyasoft's technology stack.
        </p>

        {/* Interactive Pipeline Sequence */}
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 font-mono text-xs">
          {DATA_PIPELINE_STAGES.map((stage) => {
            const isSelected = selectedPipelineStep === stage.step;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedPipelineStep(stage.step)}
                className={`p-2.5 rounded-lg border transition-all text-center flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-[#00FF66] text-[#050807] border-[#00FF66] font-bold shadow-[0_0_15px_rgba(0,255,102,0.4)]'
                    : 'bg-[#07110D] text-slate-300 border-[#162E21] hover:border-[#00FF66]/40'
                }`}
              >
                <span className={`text-[10px] px-1.5 rounded ${isSelected ? 'bg-[#050807] text-[#00FF66]' : 'bg-black/40 text-slate-400'}`}>
                  0{stage.step}
                </span>
                <span className="text-[11px] font-bold leading-tight">{stage.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pipeline Stage Details Card */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#00FF66]/20 text-[#00FF66] font-bold">
                STAGE 0{activePipelineStage.step}
              </span>
              <h3 className="text-base font-bold text-white uppercase">{activePipelineStage.name}</h3>
            </div>
            <SourceLabel type="COMPANY CONTEXT" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">STAGE OVERVIEW</span>
              <p className="text-slate-200 leading-relaxed">{activePipelineStage.description}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#00FF66] uppercase block mb-1">ESYASOFT CAPABILITY</span>
              <p className="text-emerald-300 leading-relaxed font-mono">{activePipelineStage.esyasoftCapability}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-teal-400 uppercase block mb-1">TECHNICAL SPECIFICATIONS</span>
              <p className="text-slate-300 leading-relaxed font-mono">{activePipelineStage.technicalDetails}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: SOFTWARE, ANALYTICS & AI CAPABILITY MAP */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">SOFTWARE, ANALYTICS & AI CAPABILITY MAP</h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-6 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">1. METER DATA</span>
              <span className="text-slate-400 text-[11px]">Interval time-series</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">2. GRID ANALYTICS</span>
              <span className="text-slate-400 text-[11px]">Transformer stress</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">3. FORECASTING</span>
              <span className="text-slate-400 text-[11px]">Day-ahead demand</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">4. AI / ML ENGINE</span>
              <span className="text-slate-400 text-[11px]">Theft & anomaly AI</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">5. INTELLIGENCE</span>
              <span className="text-slate-400 text-[11px]">Operational dashboards</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-emerald-400 font-bold text-sm">
            <span>INSIGHT</span>
            <span>→</span>
            <span>DECISION</span>
            <span>→</span>
            <span>ACTION</span>
          </div>
        </div>
      </section>

      {/* Sub-Section 4: ENERGY AS A SERVICE & BESS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {/* EaaS */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
            <h3 className="text-base font-bold text-[#00FF66]">ENERGY AS A SERVICE (EaaS)</h3>
            <SourceLabel type="COMPANY CONTEXT" />
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            EaaS enables commercial and utility customers to access renewable generation, storage, and smart grid software via a service model without heavy upfront capital investment.
          </p>
          <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg text-emerald-300">
            <strong>Key Relationship:</strong> RENEWABLES + STORAGE + ENERGY MANAGEMENT + DATA + DEMAND FLEXIBILITY = Energy as a Service.
          </div>
        </div>

        {/* BESS */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
            <h3 className="text-base font-bold text-teal-400">BATTERY ENERGY STORAGE (BESS)</h3>
            <Battery className="w-4 h-4 text-teal-400" />
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            BESS stores solar/wind energy during peak generation hours and dispatches it during high demand to stabilize frequency and prevent grid overload.
          </p>
          <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg text-teal-300">
            <strong>Esyasoft Support:</strong> Smart BESS Controllers for peak shaving, microgrid control, and utility battery management.
          </div>
        </div>
      </section>

      {/* Sub-Section 5: PRODUCTS & TECHNOLOGY (Filterable Library) */}
      <section id="products" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#162E21] pb-3">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#00FF66]" />
            <span>PRODUCTS & TECHNOLOGY LIBRARY</span>
          </h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setProductCategoryFilter(cat)}
              className={`px-3 py-1 rounded whitespace-nowrap transition-all ${
                productCategoryFilter === cat
                  ? 'bg-[#00FF66] text-[#050807] font-bold'
                  : 'bg-[#07110D] text-slate-300 border border-[#162E21] hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                <span className="text-sm font-bold text-white">{prod.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 text-[#00FF66] border border-[#00FF66]/30">
                  {prod.category}
                </span>
              </div>
              <div className="space-y-2 text-xs font-sans">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">WHAT IS IT?</span>
                  <p className="text-slate-200">{prod.whatIsIt}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">PROBLEM SOLVED</span>
                  <p className="text-slate-300">{prod.whatProblemItSolves}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-teal-400 uppercase block">WHERE IT FITS</span>
                  <p className="text-slate-300 font-mono">{prod.whereItFits}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#162E21] flex flex-wrap gap-1">
                {prod.relatedTechnology.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-black/60 text-[10px] text-slate-400 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
