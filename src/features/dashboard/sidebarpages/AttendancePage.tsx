import { AttendanceHero } from "../components/attendance/AttendanceHero";
import { ActiveAttendanceSession } from "../components/attendance/ActiveAttendanceSession";
import { AttendanceStats } from "../components/attendance/AttendanceStats";
import { CourseAttendance } from "../components/attendance/CourseAttendance";
import { AttendanceTimeline } from "../components/attendance/AttendanceTimeline";

export const AttendancePage = () => {
  return (
    <div className="space-y-8 p-6 md:p-8">
      <AttendanceHero attendanceRate={85} />
      <AttendanceStats attendanceRate={85} present={17} absent={3} late={2} />
      <ActiveAttendanceSession
        active={true}
        course="MTH101 • Engineering Mathematics"
        lecturer="Dr. A. A. Adewale"
        venue="Lecture Theatre 2"
        startTime="10:00 AM"
        endTime="12:00 PM"
      />
      <CourseAttendance
        courses={[
          {
            id: "1",
            courseCode: "MEE101",
            courseTitle: "Engineering Drawing",
            attendance: 94,
          },
          {
            id: "2",
            courseCode: "MTH101",
            courseTitle: "Engineering Mathematics",
            attendance: 84,
          },
          {
            id: "3",
            courseCode: "PHY101",
            courseTitle: "General Physics",
            attendance: 68,
          },
        ]}
      />
      <AttendanceTimeline
        records={[
          {
            id: "1",
            courseCode: "MTH101",
            courseTitle: "Engineering Mathematics",
            date: "21 June 2026",
            time: "10:12 AM",
            status: "PRESENT",
            method: "QR Scan",
          },
          {
            id: "2",
            courseCode: "PHY101",
            courseTitle: "General Physics",
            date: "20 June 2026",
            time: "8:05 AM",
            status: "LATE",
            method: "QR Scan",
          },
          {
            id: "3",
            courseCode: "MEE101",
            courseTitle: "Engineering Drawing",
            date: "19 June 2026",
            time: "--",
            status: "ABSENT",
            method: "Not Recorded",
          },
        ]}
      />
    </div>
  );
};
