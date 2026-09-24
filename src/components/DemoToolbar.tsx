import { useState } from 'react';
import { RotateCcw, CheckCheck, Sliders, ChevronUp, ChevronDown } from 'lucide-react';

interface DemoToolbarProps {
  onSelectDay: (day: number) => void;
  onCompleteAllDays: () => void;
  onResetDemo: () => void;
  currentDay: number;
  completedCount: number;
}

export const DemoToolbar = ({
  onSelectDay,
  onCompleteAllDays,
  onResetDemo,
  currentDay,
  completedCount
}: DemoToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {isOpen ? (
        <div className="p-4 rounded-2xl bg-[#061513]/95 border border-[#8CFF00]/40 shadow-2xl backdrop-blur-md text-white space-y-3 w-72">
          <div className="flex items-center justify-between border-b border-[#13332D] pb-2">
            <span className="font-bold text-[#8CFF00] flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              DEMO ({completedCount}/30)
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-neutral-400 uppercase font-semibold">PRESET DEMO STATES</span>
            <div className="grid grid-cols-2 gap-1.5">
              {[1, 8, 18, 30].map((dayNum) => (
                <button
                  key={dayNum}
                  onClick={() => onSelectDay(dayNum)}
                  className={`px-2.5 py-1.5 rounded-lg text-left transition ${
                    currentDay === dayNum
                      ? 'bg-[#8CFF00] text-[#020605] font-bold'
                      : 'bg-[#071B18] text-neutral-300 hover:bg-[#13332D]'
                  }`}
                >
                  Day {String(dayNum).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#13332D] space-y-2">
            <button
              onClick={onCompleteAllDays}
              className="w-full py-2 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 font-bold flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <CheckCheck className="w-4 h-4 text-emerald-400" />
              COMPLETE ALL 30 DAYS (100%)
            </button>

            <button
              onClick={onResetDemo}
              className="w-full py-2 px-3 rounded-xl bg-[#071B18] border border-[#13332D] hover:border-rose-500/50 text-neutral-400 hover:text-rose-300 flex items-center justify-center gap-2 transition cursor-pointer text-[11px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              RESET DEMO STATE
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="px-3.5 py-2 rounded-full bg-[#061513]/90 border border-[#8CFF00]/40 text-neutral-200 hover:text-white hover:border-[#8CFF00] shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer"
        >
          <Sliders className="w-3.5 h-3.5 text-[#8CFF00]" />
          <span>DEMO TOOLBAR</span>
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      )}
    </div>
  );
};
