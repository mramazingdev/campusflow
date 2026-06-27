// src/features/dashboard/types/dashboard.types.ts

export interface StudentInfo {
  id: string;
  name: string;
  matricNumber: string;
  faculty: string;
  department: string;
  level: string;
  avatar?: string;
}

export interface DashboardStats {
  attendance: number;
  assignmentsDue: number;
  announcements: number;
  classesToday: number;
}

export interface AttendanceSummary {
  percentage: number;
  present: number;
  absent: number;
  late: number;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  type: "IMPORTANT" | "GENERAL";
  createdAt: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
}

export interface Event {
  id: string;
  title: string;
  venue: string;
  date: string;
}

export interface DashboardData {
  studentInfo: StudentInfo;
  stats: DashboardStats;
  attendanceSummary: AttendanceSummary;
  announcements: Announcement[];
  assignments: Assignment[];
  upcomingEvents: Event[];
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  type: "announcement" | "event" | "assignment" | "attendance";
  time: string;
}