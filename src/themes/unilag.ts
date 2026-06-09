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
    departmentsCount: 84 
  },
  theme: {
    primary: '221.2 83.2% 53.3%',      // Institutional Premium Blue
    primaryForeground: '210 40% 98%',
    secondary: '210 40% 96.1%',        // 🟢 Added to clear the missing property exception
    accent: '38.5 91.5% 55.1%',        // Deep Gold Accent
    radius: '0.375rem'
  }
};