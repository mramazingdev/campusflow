// src/features/dashboard/components/attendance/AttendanceTimeline.tsx
import { CheckCircle2, XCircle, Clock3, QrCode } from "lucide-react";

interface AttendanceRecord {
  id: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  time: string;
  status: "PRESENT" | "LATE" | "ABSENT";
  method: string;
}

interface AttendanceTimelineProps {
  records: AttendanceRecord[];
}

export const AttendanceTimeline = ({ records }: AttendanceTimelineProps) => {
  const getStatus = (status: AttendanceRecord["status"]) => {
    switch (status) {
      case "PRESENT":
        return {
          icon: CheckCircle2,
          iconColor: "text-emerald-600",
          bg: "bg-emerald-50",
          badge: "bg-emerald-100 text-emerald-700",
        };

      case "LATE":
        return {
          icon: Clock3,
          iconColor: "text-amber-600",
          bg: "bg-amber-50",
          badge: "bg-amber-100 text-amber-700",
        };

      default:
        return {
          icon: XCircle,
          iconColor: "text-red-600",
          bg: "bg-red-50",
          badge: "bg-red-100 text-red-700",
        };
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Attendance History
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your most recent attendance records.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {records.map((record) => {
          const status = getStatus(record.status);
          const Icon = status.icon;

          return (
            <div key={record.id} className="flex gap-4">
              {/* Timeline Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${status.bg}`}
              >
                <Icon className={`h-6 w-6 ${status.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex-1 border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {record.courseCode}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {record.courseTitle}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${status.badge}`}
                  >
                    {record.status}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                  <span>{record.date}</span>

                  <span>{record.time}</span>

                  <div className="flex items-center gap-2">
                    <QrCode className="h-4 w-4" />
                    {record.method}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
