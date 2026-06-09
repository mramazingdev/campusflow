import type { UniversityTenant } from '@/shared/types/university';

export const eksuTheme: UniversityTenant = {
  id: 'eksu',
  name: 'EKSU',
  formalName: 'Ekiti State University',
  slug: 'eksu',
  domain: 'eksu.edu.ng',
  logoPath: '/assets/logos/eksu-seal.png',
  stats: { enrolledStudents: 32000, activeFaculties: 9, departmentsCount: 66 },
  theme: {
    primary: '142.1 76.2% 36.3%',
    primaryForeground: '35.5 91.7% 32.9%',
    secondary: '210 40% 96.1%', // 🟢 Added this to fulfill the type contract
    accent: '35.5 91.7% 54.9%',
    radius: '0.5rem',
  }
};