// src/features/landing/sections/Features.tsx
import React from 'react';
import { useUniversityTheme } from '@/app/providers/ThemeProvider';
import { ShieldCheck, GraduationCap, Vote, Network, Layers, Landmark } from 'lucide-react';

export const Features: React.FC = () => {
  const { tenant } = useUniversityTheme();

  // Core capabilities customized for premium university environments
  const operationalCapabilites = [
    {
      title: "Unified Student Profiles",
      description: "Secure digital wallets managing biometric verification, course enrollment logs, and historical academic transcripts securely.",
      icon: GraduationCap,
    },
    {
      title: "Electoral Control Systems",
      description: "Tamper-proof voting modules built specifically for Student Union Government (SUG) and independent faculty elections.",
      icon: Vote,
    },
    {
      title: "Automated Clearances",
      description: "Linear automated validation across bursary streams, department heads, and library books clearance for graduating sets.",
      icon: ShieldCheck,
    },
    {
      title: "Multi-Tenant Infrastructure",
      description: "Advanced data compartmentalization tailored to preserve the distinct structural identity of individual universities.",
      icon: Network,
    },
    {
      title: "Senate Plenary Oversight",
      description: "Digital administrative logs assisting the registry panel with academic scheduling and processing throughput audits.",
      icon: Landmark,
    },
    {
      title: "Custom Brand Theming",
      description: "Dynamic theme injectors loading institutional palettes, custom welcome banners, and historical mottos instantaneously.",
      icon: Layers,
    }
  ];

  return (
    <section id="platform-features" className="w-full bg-white dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Institutional Capabilities
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            A comprehensive overview of the digital subsystems powering operational efficiency across {tenant?.name || 'our system'} networks.
          </p>
        </div>

        {/* Capabilities 6-Column Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operationalCapabilites.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900/60 bg-slate-50/40 dark:bg-slate-900/20 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all duration-300 group"
              >
                {/* Micro Icon Wrap */}
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-all shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>
                
                {/* Text Content Block */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};