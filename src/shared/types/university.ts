// src/shared/types/university.ts

export interface SystemFeatureFlags {
  attendanceModule: boolean;
  eventsModule: boolean;
  newsModule: boolean;
  assignmentsModule: boolean;
  libraryModule: boolean;
  paymentsModule: boolean;
  aiAssistant: boolean;
  votingSystem: boolean;
}

export interface UniversityStats {
  enrolledStudents: number;
  activeFaculties: number;
  departmentsCount: number;
  lecturersCount: number;
  governorsCount: number;
}

export interface InstitutionalBranding {
  primary: string;           // Tailwind HSL or Hex
  primaryForeground: string;
  secondary: string;
  accent: string;
  radius: string;
  fontFamily: string;
  logoPath: string;
  faviconPath: string;
  heroBannerUrl: string;
}

export interface UniversityTenant {
  id: string;
  slug: string; // 'unilag' | 'eksu' | 'lasu'
  name: string;
  formalName: string;
  domain: string;
  
  // Homepage Management entries managed by University Admin
  homepageData: {
    welcomeMessage: string;
    vcMessage: {
      name: string;
      photoUrl: string;
      statement: string;
    };
    mission: string;
    vision: string;
    contactEmail: string;
    socialLinks: {
      twitter?: string;
      linkedin?: string;
    };
  };

  stats: UniversityStats;
  theme: InstitutionalBranding;
  features: SystemFeatureFlags; // Managed by Super Admin via Feature Flags
}