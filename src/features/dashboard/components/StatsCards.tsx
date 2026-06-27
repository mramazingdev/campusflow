// src/features/dashboard/components/StatsCards.tsx
import {
  ClipboardCheck,
  FileText,
  Bell,
  CalendarDays,
} from "lucide-react";

interface StatsProps {
  stats: {
    attendance: number;
    assignmentsDue: number;
    announcements: number;
    classesToday: number;
  };
}

export const StatsCards = ({ stats }: StatsProps) => {
  const cards = [
    {
      title: "Attendance",
      value: `${stats.attendance}%`,
      sub: "This Semester",
      icon: ClipboardCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },

    {
      title: "Assignments Due",
      value: stats.assignmentsDue,
      sub: "Pending Submission",
      icon: FileText,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },

    {
      title: "Announcements",
      value: stats.announcements,
      sub: "New Updates",
      icon: Bell,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },

    {
      title: "Classes Today",
      value: stats.classesToday,
      sub: "Today's Schedule",
      icon: CalendarDays,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                {card.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {card.value}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {card.sub}
              </p>
            </div>

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.bg}`}
            >
              <card.icon
                className={`h-6 w-6 ${card.color}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};