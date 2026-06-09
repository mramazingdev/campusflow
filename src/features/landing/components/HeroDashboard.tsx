// src/features/landing/components/HeroDashboard.tsx
import React from 'react';
import { useUniversityTheme } from '../../../app/providers/ThemeProvider';
import { QrCode, ShieldAlert, Cpu, BarChart3, Radio } from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  const { tenant } = useUniversityTheme();

  return (
    <div className="relative mx-auto max-w-2xl bg-slate-950 rounded-2xl shadow-2xl border border-slate-800/80 p-4 overflow-hidden select-none">
      
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500/30"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500/30"></div>
          <span className="text-[10px] font-mono text-slate-600 ml-2">tenant_core_instance.sys</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono">
          <Radio className="w-3 h-3 text-red-500 animate-pulse" />
          <span className="text-slate-400">Live Infrastructure Matrix</span>
        </div>
      </div>

      {/* Mock Grid Workspace Application Wrapper */}
      <div className="grid grid-cols-12 gap-4">
        {/* Isolated App Sidebar */}
        <div className="col-span-3 space-y-2 border-r border-slate-900/60 pr-3">
          <div className="h-5 w-full rounded bg-slate-900/40"></div>
          <div 
            className="h-5 w-full rounded bg-slate-900/80 flex items-center px-1.5 text-[9px] font-bold text-white transition-all"
            style={{ borderLeft: `2px solid hsl(${tenant.theme.primary})`, color: `hsl(${tenant.theme.primary})` }}
          >
            Core Overview
          </div>
          <div className="h-5 w-4/5 rounded bg-slate-900/40"></div>
          <div className="h-5 w-full rounded bg-slate-900/40"></div>
          <div className="h-5 w-3/4 rounded bg-slate-900/40"></div>
        </div>

        {/* Main Content Pane */}
        <div className="col-span-9 space-y-4">
          {/* Main Attendance Module Simulated Widget Layout */}
          <div className="p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/60 rounded-xl flex flex-col justify-between h-28">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Automated Attendance Logging Matrix[cite: 1]</span>
                <h4 className="text-sm font-bold text-white mt-1 font-serif">Dynamic Secure Verification Terminal[cite: 1]</h4>
              </div>
              <div className="p-1.5 bg-slate-900 rounded-md border border-slate-800">
                <QrCode className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Simulated Live Analytics Percentage Tracking Indicator */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-400">Faculty Cohort Scans Verified</span>
                <span className="font-bold" style={{ color: `hsl(${tenant.theme.primary})` }}>78%</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="h-full transition-all duration-500" style={{ backgroundColor: `hsl(${tenant.theme.primary})`, width: '78%' }}></div>
              </div>
            </div>
          </div>

          {/* Lower Module Stat Split Widgets */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/40 border border-slate-900 rounded-lg p-3 flex items-center justify-between">
              <div>
                <span className="text-[8px] text-slate-500 block uppercase font-bold tracking-wider">System Security</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">Audit Logs Clear</span>
              </div>
              <Cpu className="w-3.5 h-3.5 text-slate-600" />
            </div>
            <div className="bg-slate-900/40 border border-slate-900 rounded-lg p-3 flex items-center justify-between">
              <div>
                <span className="text-[8px] text-slate-500 block uppercase font-bold tracking-wider">Active Handshakes</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">100% Operational</span>
              </div>
              <BarChart3 className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};