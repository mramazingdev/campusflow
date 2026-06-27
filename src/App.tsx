import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/features/landing/pages/LandingPage';
import  LoginPage  from '@/features/auth/pages/LoginPage'; // Adjust path if needed
import  RegisterPage  from '@/features/auth/pages/RegisterPage';
import { StudentDashboardPage } from './features/dashboard/pages/StudentDashboardPage';
import { DashboardLayout } from '@/app/layouts/DashboardLayout'
import { CoursesPage } from '@/features/dashboard/sidebarpages/CoursesPage';
import { AttendancePage } from './features/dashboard/sidebarpages/AttendancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        
        {/* Wrap the dashboard in the layout */}
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout>
              <StudentDashboardPage />
            </DashboardLayout>
          } 
        />

        {/* Add the Courses Route here */}
        <Route 
          path="/courses" 
          element={
            <DashboardLayout>
              <CoursesPage />
            </DashboardLayout>
          } 
        />

        {/* Add the Attendance Route here */}
        <Route 
          path="/attendance" 
          element={
            <DashboardLayout>
              <AttendancePage />
            </DashboardLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;