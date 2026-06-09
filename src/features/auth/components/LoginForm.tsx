// src/features/auth/components/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Added for navigation
import { useAuth } from "../hooks/useAuth";
import {
  GraduationCap,
  User,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Headphones,
  Loader2,
  ArrowRight,
} from "lucide-react";

type RoleType = "STUDENT" | "LECTURER" | "ADMIN";

export const LoginForm: React.FC = () => {
  const { loginUser, loading, errorMsg } = useAuth();
  const [activeTab, setActiveTab] = useState<RoleType>("STUDENT");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser({ identifier, accessKey: password });
  };

  const getLabel = () => {
    switch (activeTab) {
      case "STUDENT":
        return "Matric Number";
      case "LECTURER":
        return "Staff ID";
      case "ADMIN":
        return "Admin Access ID";
      default:
        return "Identifier";
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-[32px] border border-slate-100 bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Portal Access
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Welcome Back!
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* Role Tabs */}
        <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200">
          {[
            { id: "STUDENT", label: "STUDENT", icon: GraduationCap },
            { id: "LECTURER", label: "LECTURER", icon: User },
            { id: "ADMIN", label: "ADMIN", icon: Shield },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as RoleType)}
              className={`flex flex-col items-center gap-2 py-6 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#082A63] text-white shadow-lg"
                  : "bg-white text-slate-500 hover:bg-slate-50"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-[10px] sm:text-xs font-bold">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              {getLabel()}
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={`Enter your ${getLabel().toLowerCase()}`}
              className="w-full rounded-2xl border border-slate-200 py-4 sm:py-5 px-6 text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 py-4 sm:py-5 px-6 pr-14 text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password moved before Sign In */}
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {errorMsg && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#041E4D] to-[#082A63] py-4 sm:py-5 font-bold text-white transition-all hover:opacity-95"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                SIGN IN <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        {/* Register Button Section */}
        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-bold text-blue-700 hover:underline"
          >
            Initialize your profile
          </Link>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-slate-500">
              Need help?
            </span>
          </div>
        </div>

        {/* Support Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          {/* ... existing support card content ... */}
          <div className="flex gap-4 items-center">
            <Headphones className="h-10 w-10 text-slate-400" />
            <div>
              <p className="text-sm text-slate-600">
                Contact support for account issues.
              </p>
              <a
                href="mailto:support@unilag.edu.ng"
                className="font-bold text-blue-700"
              >
                support@unilag.edu.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
