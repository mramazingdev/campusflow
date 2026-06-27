// src/features/dashboard/components/QuickActions.tsx
import {
  Calendar,
  ClipboardCheck,
  BookOpen,
  FileText,
  Clock,
  GraduationCap,
} from "lucide-react";

const actions = [
  {
    title: "Attendance",
    description: "View attendance records",
    icon: ClipboardCheck,
  },
  {
    title: "Assignments",
    description: "Pending submissions",
    icon: FileText,
  },
  {
    title: "Course Materials",
    description: "Access learning resources",
    icon: BookOpen,
  },
  {
    title: "Academic Calendar",
    description: "Semester schedule",
    icon: Calendar,
  },
  {
    title: "Timetable",
    description: "Today's lectures",
    icon: Clock,
  },
  {
    title: "Events",
    description: "Campus activities",
    icon: GraduationCap,
  },
];

export const QuickActions = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="text-sm text-slate-500">
          Frequently used student services
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
          >
            <action.icon className="mb-3 h-6 w-6 text-blue-600" />

            <h3 className="font-semibold text-slate-900">
              {action.title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};