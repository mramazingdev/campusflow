// src/features/dashboard/components/attendance/CourseAttendance.tsx
import { BookOpen, ChevronRight } from "lucide-react";

interface CourseAttendance {
  id: string;
  courseCode: string;
  courseTitle: string;
  attendance: number;
}

interface CourseAttendanceProps {
  courses: CourseAttendance[];
}

export const CourseAttendance = ({ courses }: CourseAttendanceProps) => {
  const getStatus = (attendance: number) => {
    if (attendance >= 90)
      return {
        label: "Excellent",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      };

    if (attendance >= 75)
      return {
        label: "Good",
        color: "text-blue-600",
        bg: "bg-blue-50",
      };

    return {
      label: "At Risk",
      color: "text-red-600",
      bg: "bg-red-50",
    };
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Course Attendance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Attendance performance by course.
          </p>
        </div>

        <BookOpen className="h-6 w-6 text-blue-600" />
      </div>

      <div className="space-y-5">
        {courses.map((course) => {
          const status = getStatus(course.attendance);

          return (
            <div
              key={course.id}
              className="rounded-2xl border border-slate-100 p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {course.courseCode}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {course.courseTitle}
                  </p>
                </div>

                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-600">Attendance</span>

                  <span className="font-semibold">{course.attendance}%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{
                      width: `${course.attendance}%`,
                    }}
                  />
                </div>

                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status.bg} ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
