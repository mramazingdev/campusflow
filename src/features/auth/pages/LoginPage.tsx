// src/features/auth/pages/LoginPage.tsx
'use client';

import React from 'react';
import  AuthLayout  from '../components/AuthLayout'; 
import { LoginForm } from '../components/LoginForm';

export default function LoginPage() {
  return (
    // 2. Wrap the LoginForm in the AuthLayout
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}