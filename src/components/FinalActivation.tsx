import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Zap } from 'lucide-react';

interface FinalActivationProps {
  onRevisitJourney: () => void;
  onClose: () => void;
}

export const FinalActivation: React.FC<FinalActivationProps> = ({
  onRevisitJourney,
  onClose
}) => {
  const [phase, setPhase] = useState<'EXPLODED' | 'PULSE' | 'NORMAL' | 'ONLINE'>('EXPLODED');

  useEffect(() => {
    // Sequence of 2-4 seconds animation
    const timer1 = setTimeout(() => setPhase('PULSE'), 800);
    const timer2 = setTimeout(() => setPhase('NORMAL'), 1800);
    const timer3 = setTimeout(() => {
      setPhase('ONLINE');
      // Fire confetti burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#8CFF00', '#9CFF00', '#ffffff', '#071B18']
        });
      } catch (e) {
        // Fallback if canvas confetti fails
      }
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#020605]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full transition-all duration-1000 blur-[150px] pointer-events-none ${
        phase === 'ONLINE' ? 'bg-[#8CFF00]/25 scale-125' : 'bg-[#8CFF00]/10 scale-100'
      }`} />

      <div className="max-w-2xl mx-auto space-y-8 z-10 relative flex flex-col items-center">
        
        {/* Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071B18] border border-[#8CFF00] text-xs font-mono font-bold tracking-widest text-[#8CFF00] uppercase shadow-[0_0_20px_rgba(140,255,0,0.3)]">
          <Zap className="w-4 h-4 text-[#8CFF00] fill-[#8CFF00]" />
          ALL FIVE CORES ACTIVATED
        </div>

        {/* Mascot Transition Illusion Container */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
          
          {/* Exploded Volt during first phases */}
          {(phase === 'EXPLODED' || phase === 'PULSE') && (
            <img
              src="/assets/volt_exploded.jpg"
              alt="Exploded Volt Core Assembly"
              className={`w-full h-full object-contain rounded-3xl transition-all duration-700 ${
                phase === 'PULSE' ? 'scale-105 opacity-80 filter brightness-125' : 'scale-100 opacity-100'
              }`}
            />
          )}

          {/* Standalone Volt during Normal & Online phases */}
          {(phase === 'NORMAL' || phase === 'ONLINE') && (
            <img
              src="/assets/volt_mascot.jpg"
              alt="Volt Mascot Fully Online"
              className={`w-full h-full object-contain rounded-3xl transition-all duration-700 drop-shadow-[0_0_40px_rgba(140,255,0,0.6)] ${
                phase === 'ONLINE' ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
              }`}
            />
          )}
        </div>

        {/* Cinematic Text Reveal */}
        {phase === 'ONLINE' ? (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none font-sans">
              VOLT <span className="text-[#8CFF00] text-glow-lime">ONLINE</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold font-mono text-[#8CFF00] tracking-wider">
              100% BUILT
            </p>
            <p className="text-base sm:text-lg text-neutral-300 font-medium max-w-lg mx-auto">
              30 DAYS. 5 CORES. ONE MISSION. <br />
              <span className="text-white font-bold">YOU BUILT VOLT.</span>
            </p>

            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono tracking-widest text-[#8CFF00] uppercase">
              <span>EXPLORE</span> • <span>LEARN</span> • <span>GROW</span>
            </div>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={onRevisitJourney}
                className="px-8 py-4 rounded-xl bg-[#8CFF00] text-[#020605] font-bold text-sm tracking-wider uppercase font-mono flex items-center gap-3 transition hover:bg-[#9CFF00] hover:scale-105 cursor-pointer lime-glow"
              >
                REVISIT YOUR JOURNEY
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onClose}
                className="px-6 py-4 rounded-xl bg-[#071B18] border border-[#13332D] text-white font-mono text-xs uppercase hover:border-[#8CFF00]/50 transition cursor-pointer"
              >
                CLOSE ACTIVATION
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-mono text-[#8CFF00] animate-pulse">
              SYNCHRONIZING INTERNAL CORES...
            </p>
            <div className="w-48 h-2 bg-[#071B18] rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-[#8CFF00] animate-pulse w-3/4 rounded-full" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
