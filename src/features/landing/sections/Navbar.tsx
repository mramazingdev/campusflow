import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import { Mail, Award, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { tenant } = useUniversityTheme();

  return (
    <header className="w-full z-50 transition-all font-sans">
      {/* 🏛️ Top Institutional Utility Bar */}
      <div className="w-full bg-slate-950 text-slate-300 text-[11px] font-medium border-b border-slate-900 px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 tracking-wide">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            {tenant?.homepageData?.contactEmail || "support@campusflow.edu.ng"}
          </span>
          <span className="hidden sm:flex items-center gap-1.5 tracking-wide text-slate-400">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            Official Portal Instance
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="tracking-wide">
            System Status:{" "}
            <span className="text-emerald-400 font-bold">Operational</span>
          </span>
        </div>
      </div>

      {/* 🎓 Main University Navigation Header */}
      <div className="w-full bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-900 shadow-sm h-24 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
            {tenant?.theme?.logoPath ? (
              <img
                src={tenant.theme.logoPath}
                alt={`${tenant?.formalName || "University"} Seal`}
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-.554-8.243-1.556m16.486 0a11.962 11.962 0 010 3.112M4.114 8.944a11.962 11.962 0 010 3.112m15.686 0c1.022.395 1.7 1.389 1.7 2.52 0 1.957-2.316 3.543-5.171 3.543-1.127 0-2.17-.246-3.004-.668m-7.34 0C4.346 17.886 3.5 16.892 3.5 15.76c0-1.13.678-2.125 1.7-2.52" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <h2 className="font-black text-base sm:text-lg text-slate-900 dark:text-white tracking-tight uppercase leading-none">
              {tenant?.formalName || "University of Lagos"}
            </h2>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase mt-1.5">
              Knowledge • Honour • Service
            </span>
          </div>
        </div>

        {/* Primary Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          {["Announcements", "Events", "News", "Campus Life"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 dark:after:bg-white hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call to Action */}
        <button
          type="button"
          onClick={() => navigate("/auth/login")}
          className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all active:scale-[0.98]"
        >
          <span>Portal Login</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};