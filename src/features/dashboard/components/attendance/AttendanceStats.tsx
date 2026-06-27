// src/features/dashboard/components/attendance/AttendanceStats.tsx
import { CheckCircle2, XCircle, Clock3, Percent } from "lucide-react";

interface AttendanceStatsProps {
  attendanceRate: number;
  present: number;
  absent: number;
  late: number;
}

export const AttendanceStats = ({
  attendanceRate,
  present,
  absent,
  late,
}: AttendanceStatsProps) => {
  const cards = [
    {
      title: "Attendance Rate",
      value: `${attendanceRate}%`,
      subtitle: "Overall Performance",
      icon: Percent,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Present",
      value: present,
      subtitle: "Lectures Attended",
      icon: CheckCircle2,
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Absent",
      value: absent,
      subtitle: "Lectures Missed",
      icon: XCircle,
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      color: "text-red-600",
    },
    {
      title: "Late",
      value: late,
      subtitle: "Late Arrivals",
      icon: Clock3,
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      color: "text-amber-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`rounded-3xl border border-slate-200 ${card.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm text-slate-500">{card.subtitle}</p>
              </div>

              <div className={`rounded-2xl ${card.iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
