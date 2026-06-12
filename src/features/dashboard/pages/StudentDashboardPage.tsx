// src/features/dashboard/pages/StudentDashboardPage.tsx
import React from 'react';
import { useStudentDashboard } from '../hooks/useStudentDashboard';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { StatsCards } from '../components/StatsCards';
// ... import other widgets

export const StudentDashboardPage: React.FC = () => {
  const { data, loading } = useStudentDashboard();

  if (loading) return <div>Loading Dashboard...</div>;

  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner name={data.studentInfo.name} />
      <StatsCards stats={data.stats} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widgets go here */}
        <div className="lg:col-span-2">
            {/* AnnouncementsWidget, CoursesWidget, etc. */}
        </div>
        <div className="lg:col-span-1">
            {/* RecentActivities, QuickActions, etc. */}
        </div>
      </div>
    </div>
  );
};