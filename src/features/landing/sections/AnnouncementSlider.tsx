// src/features/landing/sections/AnnouncementSlider.tsx
import React from "react";
import { Megaphone, AlertCircle, Calendar } from "lucide-react";

export const AnnouncementSlider: React.FC = () => {
  const alerts = [
    {
      text: "First Semester Course Registration closes finally on June 15th, 2026.",
      icon: AlertCircle,
      type: "critical",
    },
    {
      text: "Faculty Student Election Portals open this Thursday at 08:00 WAT.",
      icon: Megaphone,
      type: "info",
    },
    {
      text: "Official Student Week Activities scheduled to commence from July 10th.",
      icon: Calendar,
      type: "info",
    },
    {
      text: "Bursary clearance validation for final year cohorts now streaming live.",
      icon: AlertCircle,
      type: "critical",
    },
  ];

  // Duplicate the array to create a seamless infinite loop track
  const tickerItems = [...alerts, ...alerts];

  return (
    <div className="w-full bg-slate-950 text-white h-12 border-b border-slate-900 flex items-center overflow-hidden select-none z-30 relative">
      {/* 🔮 Embedded Self-Contained Styles to force immediate hardware-accelerated movement */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customMarquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50%, 0); }
        }
        .force-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: customMarquee 35s linear infinite;
          
          /* 🎯 Text Sharpness & Blurring Fixes */
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-font-smoothing: subpixel-antialiased;
          -moz-osx-font-smoothing: auto;
          font-rendering: optimizeLegibility;
        }
        .force-marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 🏷️ Fixed Operational Label Tag */}
      <div className="absolute left-0 top-0 bottom-0 bg-red-600 px-4 flex items-center gap-2 z-40 shadow-[4px_0_12px_rgba(0,0,0,0.5)]">
        <span className="animate-pulse w-2 h-2 rounded-full bg-white" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white">
          Live Updates
        </span>
      </div>

      {/* 🚀 Infinite Rolling Track Layer powered by our custom layout style */}
      <div className="force-marquee-track pl-36">
        {tickerItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 mx-8 text-xs font-medium tracking-wide text-slate-200"
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${item.type === "critical" ? "text-red-400" : "text-amber-400"}`}
              />
              <span>{item.text}</span>
              <span className="text-slate-700 font-bold ml-6">//</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
