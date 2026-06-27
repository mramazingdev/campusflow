// src/features/dashboard/components/UpcomingEventsWidget.tsx

import {
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  venue: string;
  date: string;
}

interface UpcomingEventsWidgetProps {
  events: Event[];
}

export const UpcomingEventsWidget = ({
  events,
}: UpcomingEventsWidgetProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Upcoming Events
          </h3>

          <p className="text-sm text-slate-500">
            Campus activities and programs
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Events */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-900">
                  {event.title}
                </h4>

                <div className="mt-2 flex flex-col gap-1 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.venue}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {event.date}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                View
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};