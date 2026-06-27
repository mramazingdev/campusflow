// src/features/dashboard/pages/StudentDashboardPage.tsx
import React from "react";
import { useStudentDashboard } from "../hooks/useStudentDashboard"; // Import your hook
import { DashboardHeader } from "../components/DashboardHeader";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { StatsCards } from "../components/StatsCards";
import { AnnouncementsWidget } from "../components/AnnouncementsWidget";
import { AttendanceWidget } from "../components/AttendanceWidget";
import { UpcomingAssignmentsWidget } from "../components/UpcomingAssignmentsWidget";
import { QuickActions } from "../components/QuickActions";
import { UpcomingEventsWidget } from "../components/UpcomingEventsWidget";
import { RecentActivityWidget } from "../components/RecentActivityWidget";

export const StudentDashboardPage: React.FC = () => {
  const { data, loading } = useStudentDashboard();

  // The critical safety check to prevent the TypeError
  if (loading || !data) {
    return <div className="p-10 text-center">Loading portal...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Pass data to components */}
        <DashboardHeader
          studentName={data.studentInfo.name}
          department={data.studentInfo.department}
        />
        <WelcomeBanner studentInfo={data.studentInfo} />
        <StatsCards stats={data.stats} />
        <QuickActions />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AnnouncementsWidget announcements={data.announcements} />
            <UpcomingAssignmentsWidget assignments={data.assignments} />
          </div>

          <div className="space-y-6">
            <AttendanceWidget summary={data.attendanceSummary} />

            <UpcomingEventsWidget events={data.upcomingEvents} />
            
            <RecentActivityWidget activities={data.activities} />
          </div>
        </div>
      </div>
    </div>
  );
};
