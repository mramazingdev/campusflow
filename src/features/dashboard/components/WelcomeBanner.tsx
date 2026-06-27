// src/features/dashboard/components/WelcomeBanner.tsx
import type { StudentInfo } from "../types/dashboard.types";

interface WelcomeBannerProps {
  studentInfo: StudentInfo;
}

export const WelcomeBanner = ({
  studentInfo,
}: WelcomeBannerProps) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const firstName = studentInfo.name.split(" ")[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-[#041E4D] to-[#0A4D9C] p-8 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-blue-100 text-sm mb-2">
              Student Dashboard
            </p>

            <h1 className="text-3xl font-bold">
              Good Morning, {firstName} 👋
            </h1>

            <p className="mt-2 text-blue-100">
              Welcome back to CampusFlow
            </p>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-blue-100 text-sm">
              {today}
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Faculty
          </p>

          <p className="font-semibold text-slate-900">
            {studentInfo.faculty}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Department
          </p>

          <p className="font-semibold text-slate-900">
            {studentInfo.department}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Level
          </p>

          <p className="font-semibold text-slate-900">
            {studentInfo.level}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Matric Number
          </p>

          <p className="font-semibold text-slate-900">
            {studentInfo.matricNumber}
          </p>
        </div>

      </div>
    </div>
  );
};