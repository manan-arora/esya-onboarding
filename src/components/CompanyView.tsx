import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { COMPANY_VALUES } from '../data/onboardingData';
import { SourceLabel } from './SourceLabel';
import { Globe, MapPin, Building } from 'lucide-react';

interface CompanyViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
}

export const CompanyView: React.FC<CompanyViewProps> = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('bengaluru');

  const locations = [
    {
      id: 'bengaluru',
      name: 'Bengaluru (Corporate HQ)',
      country: 'India',
      details: 'Group Corporate Office & Core Product Engineering hub.',
      isGCC: false
    },
    {
      id: 'mangalore',
      name: 'Mangalore (Global Delivery Center)',
      country: 'India',
      details: 'Global Capability Center (GCC) & Delivery Hub.',
      isGCC: true
    },
    {
      id: 'noida',
      name: 'Noida / NCR',
      country: 'India',
      details: 'Regional Office & Smart Grid Project Operations.',
      isGCC: false
    },
    {
      id: 'bhopal',
      name: 'Bhopal / Central India',
      country: 'India',
      details: 'Smart Metering & Field Execution Office.',
      isGCC: false
    },
    {
      id: 'international',
      name: 'UAE & Global Operations',
      country: 'Middle East & Americas',
      details: 'International business units and utility partnership hubs.',
      isGCC: false
    }
  ];

  const storyMilestones = [
    { year: '2014-2016', event: 'Founding & Smart Metering Pioneer', desc: 'Established focused on smart grid communications and utility software solutions.' },
    { year: '2017-2019', event: 'Enterprise MDMS & HES Scale', desc: 'Deployed multi-million endpoint Meter Data Management Systems for state discoms.' },
    { year: '2020-2022', event: 'AI & Analytics Expansion', desc: 'Integrated machine learning algorithms for theft detection, transformer health, and load forecasting.' },
    { year: '2023-2025', event: 'Global Capability & Clean Energy', desc: 'Established Mangalore GCC, expanded into BESS, e-Mobility, and Energy as a Service.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in text-slate-100">
      {/* Page Header */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / COMPANY
          </span>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          WHO WE ARE & OUR PURPOSE
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          An overview of Esyasoft's journey, core purpose, company values, life at work, and global footprint from an employee's perspective.
        </p>
      </div>

      {/* Sub-Section 1: WHO WE ARE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">WHO WE ARE</h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 leading-relaxed font-sans text-sm text-slate-200">
          <p>
            <strong className="text-white">Esyasoft Technologies</strong> is a pioneer in enabling global energy transitions for electric, water, and gas utilities. We design, build, and deploy smart grid hardware, high-throughput software (HES, MDMS), AI analytics, and clean energy solutions (BESS, e-Mobility).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">ENERGY TRANSITION</span>
              <span className="text-slate-400 text-[11px]">Decarbonizing grids</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">UTILITY SOFTWARE</span>
              <span className="text-slate-400 text-[11px]">HES & Cloud MDMS</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">AI & ANALYTICS</span>
              <span className="text-slate-400 text-[11px]">Loss & load AI</span>
            </div>
            <div className="p-3 bg-[#050807] border border-[#162E21] rounded-lg">
              <span className="text-[#00FF66] font-bold block">CLEAN ENERGY</span>
              <span className="text-slate-400 text-[11px]">BESS & e-Mobility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 2: VISION & PURPOSE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">VISION & PURPOSE</h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-3">
            <span className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-wider block">
              OFFICIAL COMPANY VISION
            </span>
            <blockquote className="text-lg font-bold text-white font-serif italic border-l-2 border-[#00FF66] pl-4 py-1">
              "To empower global utilities with intelligent, sustainable, and resilient technology solutions that accelerate the clean energy transition."
            </blockquote>
          </div>

          <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                WHAT THIS MEANS FOR EMPLOYEES
              </span>
              <SourceLabel type="ONBOARDING GUIDANCE" />
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Your daily engineering, delivery, or support efforts directly impact how power and water are managed for millions of people. At Esyasoft, every line of code or field deployment contributes to reduced energy loss and a greener grid.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: OUR VALUES (OFFICIAL + WHAT IT LOOKS LIKE AT WORK) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">OUR CORE VALUES</h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {COMPANY_VALUES.map((val) => (
            <div key={val.id} className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                <span className="text-sm font-bold text-[#00FF66]">{val.name}</span>
                <SourceLabel type="OFFICIAL" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">OFFICIAL VALUE</span>
                <p className="text-xs text-white font-sans mt-0.5">{val.officialStatement}</p>
              </div>
              <div className="pt-2 border-t border-[#162E21]">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[10px] text-teal-400 font-bold uppercase">WHAT THIS LOOKS LIKE AT WORK</span>
                  <SourceLabel type="ONBOARDING GUIDANCE" />
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {val.whatItLooksLikeAtWork}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 4: OUR STORY TIMELINE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">OUR STORY & GROWTH</h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {storyMilestones.map((m, idx) => (
            <div key={idx} className="p-4 bg-[#07110D] border border-[#162E21] rounded-xl space-y-2">
              <span className="text-xs font-bold text-[#00FF66]">{m.year}</span>
              <h3 className="text-sm font-bold text-white">{m.event}</h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 5: GLOBAL PRESENCE & LOCATIONS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#00FF66]" />
            <span>GLOBAL PRESENCE & LOCATIONS</span>
          </h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="space-y-2">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                  selectedLocation === loc.id
                    ? 'bg-[#00FF66]/15 text-[#00FF66] border-[#00FF66]'
                    : 'bg-[#07110D] text-slate-300 border-[#162E21] hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00FF66]" />
                  <span>{loc.name}</span>
                </div>
                {loc.isGCC && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    GCC
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="md:col-span-2 p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
            {(() => {
              const activeLoc = locations.find((l) => l.id === selectedLocation) || locations[0];
              return (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00FF66]" />
                      <span>{activeLoc.name}</span>
                    </h3>
                    <span className="text-xs text-slate-400">{activeLoc.country}</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">{activeLoc.details}</p>
                  {activeLoc.isGCC && (
                    <div className="p-3 bg-teal-950/30 border border-teal-800/40 rounded-lg text-xs text-teal-200 font-sans">
                      <strong>Note for New Joiners:</strong> Mangalore is Esyasoft's primary Global Capability Center (GCC) for software engineering and delivery. General workplace policy applies equally across all office locations.
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
};
