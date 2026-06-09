// src/features/auth/pages/LoginPage.tsx
'use client';

import React from 'react';
// 1. Import the new layout instead of AuthCard
import  AuthLayout  from '@/app/layouts/AuthLayout'; 
import { LoginForm } from '../components/LoginForm';

export default function LoginPage() {
  return (
    // 2. Wrap the LoginForm in the AuthLayout
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}