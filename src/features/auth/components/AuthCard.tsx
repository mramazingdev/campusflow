// src/features/auth/components/AuthCard.tsx
import React from 'react';
import { useUniversityTheme } from '@/app/providers/ThemeProvider';
import { ShieldCheck, Landmark } from 'lucide-react';

interface AuthCardProps {
  children: React.ReactNode;
  portalRole: string;
  tagline: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, portalRole, tagline }) => {
  const { tenant } = useUniversityTheme();

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-950 font-sans">
      
      {/* Left Column: Premium Brand Panel */}
      <div className="hidden lg:flex lg:col-span-5 bg-slate-950 text-white p-12 flex-col justify-between relative overflow-hidden border-r border-slate-900">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Core Identity System Mark: Using Logo or Text Fallback */}
        <div className="relative z-10">
          {tenant?.theme?.logoPath ? (
            <img src={tenant.theme.logoPath} alt="University Logo" className="h-12 w-auto brightness-0 invert" />
          ) : (
            <div className="flex items-center gap-2.5 text-base font-serif font-black uppercase tracking-tight">
              <Landmark className="w-5 h-5 text-amber-500" />
              <span>{tenant?.name || 'CAMPUSFLOW'}</span>
            </div>
          )}
        </div>

        {/* Narrative Block */}
        <div className="space-y-4 relative z-10 max-w-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-black uppercase tracking-widest">
            System Node Encryption Verified
          </span>
          <h1 className="text-3xl font-serif font-black uppercase tracking-tight leading-tight">
            {portalRole}
          </h1>
          <p className="text-xs text-slate-400 font-normal leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Bottom Compliance Line */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-wider relative z-10">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>SECURE ENDPOINT PROTOCOL // BUILD_2026</span>
        </div>
      </div>

      {/* Right Column: Interactive Form Core Placement */}
      <div className="col-span-1 lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-50 dark:bg-slate-950">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm space-y-6">
          
          {/* Added Logo Header for the Form */}
          {tenant?.theme?.logoPath && (
            <div className="flex justify-center mb-6">
              <img src={tenant.theme.logoPath} alt="Logo" className="h-16 w-auto object-contain" />
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};