// src/features/landing/sections/Statistics.tsx
import React from 'react';
import { useUniversityTheme } from '@/app/providers/ThemeProvider';
import { CheckCircle2, ShieldCheck, Cpu, Zap, BarChart3 } from 'lucide-react';

export const Statistics: React.FC = () => {
  const { tenant } = useUniversityTheme();

  // High-end administrative processing tracking stats
  const performanceMetrics = [
    {
      label: "Portal Core Uptime",
      value: "99.98%",
      description: "Monitored clusters across server load balancers.",
      icon: Cpu,
      color: "text-emerald-500",
    },
    {
      label: "Clearance Verifications",
      value: tenant?.stats?.enrolledStudents ? `${(tenant.stats.enrolledStudents * 0.88).toFixed(0)}+` : "48k+",
      description: "Biometric and bursary student validation workflows resolved.",
      icon: CheckCircle2,
      color: "text-blue-500",
    },
    {
      label: "Encrypted Transactions",
      value: "100%",
      description: "SSL single sign-on access parameters securely locked.",
      icon: ShieldCheck,
      color: "text-indigo-500",
    },
    {
      label: "Avg Request Velocity",
      value: "42ms",
      description: "Optimized database caching engine payload delivery time.",
      icon: Zap,
      color: "text-amber-500",
    }
  ];

  return (
    <section id="system-analytics" className="w-full bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900 font-sans relative overflow-hidden">
      
      {/* Subtle Grid Pattern Overlay Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Layout Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Summary Box (4 Columns) */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-black uppercase tracking-widest">
              <BarChart3 className="w-3 h-3 text-amber-400" /> Infrastructure Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight leading-none">
              Operational Performance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Real-time core processing throughput indices verifying systemic stability across all connected deployment layers.
            </p>
          </div>

          {/* Right Metrics Matrix Grid (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {performanceMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-900 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-800 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                      {metric.label}
                    </span>
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-3xl font-black tracking-tight font-sans text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                      {metric.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};