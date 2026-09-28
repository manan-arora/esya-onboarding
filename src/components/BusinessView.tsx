import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { DATA_PIPELINE_STAGES, PRODUCT_LIBRARY, SMART_UTILITY_SECTORS } from '../data/businessData';
import { Zap } from 'lucide-react';

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
    <div className="space-y-20 pb-20 font-sans text-[#061210]">
      
      {/* 01. EDITORIAL HEADER & VALUE CHAIN ROUTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● THE BUSINESS ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            The Energy Ecosystem.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Understand how Esyasoft connects smart grid hardware, meter data pipelines, enterprise MDMS, AI loss reduction, and clean energy storage.
          </p>

          {/* Connected Energy Value Chain Ribbon */}
          <div className="pt-4">
            <div className="p-4 bg-[#061210] text-white rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg">
              <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest">
                ENERGY VALUE CHAIN:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
                {['GENERATE', 'STORE', 'DISTRIBUTE', 'MEASURE', 'MANAGE', 'ANALYSE', 'OPTIMISE'].map((step, idx, arr) => (
                  <React.Fragment key={step}>
                    <span className="px-3 py-1 rounded-full bg-[#0B1C18] border border-[#14332B] text-white">
                      {step}
                    </span>
                    {idx < arr.length - 1 && <span className="text-[#8CFF00]">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. SMART UTILITY SECTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● UTILITY DOMAINS
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            Power, Water & Gas Utility Software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SMART_UTILITY_SECTORS.map((sector) => (
            <div key={sector.id} className="p-8 bg-white border border-[#E2E4DC] hover:border-[#061210] rounded-3xl space-y-6 flex flex-col justify-between shadow-xs transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E4DC] pb-3">
                  <h3 className="text-xl font-extrabold text-[#061210]">{sector.name}</h3>
                  <Zap className="w-5 h-5 text-[#061210]" />
                </div>
                
                <div>
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-1">
                    PRIMARY SOLUTION
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{sector.whatIsIt}</p>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
                    ESYASOFT CAPABILITY
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-semibold">{sector.esyasoftRole}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E4DC] flex flex-wrap gap-1.5">
                {sector.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-[#F4F5F0] text-[#061210] font-extrabold text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. INTERACTIVE DATA PIPELINE (Dark Feature Section #061210) */}
      <section id="follow-the-data" className="bg-[#061210] text-white py-20 border-y border-[#14332B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-[#14332B] pb-4">
            <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block mb-1">
              ● DATA PIPELINE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Follow the Meter Data.
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              From physical meter sensors to high-level executive insights, see how data moves across Esyasoft's technology stack.
            </p>
          </div>

          {/* Interactive Pipeline Step Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {DATA_PIPELINE_STAGES.map((s) => {
              const isSelected = selectedPipelineStep === s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setSelectedPipelineStep(s.step)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#8CFF00] text-[#061210] border-[#8CFF00] font-extrabold shadow-lg scale-105'
                      : 'bg-[#0B1C18] text-slate-300 border-[#14332B] hover:border-slate-500'
                  }`}
                >
                  <span className="text-[10px] uppercase font-extrabold tracking-widest block mb-1">
                    STEP 0{s.step}
                  </span>
                  <h3 className="text-xs font-extrabold uppercase truncate">{s.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Active Pipeline Stage Detail Box */}
          <div className="p-8 bg-[#0B1C18] border border-[#14332B] rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#14332B] pb-4 gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#8CFF00] text-[#061210] font-extrabold text-xs">
                  STEP 0{activePipelineStage.step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activePipelineStage.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
              <div className="space-y-3">
                <span className="text-slate-400 uppercase font-extrabold tracking-wider block">STAGE OVERVIEW:</span>
                <p className="text-slate-200 leading-relaxed text-sm">{activePipelineStage.description}</p>
                <div className="pt-2">
                  <span className="text-[#8CFF00] font-extrabold block mb-1">ESYASOFT CAPABILITY:</span>
                  <p className="text-slate-300 leading-relaxed">{activePipelineStage.esyasoftCapability}</p>
                </div>
              </div>

              <div className="p-5 bg-[#061210] rounded-2xl border border-[#14332B] space-y-3">
                <span className="text-[#8CFF00] font-extrabold uppercase tracking-wider block">
                  TECHNICAL DETAILS:
                </span>
                <p className="text-slate-300 leading-relaxed">{activePipelineStage.technicalDetails}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 04. PRODUCT SUITE CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E4DC] pb-4">
          <div>
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
              ● PRODUCT SUITE CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061210]">
              Esyasoft Product Portfolio
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setProductCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  productCategoryFilter === cat
                    ? 'bg-[#061210] text-[#8CFF00]'
                    : 'bg-[#E7E9E0] text-slate-700 hover:bg-[#DDE0D4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="p-6 bg-white border border-[#E2E4DC] hover:border-[#061210] rounded-3xl space-y-4 shadow-xs transition-all">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#061210] text-[#8CFF00] font-extrabold text-[10px] uppercase">
                  {prod.category}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#061210]">{prod.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{prod.whatIsIt}</p>
              <div className="pt-3 border-t border-[#E2E4DC] text-[11px] text-slate-500 font-semibold">
                Fits: {prod.whereItFits}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
