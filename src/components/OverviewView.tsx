import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Flame,
  MessageCircle,
  Play,
  Plus,
  Sparkles,
  Users,
  Zap,
  Globe,
  Building2,
  Award
} from 'lucide-react';

interface OverviewViewProps {
  onStartJourney: () => void;
  onSelectDay: (day: number) => void;
}



const policies = [
  { title: 'Information Security', detail: 'Protect company systems, credentials, devices and confidential information. Follow all security and access-control procedures.' },
  { title: 'Code of Conduct', detail: 'Maintain professionalism, respect, integrity and inclusivity in all workplace interactions.' },
  { title: 'Data Privacy', detail: 'Handle employee, customer and business data responsibly and only for authorized purposes.' },
  { title: 'Acceptable Use', detail: 'Use company devices, networks, software and other resources responsibly and only for legitimate business purposes.' },
  { title: 'Confidentiality', detail: 'Do not disclose, copy or share confidential company, customer or project information without authorization.' },
  { title: 'Anti-Harassment & Equal Opportunity', detail: 'Maintain a safe, respectful workplace free from harassment, discrimination and inappropriate conduct.' },
  { title: 'Attendance & Leave', detail: 'Follow working hours, attendance procedures and leave-approval processes established by the company.' },
  { title: 'Social Media & Public Communication', detail: 'Do not share confidential information or represent personal opinions as official company statements.' },
  { title: 'Intellectual Property', detail: 'Respect company and third-party intellectual property. Work created as part of employment should be handled according to company policy.' },
  { title: 'Incident Reporting', detail: 'Report security incidents, policy violations, workplace concerns or suspicious activity through the appropriate internal channels.' },
];

const images = {
  founder: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-sZLCMiKwXrtdxwtCOjtE4EsQew3I5P.jpg',
  hero: '/assets/esyasoft_get_banner.jpg',
  stage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-24%20at%2011.12.14%20AM%20%282%29-2iT8YdqxUU0knwlWHWY3vRa8ofLxXR.jpeg',
  community: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-24%20at%2011.12.14%20AM-X3MYNdKYfGc2xazwn45unPPIr4lRZL.jpeg',
};

const speakerSessions = [
  { type: 'Welcome keynote', speaker: 'Program leadership', role: 'Opening speakers', detail: 'A warm welcome to the 2026 graduate cohort, the story behind Esyasoft, and what to expect from your first 30 days.' },
  { type: 'People & culture', speaker: 'People team', role: 'Your support network', detail: 'Meet the people who help you settle in, understand how we work together, and find the right support whenever you need it.' },
  { type: 'Product deep dive', speaker: 'Product and domain leaders', role: 'Context builders', detail: 'Understand our products, customers, and the real-world problems behind the work you will contribute to.' },
  { type: 'Ask me anything', speaker: 'Subject-matter experts', role: 'Practitioners', detail: 'Bring your questions. Hear honest lessons from experienced teammates about projects, growth, and getting started well.' },
  { type: 'Your first contribution', speaker: 'Your manager and buddy', role: 'Day-to-day guides', detail: 'Choose a starter task, get feedback on your approach, and leave with a clear next step for month two.' },
];

const schedule = [
  ['1', 'Mon 7 Sep', 'Leadership Orientation', 'Divya'], ['2', 'Tue 8 Sep', 'HR & Culture Orientation', 'Divya'], ['3', 'Wed 9 Sep', 'Project Delivery Excellence', 'Deependra, Sachin'], ['4', 'Thu 10 Sep', 'Smart Meter & Data Acquisition', 'Rohit Patki'], ['5', 'Fri 11 Sep', 'MDMS & Data Intelligence', 'Amit Kulkarni, Pranav Kashyap'], ['—', 'Mon 14 Sep', 'Holiday · Ganesh Chaturthi', '—'], ['6', 'Tue 15 Sep', 'Smart Meters Portfolio', 'Anupam Das'], ['7', 'Wed 16 Sep', 'POSH & Soft Skills, Part 1', 'Vinol & team'], ['8', 'Thu 17 Sep', 'Unassigned · domain slot blank', '—'], ['9', 'Fri 18 Sep', 'Project Management & Agile Practices', 'Gopinath Arunachalam, Ankit Shrivastava'], ['10', 'Mon 21 Sep', 'BESS & Communication Tech', 'Alfred Manohar, Kassem Abdallah, Saurabh Kumar, Dushyant Singh'], ['11', 'Tue 22 Sep', 'EV Charging & CPMS', 'Ashwin Gautham, Kartik Kumar'], ['12', 'Wed 23 Sep', 'Gas Distribution Network', 'Amit Golhani'], ['13–18', '24 Sep – 1 Oct', 'Business Capability Development / Soft Skills · topics TBC', 'Kamal / Divya'], ['—', 'Fri 2 Oct', 'Holiday · Gandhi Jayanthi', '—'], ['19–23', '5–9 Oct', 'Technical Foundation · topics TBC', 'Sierra Learning / Esyasoft SMEs'], ['24–28', '12–16 Oct', 'Technical Foundation · topics TBC', 'Sierra Learning / Esyasoft SMEs'], ['29', 'Mon 19 Oct', 'Technical Foundation', 'Sierra Learning / Esyasoft SMEs'], ['—', 'Tue 20 Oct', 'Holiday · Dussehra', '—'], ['30', 'Wed 21 Oct', 'Technical Foundation + Volt final activation', 'Sierra Learning / Esyasoft SMEs'],
];

const steps = [
  {
    number: '01',
    name: 'POWER CORE',
    subtitle: 'Know Esyasoft',
    tagline: 'Foundational Energy & Vision',
    icon: Flame,
    window: 'Days 01–05',
    description: 'Understand Esyasoft’s global mission, smart energy ecosystem, culture, and core principles powering modern infrastructure.',
    sessions: [
      'Welcome & Vision: Founding story, global footprint & GET 2026 roadmap',
      'People & Culture: Core workplace values, agile tribes & mentor network',
      'How Esyasoft Works: End-to-end utility transformation lifecycle',
      'Ecosystem Exploration: Smart Grid Infrastructure (AMI & MDMS)',
      'Power Core Checkpoint: GET goal statement & milestone evaluation'
    ],
    outcome: '100% Power Core activation: Clear understanding of Esyasoft’s global mission, team culture, and product ecosystem.'
  },
  {
    number: '02',
    name: 'DOMAIN CORE',
    subtitle: 'Know what Esyasoft builds',
    tagline: 'Industry Knowledge & Smart Solutions',
    icon: Globe,
    window: 'Days 06–10',
    description: 'Deep dive into smart grid solutions, IoT sensors, meter data management, utility automation, and customer applications.',
    sessions: [
      'Industry Foundations: Global utility landscape, grid metrics & AT&C loss reduction',
      'Products & Solutions: Smart Metering (AMI), OMS, EV Charging & DER',
      'APIs & Connected Systems: Telemetry streams, RESTful APIs & JSON payloads',
      'Customer Use Cases: Real-world deployments & 10M+ meter rollouts',
      'Domain Core Checkpoint: Utility scenario case study & domain evaluation'
    ],
    outcome: '100% Domain Core activation: Deep domain fluency in smart grid technology, utility APIs, and customer impact.'
  },
  {
    number: '03',
    name: 'NEURAL CORE',
    subtitle: 'Know the technology',
    tagline: 'Technical Intelligence & Architecture',
    icon: BookOpen,
    window: 'Days 11–18',
    description: 'Master backend engineering, data modeling, C#, SQL databases, scalable APIs, git workflows, and system architecture design.',
    sessions: [
      'Programming Foundations: Clean code, data structures & algorithms',
      'C# & OOP Mastery: LINQ queries, async/await patterns & object modeling',
      'Databases & SQL: Schema design, query optimization & data modeling',
      'Git & Modern Dev Workflows: Branching, pull requests & CI/CD pipelines',
      'Neural Core Checkpoint: Technical architecture design & code evaluation'
    ],
    outcome: '100% Neural Core activation: Software engineering mastery for building scalable utility backend modules.'
  },
  {
    number: '04',
    name: 'ENGINE CORE',
    subtitle: 'Put knowledge into practice',
    tagline: 'Hands-on Execution & Engineering',
    icon: Zap,
    window: 'Days 19–25',
    description: 'Build real-world GET mini-projects, debug live systems, integrate APIs, write production code, and solve technical challenges.',
    sessions: [
      'Dev Setup & Environment: Local stack configuration & tooling',
      'First Feature Build: Translating requirements into production code',
      'Debugging & Testing Mastery: Troubleshooting live API & database issues',
      'API & System Integration: Connecting backend modules with frontend UI',
      'Engine Core Checkpoint: GET mini-project completion & presentation'
    ],
    outcome: '100% Engine Core activation: Hands-on experience building and shipping functional software features.'
  },
  {
    number: '05',
    name: 'DRIVE CORE',
    subtitle: 'Learn how to operate',
    tagline: 'Professional Excellence & Leadership',
    icon: Award,
    window: 'Days 26–30',
    description: 'Elevate your communication, cross-functional teamwork, executive storytelling, problem ownership, and final Volt activation.',
    sessions: [
      'Professional Communication: Clear technical writing & stakeholder messaging',
      'Cross-Functional Collaboration: Working across engineering, product & DevOps',
      'Executive Storytelling: Presenting engineering results to leadership',
      'Ownership & Growth: Career growth paths & continuous learning',
      'Drive Core Checkpoint: Final 30-day reflection & full Volt activation'
    ],
    outcome: '100% Drive Core & Volt activation: Professional leadership readiness and full integration into Esyasoft engineering.'
  }
];

export const OverviewView = ({
  onStartJourney,
  onSelectDay
}: OverviewViewProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [policyOpen, setPolicyOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#F5F5F0] text-[#061513]">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8CFF00]/15 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#071B18]/10 blur-3xl" />
      </div>

      {/* Hero Welcome Overview */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 pt-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#061513] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#8CFF00] fill-[#8CFF00]" />
              ESYASOFT GRADUATE PROGRAM 2026
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#061513] leading-[0.95] font-sans">
              Your first 30 days.<br />
              <span className="text-slate-800">Made simple.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
              Welcome to Esyasoft. Think of this as your friendly map for finding your people, learning how things work, and building something you'll be proud of.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartJourney}
                className="px-8 py-4 rounded-xl bg-[#061513] text-[#8CFF00] font-bold font-mono text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 hover:bg-black hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                SHOW ME THE WAY
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#schedule"
                className="px-6 py-4 rounded-xl bg-white border border-slate-300 text-[#061513] font-bold font-mono text-xs uppercase flex items-center gap-2 hover:bg-slate-50 transition"
              >
                <Play className="w-4 h-4 fill-current text-[#061513]" />
                SEE THE SCHEDULE
              </a>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-500">
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#8CFF00] text-[#061513] font-bold flex items-center justify-center text-xs border border-white">A</span>
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs border border-white">R</span>
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs border border-white">S</span>
              </div>
              <span>Join 70+ GET explorers in the 2026 cohort</span>
            </div>
          </div>

          {/* Right Hero Card: Volt Mascot Feature */}
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-3xl border-4 border-white bg-[#061513] shadow-2xl p-3 space-y-3 relative group">
              <div className="flex items-center justify-between px-2 text-xs font-mono text-neutral-400">
                <span className="font-bold text-[#8CFF00] uppercase tracking-wider">MEET VOLT • GET MASCOT</span>
                <span className="w-2 h-2 rounded-full bg-[#8CFF00] animate-ping" />
              </div>
              
              <div className="aspect-square sm:aspect-[4/3] overflow-hidden rounded-2xl bg-[#020605] border border-[#13332D] relative flex items-center justify-center">
                <img
                  src="/assets/volt_mascot.jpg"
                  alt="Volt Mascot - Esyasoft GET Program"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061513] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
              
                  <h3 className="text-base font-extrabold text-white">Volt — Powering Your 30 Days</h3>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </section>

      {/* 5 Cores Journey Roadmap Section */}
      <section id="start" className="relative z-10 border-y border-slate-200 bg-white/80 py-16 px-6 lg:py-20">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#061513]">BEFORE YOU BEGIN</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#061513] mt-1">
              Five Cores. Thirty Days. Your Roadmap.
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              The 30-day GET program is structured across 5 core transformation phases. Select a core below to explore its missions and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-[#061513] text-white border-[#061513] shadow-xl -translate-y-1'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#8CFF00]' : 'text-slate-500'}`}>
                      CORE {step.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#8CFF00]' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="font-extrabold text-sm mt-6 leading-tight">{step.name}</h4>
                  <p className={`text-[11px] font-mono mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{step.subtitle}</p>
                  <ChevronRight className={`w-4 h-4 absolute bottom-4 right-4 ${isActive ? 'text-[#8CFF00]' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Core Details */}
          {(() => {
            const selected = steps[activeStep];
            return (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#061513] text-[#8CFF00] font-mono font-bold flex items-center justify-center text-sm shrink-0">
                      {selected.number}
                    </span>
                    <div>
                      <p className="text-xs font-mono text-slate-500 font-bold uppercase">{selected.window} • {selected.tagline}</p>
                      <h3 className="text-xl font-extrabold text-[#061513]">{selected.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{selected.description}</p>
                  
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <p className="text-xs font-mono text-slate-500 font-bold uppercase">By the end of this core phase</p>
                    <p className="text-xs font-semibold text-slate-800 mt-1">{selected.outcome}</p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Core Highlights & Key Missions</p>
                  <ul className="space-y-2.5">
                    {selected.sessions.map((sess, i) => (
                      <li key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800 font-medium leading-normal">{sess}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}

          {/* Speaker Sessions Grid */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-slate-500 font-bold uppercase">Who you'll hear from</span>
                <h3 className="text-xl font-extrabold text-[#061513]">Meet your session speakers</h3>
              </div>
              <Users className="w-6 h-6 text-slate-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {speakerSessions.map((session) => (
                <div key={session.type} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#061513] uppercase tracking-wider">{session.type}</span>
                      <h4 className="text-sm font-extrabold text-[#061513] mt-0.5">{session.speaker}</h4>
                      <p className="text-[11px] font-mono text-slate-500">{session.role}</p>
                    </div>
                    <MessageCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{session.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* New Here confirmation bar */}
          <div className="p-5 rounded-2xl bg-[#061513] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#13332D]">
            <div className="flex items-start gap-3">
              <CircleHelp className="w-5 h-5 text-[#8CFF00] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-neutral-300">
                <strong className="text-white">New here?</strong> That's exactly where you're meant to be. Find a buddy, ask one question, and write down one thing you learned today.
              </p>
            </div>
            <button
              onClick={() => setChecked(!checked)}
              className="px-5 py-2.5 rounded-xl bg-[#8CFF00] text-[#061513] font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-[#9CFF00] transition cursor-pointer shrink-0"
            >
              {checked && <Check className="w-4 h-4" />}
              {checked ? "I'M READY ✓" : "MARK AS READ"}
            </button>
          </div>
        </div>
      </section>

      {/* About Esyasoft & Founder Section */}
      <section id="about" className="relative z-10 bg-[#061513] text-white py-20 px-6 border-y border-[#071B18]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl border-4 border-[#13332D] bg-[#071B18] shadow-2xl">
              <img
                src={images.founder}
                alt="Bipin Chandra, founder and Group CEO of Esyasoft"
                className="w-full aspect-[0.95] object-cover object-top filter brightness-105"
              />
              <div className="bg-[#020605] p-5 border-t border-[#13332D]">
                <h3 className="text-lg font-extrabold text-white">Bipin Chandra</h3>
                <p className="text-xs font-mono font-bold text-[#8CFF00] uppercase tracking-wider mt-0.5">
                  Founder & Group CEO
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#8CFF00] text-[#020605] p-4 rounded-2xl shadow-2xl font-mono">
              <span className="text-[10px] font-bold uppercase tracking-wider block">FOUNDED 2014</span>
              <span className="text-xs font-extrabold mt-0.5 block">Built for better energy</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-[#8CFF00] uppercase tracking-widest">
              THE COMPANY BEHIND THE JOURNEY
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              Technology with<br />
              <span className="text-[#8CFF00] text-glow-lime">a human pulse.</span>
            </h2>

            <p className="text-base text-neutral-300 max-w-xl leading-relaxed">
              Esyasoft is a global energy transition technology group helping utilities build smarter grids, cleaner mobility, and more resilient communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#071B18] border border-[#13332D]">
                <Globe className="w-5 h-5 text-[#8CFF00] mb-2" />
                <span className="text-3xl font-extrabold font-mono text-white">12+</span>
                <p className="text-xs text-neutral-400 mt-0.5">countries reached</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#071B18] border border-[#13332D]">
                <Building2 className="w-5 h-5 text-[#8CFF00] mb-2" />
                <span className="text-3xl font-extrabold font-mono text-white">40+</span>
                <p className="text-xs text-neutral-400 mt-0.5">utilities served</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#071B18] border border-[#13332D]">
                <Award className="w-5 h-5 text-[#8CFF00] mb-2" />
                <span className="text-3xl font-extrabold font-mono text-white">200M+</span>
                <p className="text-xs text-neutral-400 mt-0.5">end consumers</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Company Policies Drawer Grid */}
      <section id="policies" className="py-16 px-6 max-w-[1400px] mx-auto space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">HOW WE OPERATE</span>
          <h2 className="text-4xl font-extrabold text-[#061513] tracking-tight mt-1">
            Policies that guide the work.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Click a policy to open its guide. These principles shape how we build, partner, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {policies.map((policy, index) => (
            <div key={policy.title} className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setPolicyOpen(policyOpen === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-[#061513] text-sm hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <span>{policy.title}</span>
                </div>
                <Plus className={`w-4 h-4 text-slate-400 transition-transform ${policyOpen === index ? 'rotate-45' : ''}`} />
              </button>

              {policyOpen === index && (
                <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {policy.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 30-Day Day-by-Day Schedule Table */}
      <section id="schedule" className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">THE FULL 30-DAY PLAN</span>
              <h2 className="text-4xl font-extrabold text-[#061513] tracking-tight mt-1">
                Your journey, day by day.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Every row tells you what is happening, who owns the session, and what comes next.
              </p>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              30 TRAINING DAYS
            </div>
          </div>

          {/* Schedule Table */}
          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#061513] text-[#8CFF00] font-mono uppercase text-[11px]">
                    <th className="p-4">Day</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Session</th>
                    <th className="p-4">Speaker / Owner</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {schedule.map(([day, date, session, owner], idx) => {
                    const isHoliday = session.startsWith('Holiday');
                    const dayNum = parseInt(day, 10);
                    return (
                      <tr key={idx} className={`hover:bg-slate-50 transition ${isHoliday ? 'bg-amber-50/70' : ''}`}>
                        <td className="p-4 font-mono font-bold">
                          <span className={`px-2.5 py-1 rounded-md text-xs ${isHoliday ? 'bg-amber-200 text-amber-900' : 'bg-slate-100 text-[#061513]'}`}>
                            {day}
                          </span>
                        </td>
                        <td className="p-4 font-mono font-semibold text-slate-700 whitespace-nowrap">{date}</td>
                        <td className="p-4 font-bold text-[#061513]">{session}</td>
                        <td className="p-4 text-slate-600">{owner}</td>
                        <td className="p-4">
                          {!isNaN(dayNum) && (
                            <button
                              onClick={() => onSelectDay(dayNum)}
                              className="px-3 py-1 rounded-lg bg-[#061513] text-[#8CFF00] font-mono text-[10px] font-bold uppercase hover:bg-black transition cursor-pointer"
                            >
                              VIEW DAY
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Onboarding Support */}
      <section className="py-16 px-6 bg-[#061513] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-[#8CFF00] uppercase tracking-widest">NEED A HAND?</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Onboarding Support</h2>
            <p className="text-sm text-neutral-300 max-w-xl">
              Questions about your onboarding journey, sessions, or first-week setup? Reach out directly to your program contact.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#071B18] border border-[#13332D] space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold">YOUR ONBOARDING CONTACT</span>
            <h4 className="text-xl font-extrabold text-white">Prabhu D</h4>
            <a href="mailto:prabhu.d@esyasoft.com" className="text-xs font-mono text-[#8CFF00] font-bold block hover:underline">
              prabhu.d@esyasoft.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
