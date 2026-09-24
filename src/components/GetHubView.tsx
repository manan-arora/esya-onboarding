import { useState, useEffect } from 'react';
import {
  ACCOMMODATION_PROVIDED,
  INITIAL_PACKING_LIST,
  GET_CONTACTS,
  GET_FAQS
} from '../data/getHubData';
import {
  Home,
  Navigation,
  CheckCircle2,
  Circle,
  RotateCcw,
  MapPin,
  Plane,
  Train,
  Dumbbell,
  HelpCircle,
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

interface GetHubViewProps {
  onGoToJourney: () => void;
}

const STORAGE_KEY_CHECKLIST = 'esyasoft_get_hub_checklist';

export const GetHubView = ({ onGoToJourney }: GetHubViewProps) => {
  // Checklist state persisted in localStorage
  const [packedItems, setPackedItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read checklist from localStorage', e);
    }
    return ['toiletries', 'towels']; // Default baseline
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openAccommodationCategory, setOpenAccommodationCategory] = useState<string | null>('KITCHEN');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CHECKLIST, JSON.stringify(packedItems));
    } catch (e) {
      // ignore
    }
  }, [packedItems]);

  const toggleCheckItem = (id: string) => {
    if (packedItems.includes(id)) {
      setPackedItems(packedItems.filter(item => item !== id));
    } else {
      setPackedItems([...packedItems, id]);
    }
  };

  const resetChecklist = () => {
    setPackedItems([]);
  };

  const totalChecklistItems = INITIAL_PACKING_LIST.length;
  const packedCount = packedItems.length;

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#F5F5F0] text-[#061513]">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8CFF00]/15 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#071B18]/10 blur-3xl" />
      </div>

      {/* Hero Section with Embedded Video */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 pt-10 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              ESYALIFE · YOUR QUICK GUIDE
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#061513] font-sans leading-none">
              ESYALIFE
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-800">
              Everything you need outside your training journey.
            </p>

            <p className="text-base text-slate-600 font-normal">
              Travel, stay, campus life and important contacts — all in one place.
            </p>
          </div>

          {/* Embedded Welcome Video (Controls Disabled) */}
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-3xl border-4 border-white bg-[#061513] shadow-2xl p-3 space-y-3">
              <div className="flex items-center justify-between px-2 text-xs font-mono text-neutral-400">
                <span className="font-bold text-[#8CFF00] uppercase tracking-wider">WELCOME TO ESYASOFT</span>
                <span className="w-2 h-2 rounded-full bg-[#8CFF00] animate-ping" />
              </div>
              
              <div className="aspect-video overflow-hidden rounded-2xl bg-black border border-[#13332D] relative">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/3JTM2o-1r5E?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=3JTM2o-1r5E"
                  title="Esyasoft Welcome Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-16 relative z-10">

        {/* 1. STAY SECTION */}
        <section id="stay" className="space-y-8 pt-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#061513] text-[#8CFF00] flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">STAY</span>
              <h2 className="text-3xl font-extrabold text-[#061513]">Make yourself at home.</h2>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Here's what you'll find at your accommodation — and what you should bring yourself.
          </p>

          {/* Accommodation Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left 7 Columns: What's Provided */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#061513]">
                  WHAT'S PROVIDED
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Fully furnished 3 BHK & 4 BHK apartments
                </span>
              </div>

              {/* Quick Highlight Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Iron & Ironing stand provided</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Aquaguard water purifier on-site</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Full kitchen & induction cooktop</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Sharing basis (3 BHK & 4 BHK)</span>
                </div>
              </div>

              {/* Accordion Categories for Provided Items */}
              <div className="space-y-3">
                {ACCOMMODATION_PROVIDED.map((cat) => {
                  const isOpen = openAccommodationCategory === cat.title;
                  return (
                    <div key={cat.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                      <button
                        onClick={() => setOpenAccommodationCategory(isOpen ? null : cat.title)}
                        className="w-full p-4 flex items-center justify-between text-left font-bold text-[#061513] text-sm hover:bg-slate-50 transition cursor-pointer"
                      >
                        <span className="font-mono text-xs uppercase tracking-wider">{cat.title} ({cat.items.length})</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-0 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {cat.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2 rounded-lg bg-slate-50">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#061513]" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right 5 Columns: Interactive Packing Checklist */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">BRING YOUR OWN</span>
                    <h3 className="text-xl font-extrabold text-[#061513]">DON'T FORGET TO PACK</h3>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex flex-col items-end font-mono">
                    <span className="text-[10px] text-slate-500 uppercase font-bold">PACKING</span>
                    <span className="text-sm font-extrabold text-[#061513]">
                      {packedCount} / {totalChecklistItems} READY
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-[#061513] rounded-full transition-all duration-300"
                    style={{ width: `${(packedCount / totalChecklistItems) * 100}%` }}
                  />
                </div>

                {/* Checklist items */}
                <div className="space-y-2">
                  {INITIAL_PACKING_LIST.map((item) => {
                    const isPacked = packedItems.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleCheckItem(item.id)}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isPacked
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-semibold'
                            : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xs">{item.label}</span>
                        {isPacked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={resetChecklist}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-mono text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    RESET CHECKLIST
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. TRAVEL SECTION */}
        <section id="travel" className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#061513] text-[#8CFF00] flex items-center justify-center">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">TRAVEL</span>
              <h2 className="text-3xl font-extrabold text-[#061513]">Getting here.</h2>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Everything you need to know before you make your way to the training centre.
          </p>

          {/* Destination Card & Distances */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#061513] text-white border border-[#071B18] shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-widest">
                  DESTINATION LOCATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  ESYASOFT GLOBAL CAPABILITY CENTER
                </h3>
                <p className="text-sm font-mono text-neutral-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8CFF00] shrink-0" />
                  Kolambe Proper, Karnataka 574142
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#071B18] border border-[#13332D] text-xs font-mono text-neutral-300">
                <span className="text-[#8CFF00] font-bold">NOTE:</span> Check your individual travel instructions shared by the Admin team for pickup arrangements.
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#061513] shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">AIRPORT</span>
                  <h4 className="text-base font-extrabold text-[#061513]">MANGALORE AIRPORT</h4>
                  <p className="text-xs font-mono font-bold text-slate-600">Approx. 10 KM</p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#061513] shrink-0">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">RAILWAY STATION</span>
                  <h4 className="text-base font-extrabold text-[#061513]">MANGALORE CENTRAL</h4>
                  <p className="text-xs font-mono font-bold text-slate-600">Approx. 20 KM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Arrival Flow */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
            <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#061513]">
              YOUR ARRIVAL FLOW
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
              {[
                'BEFORE YOU TRAVEL',
                'CHECK TRAVEL DETAILS',
                'ARRIVE IN MANGALORE',
                'PICKUP ASSISTANCE',
                'REACH CAPABILITY CENTRE',
                'ROOM ALLOCATION',
                'GET STARTED'
              ].map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center space-y-1">
                  <span className="w-5 h-5 rounded-full bg-[#061513] text-[#8CFF00] text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-[#061513] leading-tight mt-1">{step}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <p>• Trainees who requested travel assistance were sent ticket details by the Admin team.</p>
              <p>• For self-booked travel, Admin may assist with cab pickup from Mangalore airport/train/bus points where applicable.</p>
              <p>• Trainees travelling by private vehicle should follow the arrival instructions provided for their cohort.</p>
            </div>
          </div>
        </section>

        {/* 3. CAMPUS LIFE SECTION */}
        <section id="campus" className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#061513] text-[#8CFF00] flex items-center justify-center">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">CAMPUS LIFE</span>
              <h2 className="text-3xl font-extrabold text-[#061513]">Work hard. Unwind too.</h2>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            The residential area has a few spaces to help you recharge after training.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                🏋️
              </div>
              <h4 className="font-extrabold text-base text-[#061513]">GYMNASIUM</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gymnasium available on the 5th floor of the Capability Centre residential area.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                🏓
              </div>
              <h4 className="font-extrabold text-base text-[#061513]">TABLE TENNIS</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take a break and play a game with your cohort teammates.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                ⚽
              </div>
              <h4 className="font-extrabold text-base text-[#061513]">FOOSBALL</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Another option for fun downtime after training sessions.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                📚
              </div>
              <h4 className="font-extrabold text-base text-[#061513]">LIBRARY</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quiet space to read, study technical material, and unwind.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHO CAN HELP? SECTION */}
        <section id="contacts" className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#061513] text-[#8CFF00] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">SUPPORT</span>
              <h2 className="text-3xl font-extrabold text-[#061513]">Who can help?</h2>
            </div>
          </div>

          <p className="text-sm text-slate-600">
            Not sure who to ask? Start here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GET_CONTACTS.map((contact) => (
              <div key={contact.name} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                    {contact.category === 'TRAVEL' ? 'TRAVEL & LOGISTICS' : 'HR / POLICIES'}
                  </span>
                  <h4 className="text-lg font-extrabold text-[#061513] mt-1">{contact.name}</h4>
                  <p className="text-xs font-mono text-slate-500">{contact.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{contact.purpose}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={`mailto:${contact.email}`}
                    className="py-2.5 px-3 rounded-xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-black transition cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    EMAIL
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    CALL
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. QUICK FAQ SECTION */}
        <section id="faq" className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#061513] text-[#8CFF00] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">QUICK FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#061513]">Quick Answers.</h2>
            </div>
          </div>

          <div className="space-y-3">
            {GET_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left font-extrabold text-[#061513] text-sm hover:bg-slate-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pl-13">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. VOLT CONNECTION */}
        <section className="p-8 rounded-3xl bg-[#061513] text-white border border-[#071B18] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#8CFF00]" />
              READY TO START?
            </span>
            <h3 className="text-2xl font-extrabold text-white">Your practical setup is sorted.</h3>
            <p className="text-sm text-neutral-300 font-mono">
              Now it's time to build Volt across your 30-day journey.
            </p>
          </div>

          <button
            onClick={onGoToJourney}
            className="px-8 py-4 rounded-xl bg-[#8CFF00] text-[#020605] font-bold font-mono text-sm tracking-wider uppercase flex items-center gap-3 transition hover:bg-[#9CFF00] hover:scale-105 cursor-pointer shrink-0 lime-glow"
          >
            GO TO YOUR JOURNEY
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </section>

      </div>

    </div>
  );
};
