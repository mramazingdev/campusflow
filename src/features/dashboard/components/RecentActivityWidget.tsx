// src/features/dashboard/components/RecentActivityWidget.tsx

import { Bell, CalendarDays, FileText, ClipboardCheck } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  type: "announcement" | "event" | "assignment" | "attendance";
  time: string;
}

interface RecentActivityWidgetProps {
  activities: Activity[];
}

export const RecentActivityWidget = ({
  activities,
}: RecentActivityWidgetProps) => {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "announcement":
        return <Bell className="h-4 w-4 text-blue-600" />;

      case "event":
        return <CalendarDays className="h-4 w-4 text-purple-600" />;

      case "assignment":
        return <FileText className="h-4 w-4 text-orange-600" />;

      case "attendance":
        return <ClipboardCheck className="h-4 w-4 text-emerald-600" />;

      default:
        return <Bell className="h-4 w-4 text-slate-600" />;
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>

          <p className="text-sm text-slate-500">
            Latest updates across your portal
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4"
          >
            <div className="mt-1">{getIcon(activity.type)}</div>

            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">
                {activity.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
