// src/features/dashboard/components/UpcomingAssignmentsWidget.tsx
import type { Assignment } from "../types/dashboard.types";

interface Props {
  assignments: Assignment[];
}

export const UpcomingAssignmentsWidget = ({ assignments }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Upcoming Assignments
          </h3>

          <p className="text-sm text-slate-500">Track pending coursework</p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  {assignment.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {assignment.course}
                </p>
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Due Soon
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">Submission Deadline</span>

              <span className="font-medium text-slate-900">
                {assignment.dueDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
