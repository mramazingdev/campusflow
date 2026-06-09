import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/features/landing/pages/LandingPage';
import  LoginPage  from '@/features/auth/pages/LoginPage'; // Adjust path if needed
import  RegisterPage  from '@/features/auth/pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Landing Page remains the home route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* These new routes tell React to show these pages when the URL changes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;