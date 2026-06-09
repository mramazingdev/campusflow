// src/features/auth/pages/RegisterPage.tsx
'use client';

import React from 'react';
import { AuthCard } from '../components/AuthCard';
import { RegisterForm } from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthCard
      portalRole="Student Onboarding Gateway"
      tagline="Initialize your digital footprint. Verify your structural database entry coordinates using your official JAMB registration number or Matric ID to activate your student core portal profile."
    >
      <RegisterForm />
    </AuthCard>
  );
}