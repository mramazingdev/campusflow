// src/themes/unilag.ts
import type { UniversityTenant } from '@/shared/types/university';

export const unilagTheme: UniversityTenant = {
  id: 'unilag',
  slug: 'unilag',
  name: 'UNILAG',
  formalName: 'University of Lagos',
  domain: 'unilag.edu.ng',
  logoPath: '/assets/logos/unilag-seal.png',
  stats: { 
    enrolledStudents: 55000, 
    activeFaculties: 12, 
    departmentsCount: 84,
    lecturersCount: 1200,
    governorsCount: 45
  },
  theme: {
    primary: '221.2 83.2% 53.3%',
    primaryForeground: '210 40% 98%',
    secondary: '210 40% 96.1%',
    accent: '38.5 91.5% 55.1%',
    radius: '0.375rem',
    fontFamily: 'sans-serif',
    logoPath: '/assets/logos/unilag-seal.png',
    faviconPath: '/favicon.ico',
    heroBannerUrl: '/assets/banners/unilag-hero.jpg'
  },
  // 🟢 Add this block to fix the undefined crash:
  homepageData: {
    welcomeMessage: "The Nation's Pride Operating Hub",
    vcMessage: {
      name: "Professor Folasade Ogunsola",
      photoUrl: "/assets/vc/unilag-vc.jpg",
      statement: "Welcome to the future of automated campus management."
    },
    mission: "To provide a modern, automated hub for academic excellence.",
    vision: "To lead global institutional management through clean tech architecture.",
    contactEmail: "communicationunit@unilag.edu.ng",
    socialLinks: {
      twitter: "https://twitter.com/unilaghq"
    }
  },
  // Default feature flags configured by Super Admin
  features: {
    attendanceModule: true,
    eventsModule: true,
    newsModule: true,
    assignmentsModule: true,
    libraryModule: false,
    paymentsModule: true,
    aiAssistant: true,
    votingSystem: true
  }
};