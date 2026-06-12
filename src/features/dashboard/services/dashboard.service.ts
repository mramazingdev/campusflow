// src/features/dashboard/services/dashboard.service.ts
export const dashboardService = {
  getDashboardData: async () => {
    // In a real app, this would be an API call: await fetch('/api/dashboard')
    return {
      studentInfo: { name: "John Doe", dept: "Computer Science" },
      stats: { gpa: 4.5, attendance: 92, activeCourses: 6 },
      announcements: [{ id: 1, title: "Mid-semester break begins..." }],
      upcomingEvents: [{ id: 1, title: "Career Fair", date: "June 20, 2026" }]
    };
  }
};