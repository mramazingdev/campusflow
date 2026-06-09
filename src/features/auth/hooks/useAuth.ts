// src/features/auth/hooks/useAuth.ts
import { useState } from 'react';
import type { UserRole, PreLoadedStudentProfile, UserSession } from '../types/auth.types';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const [session, setSession] = useState<UserSession | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('STUDENT');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // Registration specific step state tracking
  const [registrationStep, setRegistrationStep] = useState<'VERIFY_ID' | 'CONFIRM_PROFILE' | 'CREATE_ACCOUNT'>('VERIFY_ID');
  const [discoveredProfile, setDiscoveredProfile] = useState<PreLoadedStudentProfile | null>(null);

  /**
   * Triggers the real-time database scan via authService.
   * If an institutional record is matched, auto-fills student attributes.
   */
  const handleIdentityLookup = async (identifier: string) => {
    if (!identifier.trim()) return;
    
    setLoading(true);
    setErrorMsg('');
    
    try {
      const profile = await authService.lookupStudentIdentity(identifier);
      setDiscoveredProfile(profile);
      setRegistrationStep('CONFIRM_PROFILE');
    } catch (err: unknown) { // 🟢 Change from 'any' to 'unknown'
      // 🛡️ Safely extract error string properties
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Failed to resolve identifier due to an unhandled system fault.');
      }
      setDiscoveredProfile(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Resets the multi-step registration tracking backward
   */
  const resetRegistrationWizard = () => {
    setRegistrationStep('VERIFY_ID');
    setDiscoveredProfile(null);
    setErrorMsg('');
  };

  /**
   * Sets the active wizard pointer forward to the security key step
   */
  const advanceToCredentialCreation = () => {
    setRegistrationStep('CREATE_ACCOUNT');
  };

  /**
   * Standard secure login handler sequence
   */
  const loginUser = async (credentials: { identifier: string; accessKey: string }) => {
    setLoading(true);
    setErrorMsg('');
    
    try {
      // Simulate login latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Setting up mock successful session state parameters
      const mockSession: UserSession = {
        uid: 'usr_' + Math.random().toString(36).substr(2, 9),
        email: `${credentials.identifier.toLowerCase().replace('/', '_')}@university.edu.ng`,
        role: activeRole,
        token: 'jwt_mock_handshake_bearer_token'
      };

      setSession(mockSession);
      return mockSession;
    } catch (err: unknown) { // 🟢 Change from 'any' to 'unknown'
      // 🛡️ Safely extract error string properties
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Invalid authentication parameters provided.');
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setSession(null);
    resetRegistrationWizard();
  };

  return {
    session,
    activeRole,
    loading,
    errorMsg,
    registrationStep,
    discoveredProfile,
    setActiveRole,
    setErrorMsg,
    handleIdentityLookup,
    resetRegistrationWizard,
    advanceToCredentialCreation,
    loginUser,
    logoutUser
  };
};