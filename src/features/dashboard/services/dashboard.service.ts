// src/features/dashboard/services/dashboard.service.ts
import type { DashboardData } from "../types/dashboard.types";

export const dashboardService = {
  getDashboardData: async (): Promise<DashboardData> => {
    return {
      studentInfo: {
        id: "1",
        name: "Samuel Olabunmi",
        matricNumber: "MEE/25/1044",
        faculty: "Engineering",
        department: "Mechanical Engineering",
        level: "100 Level",
      },

      stats: {
        attendance: 85,
        assignmentsDue: 4,
        announcements: 6,
        classesToday: 3,
      },

      attendanceSummary: {
  percentage: 85,
  present: 17,
  absent: 3,
  late: 2,
},

      announcements: [
        {
          id: "1",
          title: "Course Registration Deadline",
          description:
            "All students must complete course registration before Friday.",
          type: "IMPORTANT",
          createdAt: "2 hours ago",
        },

        {
          id: "2",
          title: "Faculty Orientation Meeting",
          description:
            "All freshmen are expected to attend the orientation session.",
          type: "GENERAL",
          createdAt: "5 hours ago",
        },
      ],

      assignments: [
        {
          id: "1",
          title: "Engineering Drawing Assignment",
          course: "MEE101",
          dueDate: "2026-06-20",
        },

        {
          id: "2",
          title: "Mathematics Problem Set",
          course: "MTH101",
          dueDate: "2026-06-22",
        },
      ],

      upcomingEvents: [
        {
          id: "1",
          title: "Engineering Summit",
          venue: "Main Auditorium",
          date: "2026-06-25",
        },

        {
          id: "2",
          title: "Student Union Meeting",
          venue: "Conference Hall",
          date: "2026-06-28",
        },
      ],

      activities: [
  {
    id: "1",
    title: "New announcement posted by Faculty of Engineering",
    type: "announcement",
    time: "20 minutes ago",
  },

  {
    id: "2",
    title: "Engineering Summit registration opened",
    type: "event",
    time: "1 hour ago",
  },

  {
    id: "3",
    title: "Engineering Drawing assignment uploaded",
    type: "assignment",
    time: "Yesterday",
  },

  {
    id: "4",
    title: "Attendance recorded for MEE101",
    type: "attendance",
    time: "Yesterday",
  },
],

      
    };
  },
};