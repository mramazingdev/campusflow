// src/features/auth/types/auth.types.ts

export type UserRole = 'STUDENT' | 'STAFF_ADMIN' | 'APEX_SUPER';

export interface PreLoadedStudentProfile {
  id: string; // JAMB Reg No or Matric ID
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  level: string;
  academicYear: string;
  currentSemester: string;
  entryType: string;
}

export interface UserSession {
  uid: string;
  email: string;
  role: UserRole;
  token: string;
  associatedProfile?: PreLoadedStudentProfile;
}