// src/features/dashboard/components/DashboardHeader.tsx

import { Search, Bell, ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  studentName: string;
  department: string;
}

export const DashboardHeader = ({
  studentName,
  department,
}: DashboardHeaderProps) => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search announcements, events..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white">
          <Bell className="h-5 w-5 text-slate-600" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            {studentName.charAt(0)}
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">
              {studentName}
            </p>

            <p className="text-xs text-slate-500">{department}</p>
          </div>

          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
};
