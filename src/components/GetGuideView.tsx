import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  CheckSquare,
  Square,
  RotateCcw,
  BookOpen,
  Building2,
  Cpu,
  Zap,
  Compass,
  FileText,
  Lightbulb,
  Layers,
  BatteryCharging,
  Car
} from 'lucide-react';

const STORAGE_KEY_DOCS_CHECKLIST = 'esyasoft_crisp_new_joiner_checklist';
const STORAGE_KEY_PACKING_CHECKLIST = 'esyasoft_crisp_packing_checklist';
const STORAGE_KEY_DEV_CHECKLIST = 'esyasoft_crisp_dev_checklist';

interface TocSection {
  id: string;
  num: number;
  title: string;
  category: 'Overview' | 'Company' | 'Domain' | 'Products' | 'Program' | 'Engineering' | 'GCC & Travel' | 'Checklists';
}

const TOC_SECTIONS: TocSection[] = [
  { id: 'sec-1', num: 1, title: 'How to Use This Guide', category: 'Overview' },
  { id: 'sec-2', num: 2, title: 'Esyasoft at a Glance', category: 'Company' },
  { id: 'sec-3', num: 3, title: 'Story, Vision & Values', category: 'Company' },
  { id: 'sec-4', num: 4, title: 'How Esyasoft Creates Value', category: 'Company' },
  { id: 'sec-5', num: 5, title: 'Understand the Energy Transition', category: 'Domain' },
  { id: 'sec-6', num: 6, title: 'Smart Utilities (Electricity, Water & Gas)', category: 'Domain' },
  { id: 'sec-7', num: 7, title: 'Smart Metering & AMI Architecture', category: 'Domain' },
  { id: 'sec-8', num: 8, title: 'Meter-to-Decision Data Journey', category: 'Domain' },
  { id: 'sec-9', num: 9, title: 'Software, Analytics & AI', category: 'Products' },
  { id: 'sec-10', num: 10, title: 'Energy as a Service (EaaS)', category: 'Products' },
  { id: 'sec-11', num: 11, title: 'BESS (Battery Energy Storage)', category: 'Products' },
  { id: 'sec-12', num: 12, title: 'e-Mobility & EV Infrastructure', category: 'Products' },
  { id: 'sec-13', num: 13, title: 'Products & Technology Landscape', category: 'Products' },
  { id: 'sec-14', num: 14, title: 'Graduate Program Structure', category: 'Program' },
  { id: 'sec-15', num: 15, title: 'Working at Esyasoft & Teams', category: 'Program' },
  { id: 'sec-16', num: 16, title: 'Project & Engineering Practices', category: 'Engineering' },
  { id: 'sec-17', num: 17, title: 'Technology & Dev Environment', category: 'Engineering' },
  { id: 'sec-18', num: 18, title: 'Engineering Quality & Testing Mindset', category: 'Engineering' },
  { id: 'sec-19', num: 19, title: 'Documentation Practices', category: 'Engineering' },
  { id: 'sec-20', num: 20, title: 'Security, Privacy & Responsible AI', category: 'Engineering' },
  { id: 'sec-21', num: 21, title: 'Professional Conduct', category: 'Program' },
  { id: 'sec-22', num: 22, title: 'Learning, Feedback & Mentorship', category: 'Program' },
  { id: 'sec-23', num: 23, title: 'Communication Quick Reference', category: 'Engineering' },
  { id: 'sec-24', num: 24, title: 'Building Relationships', category: 'Program' },
  { id: 'sec-25', num: 25, title: 'Mangalore GCC, Accommodation & Travel', category: 'GCC & Travel' },
  { id: 'sec-26', num: 26, title: 'First 30 Days — Quick Reference', category: 'Checklists' },
  { id: 'sec-27', num: 27, title: '90-Day Self-Check Reflection', category: 'Checklists' },
  { id: 'sec-28', num: 28, title: 'Comprehensive Energy & Tech Glossary', category: 'Overview' },
  { id: 'sec-29', num: 29, title: 'Master New-Joiner Checklist', category: 'Checklists' },
  { id: 'sec-30', num: 30, title: 'Quick Reference — Who to Ask', category: 'Checklists' },
  { id: 'sec-31', num: 31, title: 'Final Onboarding Principle', category: 'Overview' },
  { id: 'sec-sources', num: 32, title: 'Primary Reference Sources', category: 'Overview' },
];

export const GetGuideView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');

  // Master New-Joiner Checklist State
  const [checkedMasterItems, setCheckedMasterItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DOCS_CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read master checklist', e);
    }
    return [0, 1, 2, 5, 9];
  });

  // Packing List Checklist State
  const [checkedPackingItems, setCheckedPackingItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PACKING_CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read packing checklist', e);
    }
    return ['toiletries', 'towels', 'repellent'];
  });

  // Dev Env Checklist State
  const [checkedDevItems, setCheckedDevItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DEV_CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read dev checklist', e);
    }
    return [0, 1, 2];
  });

  // Persist checklists
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DOCS_CHECKLIST, JSON.stringify(checkedMasterItems));
    } catch (e) { /* ignore */ }
  }, [checkedMasterItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PACKING_CHECKLIST, JSON.stringify(checkedPackingItems));
    } catch (e) { /* ignore */ }
  }, [checkedPackingItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DEV_CHECKLIST, JSON.stringify(checkedDevItems));
    } catch (e) { /* ignore */ }
  }, [checkedDevItems]);

  // Observer to highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = TOC_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPosition) {
          setActiveSectionId(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredToc = useMemo(() => {
    if (!searchTerm.trim()) return TOC_SECTIONS;
    const q = searchTerm.toLowerCase();
    return TOC_SECTIONS.filter(
      s => s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.num.toString().includes(q)
    );
  }, [searchTerm]);

  const toggleMasterItem = (idx: number) => {
    setCheckedMasterItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const togglePackingItem = (id: string) => {
    setCheckedPackingItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleDevItem = (idx: number) => {
    setCheckedDevItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const devChecklistText = [
    'Repository access granted & credentials securely stored',
    'Development tools installed (IDE, Node/Python/Git)',
    'Dependencies configured & local environment file created',
    'Application runs locally without errors',
    'Unit & integration tests can be executed in local environment',
    'Documentation located and reviewed',
    'Team workflow & git branching strategy understood'
  ];

  const packingItems = [
    { id: 'toiletries', label: 'Toiletries & Personal Hygiene Products' },
    { id: 'towels', label: 'Towels & Bath Linen' },
    { id: 'repellent', label: 'Mosquito Repellent' },
    { id: 'umbrella', label: 'Umbrella / Rain gear' },
    { id: 'medicines', label: 'Personal Medicines & First Aid' },
    { id: 'essentials', label: 'Personal Electronics, Chargers & Adapters' }
  ];

  const masterChecklistSections = [
    {
      title: 'Before Arrival',
      items: [
        { idx: 0, label: 'Confirm travel arrangements & tickets' },
        { idx: 1, label: 'Confirm accommodation & residential check-in details' },
        { idx: 2, label: 'Save official contacts (HR, Admin, Program Leads)' },
        { idx: 3, label: 'Review company overview & program documentation' },
        { idx: 4, label: 'Pack personal essentials & required documents' }
      ]
    },
    {
      title: 'Week 1 — Orientation & Setup',
      items: [
        { idx: 5, label: 'Understand company story, vision and values' },
        { idx: 6, label: 'Meet cohort trainees, mentors & program coordinators' },
        { idx: 7, label: 'Set up communication channels (Teams/Slack, Email)' },
        { idx: 8, label: 'Understand workplace policies & POSH guidelines' },
        { idx: 9, label: 'Locate essential facilities (Labs, Dining, Library)' }
      ]
    },
    {
      title: 'Domain Fundamentals',
      items: [
        { idx: 10, label: 'Understand energy value chain (Generation → Transmission → Distribution)' },
        { idx: 11, label: 'Understand smart metering and AMI architecture' },
        { idx: 12, label: 'Understand HES and MDMS platform roles' },
        { idx: 13, label: 'Understand BESS and EV charging ecosystem fundamentals' },
        { idx: 14, label: 'Understand one Esyasoft solution end-to-end' }
      ]
    },
    {
      title: 'Technology & Development',
      items: [
        { idx: 15, label: 'Set up development environment & IDE' },
        { idx: 16, label: 'Access code repositories & deployment tools' },
        { idx: 17, label: 'Understand team engineering workflow & PR process' },
        { idx: 18, label: 'Understand relevant product architecture' },
        { idx: 19, label: 'Build, run, or test a small module locally' },
        { idx: 20, label: 'Document learnings & technical findings' }
      ]
    },
    {
      title: 'Professional Practices',
      items: [
        { idx: 21, label: 'Proactively ask clarification questions' },
        { idx: 22, label: 'Communicate blockers early using structured updates' },
        { idx: 23, label: 'Participate actively in team reviews & standups' },
        { idx: 24, label: 'Request constructve feedback from leads & mentors' },
        { idx: 25, label: 'Connect with colleagues outside immediate functional unit' },
        { idx: 26, label: 'Maintain a personal technical & domain glossary' }
      ]
    },
    {
      title: 'Program Completion & Milestones',
      items: [
        { idx: 27, label: 'Complete assigned learning modules & rotations' },
        { idx: 28, label: 'Complete practical hands-on tasks & mini-projects' },
        { idx: 29, label: 'Demonstrate domain & engineering capability' },
        { idx: 30, label: 'Present/explain capstone project to evaluation panel' },
        { idx: 31, label: 'Reflect on learning outcomes & growth areas' },
        { idx: 32, label: 'Define target development goals for project placement' }
      ]
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT STICKY SIDEBAR: TABLE OF CONTENTS (LIGHT THEME) */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 bg-white border border-[#E5E5DC] rounded-2xl p-4 shadow-sm max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar">
          <div className="mb-4 pb-3 border-b border-[#E5E5DC]">
            <div className="flex items-center gap-2 mb-2 text-[#061513] font-bold text-sm uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Table of Contents
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search handbook..."
                className="w-full bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl pl-9 pr-3 py-2 text-xs text-[#061513] placeholder-gray-500 focus:outline-none focus:border-[#8CFF00] focus:ring-1 focus:ring-[#8CFF00]"
              />
            </div>
          </div>

          <nav className="space-y-1">
            {filteredToc.map(sec => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                    isActive
                      ? 'bg-[#8CFF00]/20 text-[#061513] font-bold border-l-4 border-[#8CFF00] shadow-xs'
                      : 'text-gray-600 hover:text-black hover:bg-[#F5F5F0]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-gray-400 mt-0.5 min-w-[20px]">
                    {sec.num < 10 ? `0${sec.num}` : sec.num}
                  </span>
                  <span className="truncate">{sec.title}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* MAIN CONTINUOUS LEARNING HANDBOOK (LIGHT THEME) */}
        <main className="lg:col-span-9 bg-white border border-[#E5E5DC] rounded-2xl p-6 sm:p-10 shadow-sm space-y-16 text-[#061513]">
          
          {/* HANDBOOK HEADER BANNER */}
          <div className="border-b border-[#E5E5DC] pb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061513] border border-[#8CFF00]/40 text-[#8CFF00] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5 text-[#8CFF00]" />
              OFFICIAL LEARNING HANDBOOK — ESYASOFT GET PROGRAM
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#061513] tracking-tight mb-2">
              ESYASOFT GET ONBOARDING GUIDE
            </h1>
            <p className="text-lg text-emerald-800 font-semibold mb-6">
              Understand the company. Understand the industry. Understand where you fit.
            </p>

            <div className="bg-[#F5F5F0] border-l-4 border-[#8CFF00] p-5 rounded-r-2xl space-y-3 text-sm text-[#061513]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#061513] mb-1">Welcome to Esyasoft Engineering!</p>
                  <p className="text-gray-700 leading-relaxed">
                    This guide is your primary reference handbook as a Graduate Engineer Trainee (GET). It explains how energy systems operate, how digital technologies transform traditional utilities, and how Esyasoft builds intelligence across the entire energy value chain.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#E5E5DC] text-xs text-gray-500 flex flex-wrap gap-4">
                <span><strong>Research cut-off:</strong> 24 September 2026</span>
                <span><strong>Target Audience:</strong> First-Time GETs & Engineers</span>
                <span><strong>Companion:</strong> 90-Day Journey Curriculum</span>
              </div>
            </div>
          </div>

          {/* SECTION 1: How to Use This Guide */}
          <section id="sec-1" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">01</span>
              <h2 className="text-2xl font-bold text-[#061513]">How to Use This Guide</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Navigating your onboarding can feel overwhelming without a clear map. This website combines four complementary tools to help you build domain knowledge, follow your structured learning path, and track your development.
              </p>
            </div>

            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm text-left rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/3">Resource</th>
                    <th className="p-3">Purpose & How to Use It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white">
                  <tr className="hover:bg-[#F9F9F4]">
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">GET Guide</td>
                    <td className="p-3">Comprehensive reference handbook covering company background, energy domain fundamentals, technology stacks, and workplace practices.</td>
                  </tr>
                  <tr className="hover:bg-[#F9F9F4]">
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">90-Day Journey</td>
                    <td className="p-3">Structured day-by-day learning schedule organized across 5 program phases (Orient, Discover, Build, Specialize, Contribute).</td>
                  </tr>
                  <tr className="hover:bg-[#F9F9F4]">
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">VOLT</td>
                    <td className="p-3">Interactive mascot and gamified core progression tracking your growth across 5 technical and domain cores.</td>
                  </tr>
                  <tr className="hover:bg-[#F9F9F4]">
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Official HR & Admin Communications</td>
                    <td className="p-3">Official company policies, batch schedules, travel itineraries, and HR instructions (always takes priority in administrative matters).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] text-xs text-gray-600">
              <strong>Precedence Note:</strong> When details in this reference guide differ from a direct, official instruction from HR, security, or your project lead, always follow the latest official instruction.
            </div>
          </section>

          {/* SECTION 2: Esyasoft at a Glance */}
          <section id="sec-2" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">02</span>
              <h2 className="text-2xl font-bold text-[#061513]">Esyasoft at a Glance</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                To excel in your engineering role, you must first understand the scale, vision, and operational domain of the company you are joining.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">Understand the Concept</h3>
              <p className="text-gray-700 leading-relaxed">
                Esyasoft is a <strong>global energy transition technology group</strong>. Energy transition refers to the global shift from legacy, fossil-fuel-based grid systems toward smart, renewable, distributed, and digitalized energy networks. Esyasoft sits at the intersection of physical grid infrastructure and modern software intelligence.
              </p>
            </div>

            <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-4">
              <h3 className="text-base font-bold text-[#061513] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-700" />
                Public Scale Snapshot
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#E5E5DC]">
                  <div className="text-2xl font-black text-[#061513]">50M+</div>
                  <div className="text-xs text-gray-600 font-medium">Connected smart endpoints deployed globally</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#E5E5DC]">
                  <div className="text-2xl font-black text-[#061513]">40+</div>
                  <div className="text-xs text-gray-600 font-medium">Major utility companies served worldwide</div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Core Business Pillars:</strong></p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                  <li><strong>Smart Utility Solutions:</strong> Electricity, Water, and Gas metering & grid automation.</li>
                  <li><strong>Software, Analytics & AI:</strong> HES, MDMS, Digital Twins, and predictive grid intelligence.</li>
                  <li><strong>Energy as a Service (EaaS):</strong> Managed energy contracts and performance-based deployments.</li>
                  <li><strong>Battery Energy Storage Systems (BESS):</strong> Grid-scale battery storage & energy arbitrage.</li>
                  <li><strong>e-Mobility:</strong> EV charging infrastructure & Charge Point Management Systems (CPMS).</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#061513] text-white p-5 rounded-xl border border-[#13332D] space-y-2">
              <div className="flex items-center gap-2 text-[#8CFF00] font-bold text-sm">
                <Layers className="w-4 h-4" />
                Mental Model: The Energy Intelligence Chain
              </div>
              <p className="text-xs text-gray-300 font-mono">
                Physical World → Connected Devices → Network → Data Management → Analytics & AI → Operational Action
              </p>
              <p className="text-xs text-gray-400">
                Every project at Esyasoft connects somewhere along this chain — turning physical grid events into intelligent decisions.
              </p>
            </div>
          </section>

          {/* SECTION 3: Story, Vision & Values */}
          <section id="sec-3" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">03</span>
              <h2 className="text-2xl font-bold text-[#061513]">Story, Vision & Values</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding Esyasoft's journey helps you appreciate the engineering legacy and corporate values that guide everyday software and hardware development.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Founded in <strong>2014</strong>, Esyasoft began with a vision to make energy systems smarter and more efficient. Over a decade of execution, the company has expanded from regional smart grid pilot projects into a global leader in energy transition technologies with CMMI Level 5 software maturity.
            </p>

            <h3 className="text-base font-bold text-[#061513]">Milestone Journey</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-24">Year</th>
                    <th className="p-3">Milestone Achieved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white">
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2014</td><td className="p-2.5">Esyasoft founded with focus on smart grid digitalization</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2015</td><td className="p-2.5">First major Smart Grid deployment executed in India</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2016</td><td className="p-2.5">Awarded Karnataka Startup Innovation Grant for energy tech</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2021</td><td className="p-2.5">Crossed 25M+ endpoints & major UAE AMI rollout</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2023</td><td className="p-2.5">Achieved CMMI Level 5 organizational process recognition</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">2025</td><td className="p-2.5">Launched Mangalore Global Capability Centre & expanded GET program</td></tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h4 className="text-[#061513] font-bold text-sm mb-1">People First</h4>
                <p className="text-xs text-gray-600">Invest in continuous learning, mentorship, and team growth.</p>
              </div>
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h4 className="text-emerald-800 font-bold text-sm mb-1">Technology Excellence</h4>
                <p className="text-xs text-gray-600">Uphold rigorous standards for code quality, scalability, and security.</p>
              </div>
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h4 className="text-[#061513] font-bold text-sm mb-1">Delivery Excellence</h4>
                <p className="text-xs text-gray-600">Deliver measurable outcomes and reliable systems for utility customers.</p>
              </div>
            </div>
          </section>

          {/* SECTION 4: How Esyasoft Creates Value */}
          <section id="sec-4" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">04</span>
              <h2 className="text-2xl font-bold text-[#061513]">How Esyasoft Creates Value</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                As a software engineer, UI designer, or business analyst, writing code is only part of your job. The most successful GETs understand how their feature solves real utility challenges like reducing electricity losses or preventing power outages.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">The 7-Step Business Value Cycle</h3>
              <div className="space-y-2">
                {[
                  { step: '1. Problem Identification', desc: 'Identify physical or financial utility bottlenecks (e.g., high AT&C power losses or unmetered water leaks).' },
                  { step: '2. Asset Connectivity', desc: 'Connect physical infrastructure using smart meters, IoT sensors, and communication gateways.' },
                  { step: '3. Telemetry Ingestion', desc: 'Securely transfer field measurements over cellular (NB-IoT/4G), RF Mesh, or LoRaWAN networks.' },
                  { step: '4. Platform Management', desc: 'Acquire and process raw telemetry using Head End Systems (HES) and Meter Data Management (MDMS).' },
                  { step: '5. Intelligence & AI', desc: 'Apply predictive analytics, machine learning, and digital twin models to detect anomalies.' },
                  { step: '6. Operational Action', desc: 'Trigger automated billing, dispatch field maintenance crews, or adjust grid load dynamically.' },
                  { step: '7. Outcome Measurement', desc: 'Quantify impact in terms of revenue protection, grid reliability, and carbon reduction.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F5F5F0] border border-[#E5E5DC] flex items-start gap-3">
                    <span className="font-mono font-bold text-xs text-emerald-800 w-36 flex-shrink-0">{item.step}</span>
                    <span className="text-xs text-gray-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: Understand the Energy Transition */}
          <section id="sec-5" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">05</span>
              <h2 className="text-2xl font-bold text-[#061513]">Understand the Energy Transition</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                The global energy grid is undergoing its biggest transformation in a century. Traditional one-way power grids are giving way to dynamic, multi-directional networks powered by renewables, batteries, and electric vehicles.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">Understand the Concept</h3>
              <p className="text-gray-700 leading-relaxed">
                Historically, electricity flowed in one direction: from a massive centralized coal or hydroelectric plant through high-voltage transmission lines down to homes and factories. Today, rooftop solar, battery energy storage, and electric vehicles mean energy is generated and stored everywhere. Utilities need smart software to manage this complex balancing act.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/3">Core Domain Term</th>
                    <th className="p-3">Plain English Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white">
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Generation</td><td className="p-3">Producing bulk electricity from fossil, nuclear, hydro, solar, or wind sources.</td></tr>
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Transmission</td><td className="p-3">Moving bulk electricity across long distances using high-voltage power lines.</td></tr>
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Distribution</td><td className="p-3">Delivering lower-voltage electricity to residential, commercial, and industrial end-users.</td></tr>
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">DER (Distributed Energy Resource)</td><td className="p-3">Small-scale generation or storage assets (like rooftop solar or local batteries) connected to the local distribution grid.</td></tr>
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Demand Response</td><td className="p-3">Incentivizing consumers or automated systems to reduce/shift power usage during peak grid hours.</td></tr>
                  <tr><td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Energy Arbitrage</td><td className="p-3">Storing cheap energy in batteries during off-peak hours and releasing it when grid prices or demand peak.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6: Smart Utilities */}
          <section id="sec-6" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">06</span>
              <h2 className="text-2xl font-bold text-[#061513]">Smart Utilities (Electricity, Water & Gas)</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Esyasoft provides digitalization across three major utility domains: Electricity, Water, and Gas. Each domain presents unique engineering and telemetry challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-3">
                <h3 className="text-[#061513] font-bold text-base flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" /> Electricity Grids
                </h3>
                <p className="text-xs text-gray-600">
                  Focuses on smart meters, outage management, transformer monitoring, and reducing Aggregate Technical & Commercial (AT&C) losses.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  <li>Real-time voltage & current monitoring</li>
                  <li>Tamper detection & anti-theft alarms</li>
                  <li>Automated meter reading & billing</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-3">
                <h3 className="text-[#061513] font-bold text-base flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-700" /> Water Networks
                </h3>
                <p className="text-xs text-gray-600">
                  Focuses on continuous consumption tracking and reducing Non-Revenue Water (NRW) caused by pipe leaks and illegal connections.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  <li>Acoustic leak detection algorithms</li>
                  <li>Flow rate & pressure sensor monitoring</li>
                  <li>Remote valve shut-off controls</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-3">
                <h3 className="text-[#061513] font-bold text-base flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-rose-600" /> Gas Distribution
                </h3>
                <p className="text-xs text-gray-600">
                  Focuses on safe gas metering, retrofitting legacy mechanical meters with smart pulse modules, and pressure regulation.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                  <li>Smart pulse retrofit indexers</li>
                  <li>Hazardous leak detection sensors</li>
                  <li>Low-power long-battery IoT modules</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 7: Smart Metering & AMI Architecture */}
          <section id="sec-7" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">07</span>
              <h2 className="text-2xl font-bold text-[#061513]">Smart Metering & AMI Architecture</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                AMI is the foundational backbone of modern utility digitalization. As a GET, you will frequently work with systems that interact with AMI data flows.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">What is AMI?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Advanced Metering Infrastructure (AMI)</strong> is an integrated system of smart meters, communication networks, and data management software that enables two-way communication between utilities and customer meters.
              </p>
            </div>

            <div className="bg-[#061513] text-white p-5 rounded-xl border border-[#13332D] space-y-3">
              <h4 className="text-[#8CFF00] font-bold text-sm">Step-by-Step AMI Architectural Flow</h4>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">1. Smart Meter</span>
                <span className="text-[#8CFF00]">→</span>
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">2. Network (Cellular/RF)</span>
                <span className="text-[#8CFF00]">→</span>
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">3. Gateway / DCU</span>
                <span className="text-[#8CFF00]">→</span>
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">4. HES</span>
                <span className="text-[#8CFF00]">→</span>
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">5. MDMS</span>
                <span className="text-[#8CFF00]">→</span>
                <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">6. Analytics & Action</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/3">AMI Layer Component</th>
                    <th className="p-3">Role & Functionality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Smart Meter</td>
                    <td className="p-3">Measures consumption in real-time, records power quality metrics (voltage, frequency), and executes remote connect/disconnect commands.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Communication Network</td>
                    <td className="p-3">Transfers telemetry using NB-IoT, 4G, GPRS, RF Mesh, or LoRaWAN protocols securely to central servers.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Gateway / DCU (Data Concentrator)</td>
                    <td className="p-3">Aggregates field data from dozens of neighborhood meters before securely relaying it over high-speed cellular links.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">Head End System (HES)</td>
                    <td className="p-3">The hardware-level software layer that manages protocol translation, device handshakes, and schedule-based data acquisition.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#061513] border-r border-[#E5E5DC]">MDMS (Meter Data Management System)</td>
                    <td className="p-3">Validates, cleanses, estimation-fills (VEE), and stores millions of meter readings so billing and analytics engines can consume them safely.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 8: Meter-to-Decision Data Journey */}
          <section id="sec-8" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">08</span>
              <h2 className="text-2xl font-bold text-[#061513]">Meter-to-Decision Data Journey</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Tracing a single meter reading from a customer's wall to a utility manager's dashboard will help you connect software engineering concepts (networking, databases, APIs) to physical energy domain operations.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">The Telemetry Lifecycle</h3>
              <ol className="space-y-2 list-decimal list-inside text-sm text-gray-800 bg-[#F5F5F0] p-5 rounded-xl border border-[#E5E5DC]">
                <li><strong>Event Measurement:</strong> The smart meter registers 1.5 kWh consumption or a sudden voltage dip event.</li>
                <li><strong>Packet Transmission:</strong> Data is encrypted and transmitted via DLMS/COSEM protocol over cellular NB-IoT network.</li>
                <li><strong>Field Ingestion:</strong> Local Gateway/DCU validates packet integrity and forwards it to the cloud.</li>
                <li><strong>HES Data Acquisition:</strong> Esyasoft HES receives the packet, translates device protocol, and logs telemetry.</li>
                <li><strong>MDMS Validation (VEE):</strong> MDMS runs Validation, Estimation, and Editing algorithms to catch missing or corrupted values.</li>
                <li><strong>AI & Analytics Engine:</strong> Machine learning models evaluate consumption patterns to flag potential power theft or transformer overload.</li>
                <li><strong>Operational Action:</strong> Billing engine generates invoice; dispatch portal alerts maintenance engineers if voltage anomaly persists.</li>
              </ol>
            </div>
          </section>

          {/* SECTION 9: Software, Analytics & AI */}
          <section id="sec-9" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">09</span>
              <h2 className="text-2xl font-bold text-[#061513]">Software, Analytics & AI</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Raw data alone is useless to a utility. Esyasoft's software suites transform billions of telemetry data points into actionable insights using artificial intelligence and digital twin models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513] text-sm">Digital Twins</h4>
                <p className="text-xs text-gray-600">Virtual software replicas of physical grid assets that simulate power loads and stress conditions in real time.</p>
              </div>
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513] text-sm">Demand Forecasting</h4>
                <p className="text-xs text-gray-600">AI models that predict power consumption hours and days ahead using weather, historical usage, and calendar patterns.</p>
              </div>
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513] text-sm">Energy Audit Tools</h4>
                <p className="text-xs text-gray-600">Automated accounting tools that compare power injected into a sub-station against power billed to find technical leakages.</p>
              </div>
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513] text-sm">Grid Analytics</h4>
                <p className="text-xs text-gray-600">Algorithms that identify abnormal meter bypasses, unmetered loads, and phase imbalances automatically.</p>
              </div>
            </div>
          </section>

          {/* SECTION 10: Energy as a Service */}
          <section id="sec-10" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">10</span>
              <h2 className="text-2xl font-bold text-[#061513]">Energy as a Service (EaaS)</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>Energy as a Service (EaaS)</strong> shifts the traditional business model from selling upfront hardware products to providing managed energy outcomes. Under an EaaS model, Esyasoft deploys, operates, and optimizes hardware, software, and renewable assets, allowing utilities to pay based on operational savings and performance metrics.
            </p>
          </section>

          {/* SECTION 11: BESS */}
          <section id="sec-11" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">11</span>
              <h2 className="text-2xl font-bold text-[#061513]">Battery Energy Storage Systems (BESS)</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Solar and wind energy are intermittent — the sun doesn't always shine and the wind doesn't always blow. BESS allows grid operators to store surplus clean energy and release it instantly when demand peaks.
              </p>
            </div>

            <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-[#061513] font-bold text-sm">
                <BatteryCharging className="w-5 h-5 text-emerald-700" />
                Key BESS Operational Applications
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-800">
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E5DC] font-semibold">Peak Shaving</div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E5DC] font-semibold">Frequency Regulation</div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E5DC] font-semibold">Energy Arbitrage</div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E5E5DC] font-semibold">Backup Resilience</div>
              </div>
            </div>
          </section>

          {/* SECTION 12: e-Mobility */}
          <section id="sec-12" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">12</span>
              <h2 className="text-2xl font-bold text-[#061513]">e-Mobility & EV Infrastructure</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                The electrification of transport introduces heavy new loads to distribution grids. Esyasoft's e-Mobility platforms connect EV chargers, driver payment apps, fleet management, and grid load balancers.
              </p>
            </div>

            <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-2">
              <h4 className="font-bold text-[#061513] text-sm flex items-center gap-2">
                <Car className="w-4 h-4 text-cyan-700" /> Charge Point Management Systems (CPMS)
              </h4>
              <p className="text-xs text-gray-700">
                Software platforms that monitor charger availability in real time, manage OCPP protocol sessions, handle billing transactions, and dynamically regulate charging speeds to prevent local grid overloads.
              </p>
            </div>
          </section>

          {/* SECTION 13: Products & Technology Landscape */}
          <section id="sec-13" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">13</span>
              <h2 className="text-2xl font-bold text-[#061513]">Products & Technology Landscape</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              As a GET, your work will touch various hardware devices, communication protocols, and cloud technologies.
            </p>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#061513]">Protocols & Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'DLMS/COSEM (Smart Meter Standard)', 'M-Bus (Wired/Wireless Metering)',
                  'LoRaWAN (Long-Range IoT)', 'MQTT (IoT Pub/Sub)', 'NB-IoT (Cellular IoT)',
                  'REST APIs', 'PostgreSQL / TimescaleDB', 'Docker & Kubernetes', 'React & TypeScript'
                ].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs border border-[#13332D]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 14: Graduate Program */}
          <section id="sec-14" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">14</span>
              <h2 className="text-2xl font-bold text-[#061513]">Graduate Program Structure</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The Esyasoft GET Program is designed to transform university graduates into domain-capable, production-ready engineers over 90 days.
            </p>

            <div className="p-4 bg-[#061513] text-white rounded-xl font-mono text-xs border border-[#13332D]">
              <span className="text-[#8CFF00]">Domain Knowledge → Hands-on Technical Practice → Guided Application → Capstone Contribution</span>
            </div>
          </section>

          {/* SECTION 15: Working at Esyasoft */}
          <section id="sec-15" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">15</span>
              <h2 className="text-2xl font-bold text-[#061513]">Working at Esyasoft & Teams</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Engineering at Esyasoft is highly cross-functional. You will collaborate with software developers, QA engineers, product managers, business analysts, IoT hardware specialists, and customer delivery leads.
            </p>

            <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] text-sm space-y-1">
              <p className="text-[#061513] font-bold">Mindset Shift for New GETs:</p>
              <p className="text-emerald-900 font-semibold italic">“Always understand what business or utility problem a feature solves, rather than only looking at what code to write.”</p>
            </div>
          </section>

          {/* SECTION 16: Project & Engineering Practices */}
          <section id="sec-16" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">16</span>
              <h2 className="text-2xl font-bold text-[#061513]">Project & Engineering Practices</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#061513]">Requirement Context Framework</h3>
                <div className="font-mono text-xs text-[#061513] bg-[#F5F5F0] p-3 rounded-lg border border-[#E5E5DC]">
                  Problem → User → Outcome → Constraints → Dependencies → Acceptance Criteria
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#061513]">Blocker Escalation Template</h3>
                <p className="text-xs text-gray-600">When stuck, communicate using this structured format:</p>
                <div className="font-mono text-xs text-[#061513] bg-[#F5F5F0] p-3 rounded-lg border border-[#E5E5DC]">
                  Context → What I tried → Current status → Blocker → Help needed → Next step
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 17: Technology & Dev Environment */}
          <section id="sec-17" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">17</span>
              <h2 className="text-2xl font-bold text-[#061513]">Technology & Dev Environment</h2>
            </div>

            <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-[#061513]">Interactive Workstation Setup Checklist</h3>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  {checkedDevItems.length} / {devChecklistText.length} Verified
                </span>
              </div>
              <div className="space-y-2">
                {devChecklistText.map((text, idx) => {
                  const isChecked = checkedDevItems.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleDevItem(idx)}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg bg-white border border-[#E5E5DC] hover:bg-gray-50 transition-colors"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-xs ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-rose-800 text-xs font-semibold">
              ⚠️ SECURITY RULE: Never place credentials, API keys, database passwords, or customer tokens directly in source code or Git commits.
            </div>
          </section>

          {/* SECTION 18: Engineering Quality */}
          <section id="sec-18" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">18</span>
              <h2 className="text-2xl font-bold text-[#061513]">Engineering Quality & Testing Mindset</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Utility software operates mission-critical infrastructure. A bug in meter data processing could lead to incorrect billing for millions of customers.
            </p>

            <div className="font-mono text-xs text-[#061513] bg-[#F5F5F0] p-3 rounded-lg border border-[#E5E5DC]">
              Happy Path → Invalid Input → Edge Cases → Network Disconnections → Integration Verification
            </div>
          </section>

          {/* SECTION 19: Documentation */}
          <section id="sec-19" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">19</span>
              <h2 className="text-2xl font-bold text-[#061513]">Documentation Practices</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Great engineers write clean documentation. Every repository or feature should include a README answering: What is this? Why does it exist? How do I set it up? What assumptions does it make?
            </p>
          </section>

          {/* SECTION 20: Security, Privacy & Responsible AI */}
          <section id="sec-20" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">20</span>
              <h2 className="text-2xl font-bold text-[#061513]">Security, Privacy & Responsible AI</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Responsible AI Guidelines</h3>
              <p className="text-gray-700 text-sm">
                When using AI assistance for coding or research, follow the 5-step rule:
              </p>
              <div className="font-mono text-xs text-[#061513] bg-[#F5F5F0] p-3 rounded-lg border border-[#E5E5DC] text-center">
                Generate → Inspect → Verify → Test → Own the Output
              </div>
            </div>
          </section>

          {/* SECTION 21: Professional Conduct */}
          <section id="sec-21" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">21</span>
              <h2 className="text-2xl font-bold text-[#061513]">Professional Conduct</h2>
            </div>

            <p className="text-gray-700 text-sm">
              Professional excellence relies on mutual respect, accountability, prompt communication, and adherence to company policies (including Information Security and POSH guidelines).
            </p>
          </section>

          {/* SECTION 22: Learning, Feedback & Mentorship */}
          <section id="sec-22" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">22</span>
              <h2 className="text-2xl font-bold text-[#061513]">Learning, Feedback & Mentorship</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h3 className="text-emerald-800 font-bold text-sm mb-1">1. I UNDERSTAND</h3>
                <p className="text-xs text-gray-600">Concepts you can confidently explain and teach to others.</p>
              </div>
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h3 className="text-amber-700 font-bold text-sm mb-1">2. I AM LEARNING</h3>
                <p className="text-xs text-gray-600">Concepts you partially grasp and are actively testing.</p>
              </div>
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] p-4 rounded-xl">
                <h3 className="text-cyan-700 font-bold text-sm mb-1">3. I NEED TO EXPLORE</h3>
                <p className="text-xs text-gray-600">Open questions and unfamiliar terms requiring research.</p>
              </div>
            </div>
          </section>

          {/* SECTION 23: Communication Quick Reference */}
          <section id="sec-23" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">23</span>
              <h2 className="text-2xl font-bold text-[#061513]">Communication Quick Reference</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-4 space-y-2">
                <h3 className="text-[#061513] font-bold text-sm">Daily Standup Status Update</h3>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li><strong>Completed:</strong> What was completed since yesterday.</li>
                  <li><strong>In Progress:</strong> Current active tasks.</li>
                  <li><strong>Blocked:</strong> Any impediments requiring assistance.</li>
                  <li><strong>Next:</strong> Planned work for today.</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-4 space-y-2">
                <h3 className="text-[#061513] font-bold text-sm">Asking for Technical Help</h3>
                <p className="font-mono text-xs text-[#061513]">
                  Context → Expected Result → Actual Error → What You Tried → Specific Help Needed
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 24: Building Relationships */}
          <section id="sec-24" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">24</span>
              <h2 className="text-2xl font-bold text-[#061513]">Building Relationships</h2>
            </div>

            <p className="text-gray-700 text-sm">
              Connect with engineers, testers, product leads, and trainers beyond your immediate pod to understand how the broader organization functions.
            </p>
          </section>

          {/* SECTION 25: Mangalore GCC */}
          <section id="sec-25" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">25</span>
              <h2 className="text-2xl font-bold text-[#061513]">Mangalore Global Capability Centre (GCC)</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                The Mangalore Global Capability Centre is Esyasoft's state-of-the-art training, residential, research, and capability development facility. Knowing what is provided and what to pack ensures a seamless, comfortable onboarding stay.
              </p>
            </div>

            {/* Sub-card 1: Provided Apartment Amenities */}
            <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-4">
              <h3 className="text-base font-bold text-[#061513] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-700" />
                Residential Accommodation Facilities (3 BHK / 4 BHK Shared Units)
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Trainees are housed in spacious 3 BHK & 4 BHK shared residential units. Room allocations are finalized upon arrival on September 6th (allocations are non-changeable as they are structured considering security, diversity, collaboration, and networking).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] space-y-2">
                  <h4 className="font-bold text-[#061513] text-sm flex items-center gap-1.5">
                    ⚡ Electrical Appliances
                  </h4>
                  <ul className="text-gray-700 space-y-1 list-disc list-inside">
                    <li>Air Conditioner & Geyser</li>
                    <li>Television & Living Room Fans</li>
                    <li>Refrigerator & Microwave/Oven</li>
                    <li>Electric Kettle & Toaster</li>
                    <li>Induction Cooktop & Exhaust Hood</li>
                    <li>Washing Machine, Iron & Ironing Stand</li>
                    <li>Aquaguard Water Purifier</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] space-y-2">
                  <h4 className="font-bold text-[#061513] text-sm flex items-center gap-1.5">
                    🍽️ Kitchenware & Utensils
                  </h4>
                  <ul className="text-gray-700 space-y-1 list-disc list-inside">
                    <li>Full & Quarter Plates, Bowls</li>
                    <li>Drinking Water Glasses & Tea Cups</li>
                    <li>Spoons, Tea Spoons, Knives, Scissors</li>
                    <li>Tea Strainer & Chopping Board</li>
                    <li>Saucepan, Frying Pan & Ladles</li>
                    <li>Serving & Saute Spoons</li>
                    <li>Dish Drying Rack</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E5DC] space-y-2">
                  <h4 className="font-bold text-[#061513] text-sm flex items-center gap-1.5">
                    🛋️ Furniture & Utilities
                  </h4>
                  <ul className="text-gray-700 space-y-1 list-disc list-inside">
                    <li>Mattress, Bedsheets, Quilt, Pillow</li>
                    <li>Study Table & Study Chair</li>
                    <li>Living Room Sofa & Teapoy</li>
                    <li>Balcony Table & Shoe Rack</li>
                    <li>Cloth Drying Rack</li>
                    <li>Bathroom Buckets, Mugs & Dustbins</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sub-card 2: Campus Recreation */}
            <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-3">
              <h3 className="text-base font-bold text-[#061513]">🏋️ Campus Recreation & Wellness</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded-lg border border-[#E5E5DC]">
                  <strong className="text-[#061513] block mb-1">Gymnasium</strong>
                  Located on the 5th floor of the residential capability centre area.
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E5DC]">
                  <strong className="text-[#061513] block mb-1">Indoor Sports</strong>
                  Table Tennis & Foosball equipment available on campus.
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E5DC]">
                  <strong className="text-[#061513] block mb-1">Library</strong>
                  Quiet study & domain reference reading room on campus.
                </div>
              </div>
            </div>

            {/* Sub-card 3: What to Bring (Interactive Packing List) */}
            <div className="bg-white border border-[#E5E5DC] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#061513]">🧳 Items NOT Provided (Interactive Trainee Packing Checklist)</h3>
                  <p className="text-xs text-gray-600">Check off items as you pack them for your Mangalore travel.</p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  {checkedPackingItems.length} / {packingItems.length} Packed
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {packingItems.map(item => {
                  const isChecked = checkedPackingItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => togglePackingItem(item.id)}
                      className="text-left flex items-center gap-3 p-2.5 rounded-lg bg-[#F5F5F0] border border-[#E5E5DC] hover:bg-gray-100 transition-colors"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-xs ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-card 4: Travel & Arrival Logistics */}
            <div className="bg-[#061513] text-white p-5 rounded-xl border border-[#13332D] space-y-3">
              <h3 className="text-[#8CFF00] font-bold text-sm">📍 Venue Location & Travel Logistics</h3>
              <p className="font-mono text-xs text-gray-200">
                Esyasoft Global Capability Center, Kolambe Proper, Karnataka 574142
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="bg-white/10 p-3 rounded-lg border border-white/15">
                  <strong>✈️ Mangalore Airport:</strong> ~10 km distance (Cab pickups coordinated for pre-booked arrivals).
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/15">
                  <strong>🚂 Central Railway Station:</strong> ~20 km distance (Cab pickups coordinated for train arrivals).
                </div>
              </div>
              <p className="text-xs text-gray-400 pt-1">
                Note: Private vehicle travelers should reach the training center by <strong>5:00 PM on arrival day</strong>.
              </p>
            </div>

            {/* Sub-card 5: Official Contact Directory */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/3">Assistance Needed</th>
                    <th className="p-3 border-r border-gray-700 w-1/3">Contact Person</th>
                    <th className="p-3">Phone & Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white text-xs">
                  <tr>
                    <td className="p-3 font-semibold text-[#061513] border-r border-[#E5E5DC]">Travel & Logistics (Pre-arrival)</td>
                    <td className="p-3 border-r border-[#E5E5DC]">Chiranth AR Hegde</td>
                    <td className="p-3 font-mono text-emerald-800">chiranth.hegde@esyasoft.com | +91 9535727038</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#061513] border-r border-[#E5E5DC]">Travel & Logistics (Pre-arrival)</td>
                    <td className="p-3 border-r border-[#E5E5DC]">Anneyappa P</td>
                    <td className="p-3 font-mono text-emerald-800">Anneyappa.p@esyasoft.com | +91 9035028788</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#061513] border-r border-[#E5E5DC]">HR Policies & Onboarding Queries</td>
                    <td className="p-3 border-r border-[#E5E5DC]">Prabhu D</td>
                    <td className="p-3 font-mono text-emerald-800">Prabhu.D@esyasoft.com | +91 9884307031</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 26: First 30 Days */}
          <section id="sec-26" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">26</span>
              <h2 className="text-2xl font-bold text-[#061513]">First 30 Days — Quick Reference</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513]">Company Domain</h4>
                <p className="text-gray-600">Explain Esyasoft's vision, core business areas, and value creation flow.</p>
              </div>
              <div className="bg-[#F5F5F0] p-4 rounded-xl border border-[#E5E5DC] space-y-1">
                <h4 className="font-bold text-[#061513]">Technical Stack</h4>
                <p className="text-gray-600">Understand meter telemetry flow, HES/MDMS roles, and local developer environment.</p>
              </div>
            </div>
          </section>

          {/* SECTION 27: 90-Day Self-Check */}
          <section id="sec-27" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">27</span>
              <h2 className="text-2xl font-bold text-[#061513]">90-Day Self-Check Reflection</h2>
            </div>

            <div className="space-y-2">
              {[
                { topic: 'Company', question: 'Can I explain Esyasoft clearly to an external engineer?' },
                { topic: 'Domain', question: 'Can I explain the business problem behind my current assigned feature?' },
                { topic: 'Technology', question: 'Can I contribute confidently to my pod\'s technical stack?' },
                { topic: 'Engineering', question: 'Can I build, test, debug, and explain my code independently?' },
                { topic: 'Collaboration', question: 'Can I work smoothly across functional teams?' },
                { topic: 'Ownership', question: 'Can I take a task from requirement through code review & delivery?' },
                { topic: 'Communication', question: 'Can I explain status, blockers, and decisions clearly?' },
                { topic: 'Growth', question: 'Do I know what capability I want to build next in my career?' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F5F5F0] border border-[#E5E5DC]">
                  <span className="font-bold text-xs text-[#061513] w-28">{item.topic}</span>
                  <span className="text-xs text-gray-800 flex-1">{item.question}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 28: Glossary */}
          <section id="sec-28" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">28</span>
              <h2 className="text-2xl font-bold text-[#061513]">Comprehensive Energy & Tech Glossary</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/4">Term</th>
                    <th className="p-3">Plain English Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white text-xs">
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">AMI</td><td className="p-2.5">Advanced Metering Infrastructure (connected meters + networks + software).</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">API</td><td className="p-2.5">Application Programming Interface.</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">BESS</td><td className="p-2.5">Battery Energy Storage System.</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">CPMS</td><td className="p-2.5">Charge Point Management System (EV charging software platform).</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">DER</td><td className="p-2.5">Distributed Energy Resource (local solar/battery generation).</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">DLMS/COSEM</td><td className="p-2.5">International standard communication protocols for smart meter data exchange.</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">HES</td><td className="p-2.5">Head End System (software that directly communicates with field meters).</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">MDMS</td><td className="p-2.5">Meter Data Management System (cleanses, validates, & manages meter telemetry).</td></tr>
                  <tr><td className="p-2.5 font-mono text-[#061513] font-bold border-r border-[#E5E5DC]">NRW</td><td className="p-2.5">Non-Revenue Water (water produced but lost to leaks/theft before billing).</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 29: Master New-Joiner Checklist */}
          <section id="sec-29" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">29</span>
                <h2 className="text-2xl font-bold text-[#061513]">Master New-Joiner Checklist</h2>
              </div>
              <button
                onClick={() => setCheckedMasterItems([])}
                className="text-xs text-gray-600 hover:text-black flex items-center gap-1 bg-[#F5F5F0] border border-[#E5E5DC] px-2.5 py-1.5 rounded-lg"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            <div className="bg-[#F5F5F0] border border-[#E5E5DC] rounded-xl p-5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#061513]">Overall Onboarding Progress</span>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  {checkedMasterItems.length} / 33 completed
                </span>
              </div>

              {masterChecklistSections.map((sec, secIdx) => (
                <div key={secIdx} className="space-y-2">
                  <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">{sec.title}</h3>
                  <div className="space-y-1.5">
                    {sec.items.map(item => {
                      const isChecked = checkedMasterItems.includes(item.idx);
                      return (
                        <button
                          key={item.idx}
                          onClick={() => toggleMasterItem(item.idx)}
                          className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg bg-white border border-[#E5E5DC] hover:bg-gray-50 transition-colors"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={`text-xs ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 30: Quick Reference — Who to Ask */}
          <section id="sec-30" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">30</span>
              <h2 className="text-2xl font-bold text-[#061513]">Quick Reference — Who to Ask</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5DC] text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#061513] text-white font-semibold">
                    <th className="p-3 border-r border-gray-700 w-1/2">Question Category</th>
                    <th className="p-3">Primary Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5DC] text-gray-800 bg-white text-xs">
                  <tr><td className="p-3 border-r border-[#E5E5DC] font-medium">Program Schedule & Rotations</td><td className="p-3 font-semibold text-emerald-800">Program / Training Coordinators</td></tr>
                  <tr><td className="p-3 border-r border-[#E5E5DC] font-medium">HR Policy & Leaves</td><td className="p-3 font-semibold text-emerald-800">HR Team</td></tr>
                  <tr><td className="p-3 border-r border-[#E5E5DC] font-medium">Travel & Residential Accommodation</td><td className="p-3 font-semibold text-emerald-800">Admin / Facilities Contact</td></tr>
                  <tr><td className="p-3 border-r border-[#E5E5DC] font-medium">Technical Setup & Code Reviews</td><td className="p-3 font-semibold text-emerald-800">Assigned Technical Lead / Pod Mentor</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 31: Final Principle */}
          <section id="sec-31" className="scroll-mt-24 space-y-6 border-b border-[#E5E5DC] pb-12">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold">31</span>
              <h2 className="text-2xl font-bold text-[#061513]">Final Onboarding Principle</h2>
            </div>

            <div className="p-5 bg-[#061513] text-white border border-[#13332D] rounded-xl text-center space-y-3">
              <p className="text-sm font-medium text-gray-200">
                The 90-Day Journey provides your structured growth path.
              </p>
              <p className="text-sm font-medium text-gray-200">
                The GET Guide provides your reference knowledge layer.
              </p>
              <p className="text-base font-bold text-[#8CFF00]">
                Your curiosity, proactive questions, and engineering rigor turn both into confident contribution.
              </p>
            </div>
          </section>

          {/* SECTION SOURCES */}
          <section id="sec-sources" className="scroll-mt-24 space-y-3 pt-4">
            <h2 className="text-lg font-bold text-[#061513] flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Primary Reference Sources
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">
              <li>• Esyasoft Corporate Documentation</li>
              <li>• Public Smart Grid & AMI Architecture Specifications</li>
              <li>• Supplied September 2026 GET Travel & GCC Guidance</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
};
