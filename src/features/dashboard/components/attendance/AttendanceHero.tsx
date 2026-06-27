// src/features/dashboard/components/attendance/AttendanceHero.tsx

import { ShieldCheck } from "lucide-react";

interface AttendanceHeroProps {
  attendanceRate: number;
}

export const AttendanceHero = ({
  attendanceRate,
}: AttendanceHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#082A63] via-[#0A4A8A] to-[#0077B6] p-8 text-white">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Attendance Center
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            Attendance Tracking
          </h1>

          <p className="mt-4 max-w-xl text-blue-100 leading-7">
            Monitor lecture attendance, view attendance history,
            and scan QR codes for active lecture sessions.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 min-w-[250px]">
          <p className="text-sm text-blue-100">
            Overall Attendance
          </p>

          <h2 className="mt-2 text-6xl font-black">
            {attendanceRate}%
          </h2>

          <div className="mt-6 h-3 rounded-full bg-white/20">
            <div
              className="h-3 rounded-full bg-emerald-400"
              style={{
                width: `${attendanceRate}%`,
              }}
            />
          </div>

          <p className="mt-3 text-sm text-blue-100">
            University Requirement:
            <span className="ml-1 font-semibold text-white">
              75%
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};