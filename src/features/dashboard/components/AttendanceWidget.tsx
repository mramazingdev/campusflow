// src/features/dashboard/components/AttendanceWidget.tsx
import type { AttendanceSummary } from "../types/dashboard.types";

interface AttendanceWidgetProps {
  summary: AttendanceSummary;
}

export const AttendanceWidget = ({ summary }: AttendanceWidgetProps) => {
  const status =
    summary.percentage >= 75
      ? "Excellent Standing"
      : summary.percentage >= 70
        ? "Good Standing"
        : "Attendance Warning";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">Attendance Summary</h3>

        <p className="text-sm text-slate-500">
          Current semester attendance performance
        </p>
      </div>

      {/* Percentage */}
      <div className="mb-6 text-center">
        <h2 className="text-5xl font-black text-slate-900">
          {summary.percentage}%
        </h2>

        <p className="mt-2 text-sm font-medium text-emerald-600">{status}</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs text-slate-500">
          <span>Attendance Rate</span>
          <span>{summary.percentage}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{
              width: `${summary.percentage}%`,
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-3">
          <span className="text-sm font-medium text-slate-700">Present</span>

          <span className="font-bold text-emerald-700">{summary.present}</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-red-50 p-3">
          <span className="text-sm font-medium text-slate-700">Absent</span>

          <span className="font-bold text-red-700">{summary.absent}</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3">
          <span className="text-sm font-medium text-slate-700">Late</span>

          <span className="font-bold text-amber-700">{summary.late}</span>
        </div>
      </div>

      {/* Insight */}
      <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Academic Requirement
        </p>

        <p className="mt-2 text-sm text-slate-700">
          Students are expected to maintain at least
          <span className="font-semibold"> 70% attendance </span>
          to qualify for examinations.
        </p>
      </div>
    </div>
  );
};
