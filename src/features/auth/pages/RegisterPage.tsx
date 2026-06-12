// src/features/auth/pages/RegisterPage.tsx
'use client';

import React from 'react';
import AuthLayout from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-lg mx-auto bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        
        {/* Header Section */}
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Student Onboarding
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Create Your Profile
          </h1>
          <p className="mt-3 text-slate-500">
            Verify your database entry coordinates to activate your student portal profile.
          </p>
        </div>

        <RegisterForm />

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="font-bold text-blue-700 hover:underline">
            Sign in here
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}