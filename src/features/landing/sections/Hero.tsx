// src/features/landing/sections/Hero.tsx
import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import { ArrowRight, Megaphone, Activity } from "lucide-react";

export const Hero: React.FC = () => {
  const { tenant } = useUniversityTheme();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 🏙️ Massive Background University Image Banner with High-Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={tenant?.theme?.heroBannerUrl || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920"} 
          alt={`${tenant?.name || 'University'} Campus`}
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_ease_infinite]" 
        />
        {/* Deep, professional vignette gradient to guarantee absolute readability for white text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/60" />
      </div>

      {/* 🏛️ Main Content Container */}
      <div className="max-w-6xl mx-auto w-full text-center relative z-10 px-4 sm:px-6 lg:px-8 space-y-8 pt-12">
        
        {/* Institutional Motto or Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-inner animate-in fade-in slide-in-from-top-3 duration-500">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-100">
            {tenant?.name || "CampusFlow"} Central Operating Environment
          </span>
        </div>

        {/* Majestic, Traditional Headline */}
        <div className="space-y-4 animate-in fade-in duration-700">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto drop-shadow-md">
            {tenant?.homepageData?.welcomeMessage || "The Nation's Pride"}
          </h1>
          <p className="text-[11px] sm:text-sm font-bold tracking-[0.3em] text-amber-400 uppercase drop-shadow">
            Knowledge • Honour • Service
          </p>
        </div>

        {/* Subtitle / Focus Statement */}
        <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-sm">
          Connecting students, leaders, and the entire academic community of{" "}
          <span className="font-bold underline decoration-amber-400 decoration-2 underline-offset-4">
            {tenant?.formalName || "our institution"}
          </span>{" "}
          through one unified, real-time digital operational infrastructure.
        </p>

        {/* 🚀 Traditional High-Contrast Button Actions Matrix */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          {/* Action 1: Access Portal */}
          <a
            href="#login-gateway"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-white hover:bg-slate-100 text-slate-950 text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-[0.99]"
          >
            <span>Access Portal</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </a>
          
          {/* Action 2: View Announcements */}
          <a
            href="#announcements"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-transparent hover:bg-white/10 text-white text-xs font-black uppercase tracking-widest border-2 border-white/80 transition-colors"
          >
            <Megaphone className="w-4 h-4 text-amber-400" />
            <span>View Announcements</span>
          </a>
        </div>

        {/* 📊 Grounded Institutional Live Counters Section */}
        <div className="pt-12 max-w-4xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/20">
          <div className="text-center group">
            <p className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
              {tenant?.stats?.enrolledStudents ? `${(tenant.stats.enrolledStudents / 1000).toFixed(0)}k+` : "0k+"}
            </p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mt-1.5 group-hover:text-white transition-colors">
              Enrolled Students
            </p>
          </div>
          <div className="text-center group">
            <p className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
              {tenant?.stats?.activeFaculties || 0}
            </p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mt-1.5 group-hover:text-white transition-colors">
              Academic Faculties
            </p>
          </div>
          <div className="text-center group">
            <p className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
              {tenant?.stats?.governorsCount || 0}
            </p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mt-1.5 group-hover:text-white transition-colors">
              Student Governors
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};