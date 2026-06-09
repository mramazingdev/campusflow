// src/features/landing/sections/CTA.tsx
import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import {
  LogIn,
  GraduationCap,
  ShieldAlert,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export const CTA: React.FC = () => {
  const { tenant } = useUniversityTheme();

  const accessPortals = [
    {
      role: "Student Portal",
      description:
        "Access course registration, bio-data validation, exams clearance, and results checker frameworks.",
      icon: GraduationCap,
      href: "/auth/login", // 🟢 Pointing to the new auth module
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      role: "Staff / Governor Workspace",
      description:
        "Manage institutional records, plenary voting oversight, and department coordination logs.",
      icon: UserCheck,
      href: "/auth/login", // 🟢 This logic detects Staff via the RoleSelector in the login form
      color:
        "bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
    },
    {
      role: "Apex Super Admin",
      description:
        "System-wide architectural control parameters, multi-tenant deployment managers, and global configurations.",
      icon: ShieldAlert,
      href: "/auth/login", // 🟢 This logic detects Apex via the RoleSelector in the login form
      color: "bg-rose-600 hover:bg-rose-700",
    },
  ];

  return (
    <section
      id="login-gateway"
      className="w-full bg-white dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-900 font-sans relative overflow-hidden"
    >
      {/* 🔮 Top Accent Radial Lights for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Core Layout Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 🏛️ Left Side Text Frame (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
              Secure Single Sign-On
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
              Unified Digital Gateway
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Select your structural operating division to interface with the
              core {tenant?.name || "CampusFlow"} infrastructure. Secure
              multi-factor authentication protocol enforces clearance layers
              based on verified biometric and matrix cohorts.
            </p>
          </div>

          {/* 🚀 Right Side Multi-Role Selection Stack (7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            {accessPortals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300 group hover:shadow-md"
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                        {portal.role}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-normal leading-relaxed max-w-md">
                        {portal.description}
                      </p>
                    </div>
                  </div>

                  {/* Operational Action Button */}
                  <a
                    href={portal.href}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-[11px] font-black uppercase tracking-widest shadow-sm transition-all whitespace-nowrap shrink-0 ${portal.color}`}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Enter</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
