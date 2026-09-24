import { useState, useEffect } from 'react';
import {
  FileText,
  Search,
  CheckSquare,
  Square,
  RotateCcw,
  ExternalLink,
  Info,
  Bookmark
} from 'lucide-react';

const STORAGE_KEY_DOCS_CHECKLIST = 'esyasoft_docs_new_joiner_checklist';

export const DocsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('sec-1');
  const [checkedItems, setCheckedItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DOCS_CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read docs checklist from localStorage', e);
    }
    return [0, 1]; // Default initial baseline
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DOCS_CHECKLIST, JSON.stringify(checkedItems));
    } catch (e) {
      // ignore
    }
  }, [checkedItems]);

  const toggleChecklist = (idx: number) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter(i => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  const resetChecklist = () => {
    setCheckedItems([]);
  };

  const sectionsList = [
    { id: 'sec-1', title: '1. Welcome to Esyasoft' },
    { id: 'sec-2', title: '2. Esyasoft at a Glance' },
    { id: 'sec-3', title: '3. The Story & Milestones' },
    { id: 'sec-4', title: '4. Vision & Core Values' },
    { id: 'sec-5', title: '5. How Esyasoft Creates Value' },
    { id: 'sec-6', title: '6. The Energy Transition' },
    { id: 'sec-7', title: '7. Smart Utilities' },
    { id: 'sec-8', title: '8. Smart Metering & AMI' },
    { id: 'sec-9', title: '9. Meter-to-Decision Data Journey' },
    { id: 'sec-10', title: '10. Software, Analytics & AI' },
    { id: 'sec-11', title: '11. Energy as a Service' },
    { id: 'sec-12', title: '12. Battery Energy Storage Systems (BESS)' },
    { id: 'sec-13', title: '13. e-Mobility' },
    { id: 'sec-14', title: '14. Products & Connected Infrastructure' },
    { id: 'sec-15', title: '15. Portfolio & Ecosystem' },
    { id: 'sec-16', title: '16. Global Footprint' },
    { id: 'sec-17', title: '17. Esyasoft Graduate Program' },
    { id: 'sec-18', title: '18. Mangalore Global Capability Centre' },
    { id: 'sec-19', title: '19. Life at Esyasoft' },
    { id: 'sec-20', title: '20. Practical GET Expectations' },
    { id: 'sec-21', title: '21. First 30 Days Companion Map' },
    { id: 'sec-22', title: '22. Glossary' },
    { id: 'sec-23', title: '23. New-Joiner Checklist' },
    { id: 'sec-24', title: '24. Sources & References' }
  ];

  const newJoinerChecklistItems = [
    'Read the company overview and explain Esyasoft in your own words.',
    'Know the five public business areas.',
    'Understand the electricity value chain from generation to customer.',
    'Understand smart metering, AMI, HES and MDMS at a high level.',
    'Trace a meter reading from device to useful operational insight.',
    'Read at least one Esyasoft case study and identify problem, solution and outcome.',
    'Understand where your role sits in the product/engineering lifecycle.',
    'Know the practical details of your training location and accommodation.',
    'Know who to contact for official HR, travel or program questions.',
    'Set up your development environment and understand your team\'s workflow.',
    'Introduce yourself to people outside your immediate team.',
    'Keep a personal glossary of unfamiliar domain and technical terms.',
    'Write down three questions about the business you still cannot answer.',
    'At the end of the first month, explain one Esyasoft solution end-to-end to another new joiner.'
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#F5F5F0] text-[#061513]">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8CFF00]/15 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#071B18]/10 blur-3xl" />
      </div>

      {/* Docs Header Banner */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 pt-10 pb-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold tracking-widest uppercase">
              <FileText className="w-3.5 h-3.5" />
              OFFICIAL ONBOARDING HANDBOOK
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#061513] font-sans leading-none">
              ESYASOFT GET ONBOARDING GUIDE
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-700">
              Understand the company. Understand the industry. Understand where you fit.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search guide topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono font-medium focus:ring-2 focus:ring-[#061513] outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Welcome Notice Card */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed font-sans">
            <strong className="text-[#061513] font-bold">WELCOME TO ESYASOFT:</strong> This handbook is the independent company-and-program reference for Graduate Engineer Trainees. It is separate from the BUILD VOLT challenge tracker and Core Unlocks. Use it as a reference throughout onboarding and beyond. <span className="font-mono text-[10px] text-slate-500 font-bold block mt-1">Research cut-off: 24 September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Layout: Sticky Sidebar Navigation + Content Reader */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left 4 Columns: Sticky Section Sidebar */}
        <div className="lg:col-span-4 sticky top-24 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-mono font-bold text-[#061513] uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                TABLE OF CONTENTS
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">24 SECTIONS</span>
            </div>

            <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1 text-xs font-mono">
              {sectionsList.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-xl transition text-left truncate ${
                    activeSection === sec.id
                      ? 'bg-[#061513] text-[#8CFF00] font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right 8 Columns: Complete Guide Content */}
        <div className="lg:col-span-8 space-y-12 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-slate-800 text-sm">

          {/* Section 1 */}
          <section id="sec-1" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">1. Welcome to Esyasoft</h2>
            <p>
              Esyasoft describes itself as a global energy transition technology group. Its public positioning spans smart utilities, software/analytics/AI, Energy as a Service, battery energy storage systems and e-mobility, across electricity, water and gas utilities and related energy-transition services.
            </p>
            <p>
              For a new engineer, the important idea is that Esyasoft is not simply a software company and not simply a metering company. Its public portfolio combines physical infrastructure, connected devices, digital platforms, data, analytics, AI and energy services.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1 border-l-4 border-[#8CFF00]">
              <span className="text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-wider">THE SIMPLE MENTAL MODEL</span>
              <p className="text-xs text-slate-200 font-mono">
                Physical world → connected infrastructure → data → software → intelligence → operational action. Esyasoft's portfolio covers multiple layers of this chain.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">2. Esyasoft at a Glance</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#061513] text-[#8CFF00] font-mono uppercase">
                    <th className="p-3">Publicly stated fact</th>
                    <th className="p-3">Current public information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-3 font-bold">Positioning</td><td className="p-3">Global energy transition technology group.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-bold">Connected endpoints</td><td className="p-3">50M+ on corporate homepage.</td></tr>
                  <tr><td className="p-3 font-bold">Utilities served</td><td className="p-3">40+ on corporate homepage.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-bold">Business areas</td><td className="p-3">Smart Utility Solutions; Software, Analytics & AI; Energy as a Service; BESS; e-Mobility.</td></tr>
                  <tr><td className="p-3 font-bold">Vision</td><td className="p-3">To be the world's largest energy transition company driving the future of energy.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-bold">Impact ambition</td><td className="p-3">Directly impact 1 billion lives and reduce ~10B tCO2e.</td></tr>
                  <tr><td className="p-3 font-bold">Global presence</td><td className="p-3">Activity across 12+ countries.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">3. The Story & Milestones</h2>
            <p>
              Esyasoft states that it was founded in 2014 with a vision to make energy smarter, more efficient and more accessible. Published milestones show an evolution from smart-grid and smart-metering capability toward a broader energy-transition portfolio.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#061513] text-[#8CFF00] font-mono uppercase">
                    <th className="p-3">Year</th>
                    <th className="p-3">Published milestone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-3 font-mono font-bold">2014</td><td className="p-3">Founding of Esyasoft.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-mono font-bold">2015</td><td className="p-3">First Smart Grid deployment in India under Ministry of Power.</td></tr>
                  <tr><td className="p-3 font-mono font-bold">2016</td><td className="p-3">Startup Innovation Grant from Government of Karnataka.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-mono font-bold">2021</td><td className="p-3">25M+ connected endpoints; large AMI across five UAE emirates.</td></tr>
                  <tr><td className="p-3 font-mono font-bold">2023</td><td className="p-3">CMMI Level 5 recognition.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-mono font-bold">2024</td><td className="p-3">Global ESG recognitions including sustainability awards.</td></tr>
                  <tr><td className="p-3 font-mono font-bold">2025</td><td className="p-3">Graduate-program expansion & Mangalore Capability Centre.</td></tr>
                  <tr className="bg-slate-50"><td className="p-3 font-mono font-bold">2026</td><td className="p-3">U.S. expansion, Tesla BESS collaboration, ABB partnership, and Correla acquisition.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">4. Vision & Core Values</h2>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 text-base">Corporate Vision</h3>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                “To be the world's largest energy transition company driving the future of energy.”
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-extrabold text-[#061513]">People First</h4>
                <p className="text-xs text-slate-600">People are at the core of what the company does, internally and externally.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-extrabold text-[#061513]">Technology Excellence</h4>
                <p className="text-xs text-slate-600">Innovation, quality products and continuous learning are emphasized.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-extrabold text-[#061513]">Delivery Excellence</h4>
                <p className="text-xs text-slate-600">Agility, flexibility and continuous improvement using technology & data.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">5. How Esyasoft Creates Value</h2>
            <ol className="space-y-2.5 text-xs text-slate-700">
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong>Identify a problem:</strong> poor visibility, manual reading, losses, reliability issues, demand uncertainty.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong>Connect physical assets:</strong> meters, gateways, sensors, chargers, storage assets.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span><strong>Collect & move data securely:</strong> devices, protocols, networks and system integrations.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span><strong>Manage & contextualize data:</strong> Head End Systems (HES) & Meter Data Management Systems (MDMS).</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <span><strong>Analyze & interpret:</strong> dashboards, forecasting, AI, digital twins and operational intelligence.</span>
              </li>
            </ol>
          </section>

          {/* Section 6 - 15 Summary Highlights */}
          <section id="sec-6" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">6. Energy Transition & Key Business Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-[#061513]">Smart Utilities & AMI</h4>
                <p className="text-xs text-slate-600">Electricity, water and gas smart metering, loss reduction, HES and MDMS platforms.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-[#061513]">Software, Analytics & AI</h4>
                <p className="text-xs text-slate-600">Gartner-recognized MDMS, grid analytics, digital twins, demand forecasting and energy audit tools.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-[#061513]">Battery Energy Storage (BESS)</h4>
                <p className="text-xs text-slate-600">Grid-scale battery storage, peak shaving, renewable integration and frequency regulation.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-[#061513]">e-Mobility & EaaS</h4>
                <p className="text-xs text-slate-600">EV charging infrastructure, charge point management, Zapmap ecosystem and Good Energy acquisition.</p>
              </div>
            </div>
          </section>

          {/* Section 22: Glossary */}
          <section id="sec-22" className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">22. Glossary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              {[
                { term: 'AMI', desc: 'Advanced Metering Infrastructure — connected metering combining meters, communications, and MDMS.' },
                { term: 'API', desc: 'Application Programming Interface — standard method for software systems to exchange data.' },
                { term: 'BESS', desc: 'Battery Energy Storage System — battery banks and control systems for grid load shifting.' },
                { term: 'DER', desc: 'Distributed Energy Resource — local energy resources like solar PV and batteries.' },
                { term: 'DLMS/COSEM', desc: 'International standard protocol for smart meter data exchange.' },
                { term: 'HES', desc: 'Head End System — manages field-device hardware communication and data acquisition.' },
                { term: 'MDMS', desc: 'Meter Data Management System — platform for collecting, validating, and processing meter data.' },
                { term: 'IoT', desc: 'Internet of Things — connected hardware devices with sensors and telemetry.' }
              ].map((g, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-mono font-bold text-[#061513] block">{g.term}</span>
                  <span className="text-slate-600 leading-normal">{g.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 23: Interactive New-Joiner Checklist */}
          <section id="sec-23" className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">INTERACTIVE CHECKLIST</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">23. New-Joiner Checklist</h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-600">
                  {checkedItems.length} / {newJoinerChecklistItems.length} DONE
                </span>
                <button
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  RESET
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {newJoinerChecklistItems.map((item, idx) => {
                const isChecked = checkedItems.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleChecklist(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-semibold'
                        : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs sm:text-sm leading-normal">{item}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 24: Sources */}
          <section id="sec-24" className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">24. Sources & References</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <a href="https://esyasoft.com/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100 transition">
                <span>S1 — Corporate Homepage</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="https://esyasoft.com/about-esyasoft" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100 transition">
                <span>S2 — About Esyasoft</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="https://esyasoft.com/vision" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100 transition">
                <span>S3 — Vision & Core Values</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="https://esyasoft.com/global-capability-center-mangalore" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100 transition">
                <span>S6 — Mangalore GCC</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
};
