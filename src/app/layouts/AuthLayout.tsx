import React from "react";
import UnilagLogo from "@/assets/logos/unilag-logo.png";
import UnilagBg from "@/assets/images/backgrounds/Unilagbackground.png";
import { ShieldCheck } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    // 1. Ensure min-h-screen and flex-col are top-level
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f4f6f9]">
      {/* LEFT PANEL */}
      {/* 2. Remove 'hidden' so it renders on mobile. 
          Use 'w-full' for mobile and 'lg:w-1/2' for desktop */}
      <div className="relative hidden xl:flex xl:w-1/2 overflow-hidden min-h-screen">
        <img
          src={UnilagBg}
          alt="University Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021B45]/95 via-[#021B45]/80 to-[#021B45]/50" />

        <div className="relative z-10 flex h-full flex-col justify-center px-8 lg:px-20 py-12 text-white">
          <img
            src={UnilagLogo}
            alt="University Logo"
            className="mb-6 w-20 lg:mb-8 lg:w-32"
          />
          <h1 className="text-3xl lg:text-6xl font-bold leading-none tracking-tight">
            UNIVERSITY
            <br />
            OF LAGOS
          </h1>
          <div className="mt-6 mb-6 h-1 w-12 lg:w-16 rounded bg-amber-400" />
          <p className="mb-6 lg:mb-10 text-lg lg:text-2xl font-medium text-amber-400">
            IN DEED AND IN TRUTH
          </p>

          <p className="hidden lg:block max-w-md text-lg leading-8 text-slate-200">
            Welcome to the University of Lagos Student Portal. Access academic
            services, announcements, events and institutional resources
            securely.
          </p>

          <div className="mt-8 lg:mt-16 flex items-center gap-3 text-xs lg:text-sm text-slate-300">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            <div>
              <p className="font-semibold uppercase tracking-wider">
                Secure Login Protected
              </p>
              <p className="text-slate-400">Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex w-full lg:flex-1 items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 lg:p-12">
        <div className="w-full max-w-2xl">
          {/* Mobile / Tablet Branding */}
          <div className="xl:hidden mb-8 text-center">
            <img
              src={UnilagLogo}
              alt="University Logo"
              className="mx-auto mb-4 w-20"
            />

            <h2 className="text-2xl font-bold text-slate-900">
              University of Lagos
            </h2>

            <p className="text-slate-500">Student Portal Access</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
