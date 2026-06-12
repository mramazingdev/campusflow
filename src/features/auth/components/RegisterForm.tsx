// src/features/auth/components/RegisterForm.tsx
"use client";

import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { PasswordInput } from "./PasswordInput";
import {
  Search,
  ShieldAlert,
  CheckCircle2,
  Mail,
  ArrowRight,
  ArrowLeft,
  Loader2,
} from "lucide-react";

export const RegisterForm: React.FC = () => {
  const {
    loading,
    errorMsg,
    registrationStep,
    discoveredProfile,
    handleIdentityLookup,
    resetRegistrationWizard,
    advanceToCredentialCreation,
    handleCredentialSubmit,
    backToProfileConfirmation,
    completeVerification,
  } = useAuth();

  const [localRole, setLocalRole] = useState("STUDENT");
  const [searchId, setSearchId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Step 1 Submission Handler (Database Lookup)
  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    // AUTO-FORMATTING LOGIC
    let formattedId = searchId.trim().toUpperCase();

    // If user didn't provide prefix, attempt to add one based on input characteristics
    // or default to a standard format if necessary.
    if (!formattedId.startsWith("JAMB/") && !formattedId.startsWith("MAT/")) {
      // Basic heuristic: If it looks like a long ID, default to JAMB, else MAT
      // Adjust these rules based on your actual data patterns
      if (formattedId.length > 10) {
        formattedId = `JAMB/${formattedId}`;
      } else {
        formattedId = `MAT/${formattedId}`;
      }
    }

    // Pass the correctly formatted ID to your auth hook
    handleIdentityLookup(formattedId);
  };

  return (
    <div className="w-full font-sans">
      {/* ----------------- STEP 1: INITIAL IDENTITY LOOKUP (Personal/Role Select Entry) ----------------- */}
      {registrationStep === "VERIFY_ID" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white uppercase tracking-tight">
              Begin Institutional Onboarding
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              Provide your official registration identifier to scan and verify
              your records.
            </p>
          </div>

          <form onSubmit={handleLookupSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                JAMB Registration Number / Matric ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g., JAMB/56729103AB or MAT/2023/4092"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-slate-900 dark:text-white uppercase placeholder:normal-case focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>
              <p className="text-[10px] text-slate-400 italic leading-relaxed">
                * Note: Freshmen utilize official JAMB formatting to parse
                attributes. Returning streams apply Matric IDs.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-xs font-medium flex gap-2.5 items-start">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest cursor-pointer transition-all disabled:opacity-50 shadow-sm"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Lookup Record</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-600" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-900">
            <p className="text-[11px] text-slate-400">
              Already initialized?{" "}
              <a
                href="/auth/login"
                className="text-slate-900 dark:text-white font-bold underline"
              >
                Log In here
              </a>
            </p>
          </div>
        </div>
      )}
      {/* ----------------- STEP 2: PROFILE DATA CONFIRMATION (Academic Info Stage) ----------------- */}
      {registrationStep === "CONFIRM_PROFILE" && discoveredProfile && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" /> Record Found
            </div>
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white uppercase tracking-tight">
              Confirm Your Profile Info
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              The provided identifier matches the secure institutional system
              record mapped below.
            </p>
          </div>
          {/* Read-Only Academic Info Verification Card */}
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-5 border border-slate-200/60 dark:border-slate-900 grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
            <div className="col-span-2 border-b border-slate-200/40 dark:border-slate-900 pb-2 flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                Database Reference Token
              </span>
              <span className="font-mono text-slate-900 dark:text-slate-200 font-bold">
                {discoveredProfile.id}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                First Name
              </span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {discoveredProfile.firstName}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                Last Name
              </span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {discoveredProfile.lastName}
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                Faculty Allocation
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {discoveredProfile.faculty}
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                Department / Discipline
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {discoveredProfile.department}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                Assigned Cohort Level
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {discoveredProfile.level}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                Active Session
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {discoveredProfile.academicYear}
              </span>
            </div>
          </div>
          {/* --- ADD ROLE SELECTOR HERE --- */}role
          <div className="col-span-2 mt-4">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-2">
              Select Onboarding Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["STUDENT", "DEPUTY GOVERNOR", "GOVERNOR"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setLocalRole(role)} // You'll need to add a local state for this
                  className={`p-3 text-[11px] font-bold rounded-xl border transition-all ${
                    localRole === role
                      ? "border-amber-500 bg-amber-50 text-amber-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
          {/* Step Controls */}
          <div className="flex gap-4">
            <button
              onClick={resetRegistrationWizard}
              className="w-1/3 h-12 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <button
              onClick={advanceToCredentialCreation}
              className="w-2/3 h-12 bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-colors"
            >
              <span>Yes, This Is Me</span>
              <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-600" />
            </button>
          </div>
        </div>
      )}
      {/* ----------------- STEP 3: CREATING SECURITY ACCESS KEYS ----------------- */}
      {registrationStep === "CREATE_ACCOUNT" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white uppercase tracking-tight">
              Secure Your Profile Node
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              Configure your primary communications email and encrypted access
              passphrase keys.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault(); // Stop the page from reloading
              handleCredentialSubmit(email, password, confirmPassword); // Call your function with the state values
            }}
            className="space-y-4"
          >
            {/* Email Field Setup */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                Primary Contact Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="e.g., student@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>
            </div>

            {/* Modular Reusable Passphrase Inputs */}
            <PasswordInput
              label="Choose Access Key Password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordInput
              label="Confirm Access Key Password"
              required
              placeholder="••••••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {errorMsg && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-xs font-medium rounded-xl">
                {errorMsg}
              </div>
            )}

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={backToProfileConfirmation} // Returns visually back to confirmation matrix
                className="w-1/3 h-12 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 h-12 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Initialize Account</span>
                <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-600" />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* --- STEP 4: EMAIL VERIFICATION --- */}
      {registrationStep === "EMAIL_VERIFICATION" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white uppercase tracking-tight">
              Verify Your Email
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              We have sent a verification code to your email address. Please
              enter the code below to complete your onboarding.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              completeVerification(); /* Add your verify code logic here */
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Enter 6-digit code"
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-medium"
            />
            <button
              type="submit"
              className="w-full h-12 bg-slate-950 text-white rounded-xl font-black uppercase tracking-widest"
            >
              Complete Verification
            </button>
          </form>
        </div>
      )}

      {/* --- STEP 5: SUCCESS --- */}
      {registrationStep === "SUCCESS" && (
        <div className="space-y-6 text-center animate-in fade-in duration-500">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500" />
          </div>
          <h2 className="text-xl font-bold ...">Account Initialized</h2>
          <p>
            Your profile has been successfully activated. You may now proceed to
            the student portal.
          </p>
          <a href="/dashboard" className="...">
            Go To Dashboard
          </a>
        </div>
      )}
    </div>
  );
};
