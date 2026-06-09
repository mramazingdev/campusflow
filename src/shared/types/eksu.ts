// src/themes/eksu.ts
import type { UniversityTenant } from '@/shared/types/university';

export const eksuTheme: UniversityTenant = {
  id: 'eksu',
  slug: 'eksu',
  name: 'EKSU',
  formalName: 'Ekiti State University',
  domain: 'eksu.edu.ng',
  logoPath: '/assets/logos/eksu-seal.png',
  stats: { 
    enrolledStudents: 32000, 
    activeFaculties: 9, 
    departmentsCount: 66,
    lecturersCount: 850,
    governorsCount: 32
  },
  theme: {
    primary: '142.1 76.2% 36.3%',
    primaryForeground: '35.5 91.7% 32.9%',
    secondary: '210 40% 96.1%',
    accent: '35.5 91.7% 54.9%',
    radius: '0.5rem',
    fontFamily: 'sans-serif',
    logoPath: '/assets/logos/eksu-seal.png',
    faviconPath: '/favicon.ico',
    heroBannerUrl: '/assets/banners/eksu-hero.jpg'
  },
  // 🟢 Add this block to fix the undefined crash:
  homepageData: {
    welcomeMessage: "Welcome to the EKSU University Portal Hub",
    vcMessage: {
      name: "Professor Edward Olanipekun",
      photoUrl: "/assets/vc/eksu-vc.jpg",
      statement: "Knowledge, Honour, and Service digitized."
    },
    mission: "To produce globally competitive graduates sustained by modern portals.",
    vision: "To be a top-rate university built on seamless digital integration.",
    contactEmail: "admissions.office@eksu.edu.ng",
    socialLinks: {
      twitter: "https://twitter.com/eksuhq"
    }
  },
  features: {
    attendanceModule: true,
    eventsModule: true,
    newsModule: true,
    assignmentsModule: false,
    libraryModule: false,
    paymentsModule: true,
    aiAssistant: false,
    votingSystem: false
  }
};