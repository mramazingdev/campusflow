// src/features/dashboard/components/attendance/ActiveAttendanceSession.tsx
import { Clock3, MapPin, QrCode, UserCircle2 } from "lucide-react";

interface ActiveAttendanceSessionProps {
  active: boolean;
  course: string;
  lecturer: string;
  venue: string;
  startTime: string;
  endTime: string;
}

export const ActiveAttendanceSession = ({
  active,
  course,
  lecturer,
  venue,
  startTime,
  endTime,
}: ActiveAttendanceSessionProps) => {
  if (!active) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <QrCode className="mx-auto h-12 w-12 text-slate-300" />

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            No Active Attendance Session
          </h2>

          <p className="mt-2 text-slate-500">
            There are currently no attendance sessions available.
            Check back during your lecture period.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
            Live Session
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            {course}
          </h2>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-slate-600">
              <UserCircle2 className="h-5 w-5 text-blue-600" />
              {lecturer}
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <MapPin className="h-5 w-5 text-blue-600" />
              {venue}
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <Clock3 className="h-5 w-5 text-blue-600" />
              {startTime} - {endTime}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center">
          <button className="rounded-2xl bg-[#0077B6] px-8 py-4 font-semibold text-white transition hover:bg-[#023E8A]">
            <div className="flex items-center gap-3">
              <QrCode className="h-5 w-5" />
              Scan QR Code
            </div>
          </button>

          <p className="mt-3 text-center text-sm text-slate-500">
            Scan the QR code displayed by your
            Governor or Lecturer.
          </p>
        </div>
      </div>
    </div>
  );
};