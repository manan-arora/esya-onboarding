import { ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreVolt: () => void;
  overallPercentage: number;
}

export const Hero: React.FC<HeroProps> = ({
  onStartJourney,
  onExploreVolt,
  overallPercentage
}) => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 relative flex flex-col justify-center overflow-hidden bg-radial-hero bg-grid-pattern">
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8CFF00]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#071B18] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full space-y-12 z-10">
        
        {/* Top Official Banner Feature Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#8CFF00]/30 shadow-2xl bg-[#061513] group">
          <img
            src="/assets/esyasoft_get_banner.jpg"
            alt="Esyasoft Graduate Program 2026 Reference Banner"
            className="w-full max-h-[220px] sm:max-h-[300px] object-cover object-center brightness-105 group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020605]/80 via-transparent to-[#020605]/60 flex items-end p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#020605]/90 border border-[#8CFF00] text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-wider backdrop-blur-md">
              <Compass className="w-3.5 h-3.5" />
              OFFICIAL GET 2026 BRAND MISSION
            </div>
          </div>
        </div>

        {/* Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 7 Columns: Hero Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B18] border border-[#8CFF00]/30 text-xs font-mono tracking-widest text-[#8CFF00] uppercase shadow-[0_0_15px_rgba(140,255,0,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#8CFF00] animate-ping" />
              ESYASOFT GET PROGRAM 2026
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[0.9] font-sans">
                BUILD <br />
                <span className="text-[#8CFF00] text-glow-lime">VOLT.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold tracking-wider text-neutral-300 font-mono pt-4">
                30 DAYS. 5 CORES. ONE MISSION.
              </p>
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed">
              Your 30-day GET journey to explore, learn and grow. Every milestone powers another part of Volt, Esyasoft’s friendly GET mascot.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartJourney}
                className="px-8 py-4 rounded-xl bg-[#8CFF00] text-[#020605] font-bold text-sm tracking-wider uppercase font-mono flex items-center gap-3 transition-all duration-300 hover:bg-[#9CFF00] hover:scale-[1.02] active:scale-[0.98] lime-glow cursor-pointer"
              >
                START THE JOURNEY
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onExploreVolt}
                className="px-7 py-4 rounded-xl bg-[#071B18] border border-[#13332D] text-neutral-200 font-semibold text-sm font-mono flex items-center gap-2 transition-all hover:border-[#8CFF00]/60 hover:text-white cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8CFF00]" />
                VOLT BUILD STATUS ({overallPercentage}%)
              </button>
            </div>

            {/* Motto Ribbon Pill */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono tracking-widest uppercase border-t border-[#071B18] w-full max-w-md">
              <span className="text-[#8CFF00] font-extrabold">EXPLORE</span>
              <span className="text-neutral-600">•</span>
              <span className="text-[#8CFF00] font-extrabold">GROW</span>
              <span className="text-neutral-600">•</span>
              <span className="text-[#8CFF00] font-extrabold">PROSPER</span>
            </div>

          </div>

          {/* Right 5 Columns: Official Waving Volt Mascot */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            
            {/* Backdrop glow */}
            <div className="absolute inset-0 max-w-[440px] max-h-[440px] m-auto rounded-full border border-[#8CFF00]/20 bg-[#071B18]/40 blur-[2px] pointer-events-none" />
            
            {/* Waving Mascot Image */}
            <div className="relative z-10 animate-float flex flex-col items-center">
              <img
                src="/assets/volt_mascot.png"
                alt="Volt Mascot - Official Esyasoft GET 2026 Mascot"
                className="w-full max-w-[380px] object-contain drop-shadow-[0_20px_35px_rgba(140,255,0,0.25)] transition-transform duration-500 hover:scale-105"
              />
              
              {/* Mascot Status Badge */}
              <div className="mt-4 px-4 py-2 rounded-2xl bg-[#061513]/90 backdrop-blur-md border border-[#8CFF00]/40 shadow-xl flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#8CFF00]" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-neutral-400 leading-none">PRIMARY MASCOT</span>
                  <span className="text-xs font-bold font-mono text-white mt-0.5">VOLT • ESYASOFT GET 2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
