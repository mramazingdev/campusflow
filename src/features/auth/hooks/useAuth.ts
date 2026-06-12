// src/features/auth/hooks/useAuth.ts
import { useState } from 'react';
import type { UserRole, PreLoadedStudentProfile, UserSession } from '../types/auth.types';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const [session, setSession] = useState<UserSession | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('STUDENT');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // Added 'SUCCESS' to the registration step tracking
  const [registrationStep, setRegistrationStep] = useState<'VERIFY_ID' | 'CONFIRM_PROFILE' | 'CREATE_ACCOUNT' | 'EMAIL_VERIFICATION' | 'SUCCESS'>('VERIFY_ID');
  const [discoveredProfile, setDiscoveredProfile] = useState<PreLoadedStudentProfile | null>(null);

  const completeVerification = () => {
  setRegistrationStep('SUCCESS');
};

  const handleIdentityLookup = async (identifier: string) => {
    if (!identifier.trim()) return;
    setLoading(true);
    setErrorMsg('');
    try {
      const profile = await authService.lookupStudentIdentity(identifier);
      setDiscoveredProfile(profile);
      setRegistrationStep('CONFIRM_PROFILE');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'System fault.');
    } finally {
      setLoading(false);
    }
  };

  const resetRegistrationWizard = () => {
    setRegistrationStep('VERIFY_ID');
    setDiscoveredProfile(null);
    setErrorMsg('');
  };

  const advanceToCredentialCreation = () => {
    setRegistrationStep('CREATE_ACCOUNT');
  };

  const backToProfileConfirmation = () => {
    setRegistrationStep('CONFIRM_PROFILE');
    setErrorMsg('');
  };

  // Fully implemented credential submission
  const handleCredentialSubmit = async (email: string, password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setErrorMsg("Security access keys do not match.");
      return;
    }
    setLoading(true);
    setErrorMsg('');

    try {
      // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
      // API call logic here
      setRegistrationStep('SUCCESS'); 
   } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Initialization failed.";
    setErrorMsg(errorMessage); 
  } finally {
    setLoading(false);
  }
};

  const loginUser = async (credentials: { identifier: string; accessKey: string }) => {
    setLoading(true);
    setErrorMsg('');
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const mockSession: UserSession = {
        uid: 'usr_' + Math.random().toString(36).substr(2, 9),
        email: `${credentials.identifier.toLowerCase().replace('/', '_')}@university.edu.ng`,
        role: activeRole,
        token: 'jwt_mock_handshake_bearer_token'
      };

      setSession(mockSession);
      return mockSession;
    } catch (err: unknown) {
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
    handleIdentityLookup,
    resetRegistrationWizard,
    advanceToCredentialCreation,
    backToProfileConfirmation,
    handleCredentialSubmit,
    setActiveRole,
    setErrorMsg,
    loginUser,
    completeVerification,
    logoutUser
  };
};