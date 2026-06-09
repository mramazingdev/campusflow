// src/features/landing/sections/Footer.tsx
import React from "react";
import { useUniversityTheme } from "@/app/providers/ThemeProvider";
import { Shield, ExternalLink, Copyright, Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  const { tenant } = useUniversityTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    governance: [
      { label: "University Senate", href: "#" },
      { label: "Registry Division", href: "#" },
      { label: "Bursary Directorate", href: "#" },
      { label: "Independent Electoral Panel", href: "#" },
    ],
    portals: [
      { label: "Student Login Workspace", href: "/students/login" },
      { label: "Staff Records Gateway", href: "/university-admin/login" },
      { label: "Apex Cloud Architecture", href: "/super-admin/login" },
    ],
    legal: [
      { label: "Data Protection Policy", href: "#" },
      { label: "Operational Terms of Use", href: "#" },
      { label: "System Security Audit", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 font-sans relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Upper Column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12">
          {/* Brand/Identity Block (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-serif font-black text-lg uppercase tracking-tight">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              {tenant?.name || "CAMPUSFLOW"}
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-sm">
              The official, real-time digital operational infrastructure
              managing student matrices, unified portal access points, and
              administrative workflows.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-slate-400">
              <Terminal className="w-3 h-3 text-emerald-400" />{" "}
              core_build_v2.6.2
            </div>
          </div>

          {/* Links Section 1 (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-black uppercase text-white tracking-widest">
              Governance
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.governance.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 2 (3 Columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-black uppercase text-white tracking-widest">
              Operational Gateways
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.portals.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}{" "}
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 3 (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-black uppercase text-white tracking-widest">
              Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Termination Baseline Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500">
          {/* Copyright Tracker */}
          <div className="flex items-center gap-1 text-center sm:text-left">
            <Copyright className="w-3.5 h-3.5" />
            <span>
              {currentYear}{" "}
              {tenant?.formalName || "University Administration Network"}. All
              rights reserved.
            </span>
          </div>

          {/* Encryption Clearance Token */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/60 rounded-full border border-slate-900 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono tracking-tight uppercase text-[10px]">
              AES-256 State Protected
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
