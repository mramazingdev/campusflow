// src/constants/mockTenants.ts
import { UniversityTenant, AnnouncementItem, UniversityNews, CampusEvent } from '../types/tenant';

export const MOCK_UNIVERSITIES: Record<string, UniversityTenant> = {
  unilag: {
    id: "univ_unilag_001",
    slug: "unilag",
    name: "UNILAG",
    formalName: "University of Lagos",
    logoUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=120&auto=format&fit=crop&q=80", // Simulated institutional seal
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80",
    stats: { activeStudents: 45000, facultyCount: 12, departmentsCount: 84 },
    theme: {
      primary: "221.2 83.2% 53.3%", // Deep Deep Blue
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96.1%",
      accent: "38.5 91.5% 55.1%", // Warm Gold
      radius: "0.375rem" // Conservative, structured corners
    }
  },
  eksu: {
    id: "univ_eksu_002",
    slug: "eksu",
    name: "EKSU",
    formalName: "Ekiti State University",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&auto=format&fit=crop&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=80",
    stats: { activeStudents: 28000, facultyCount: 9, departmentsCount: 62 },
    theme: {
      primary: "142.1 76.2% 36.3%", // Emerald Academic Green
      primaryForeground: "35.5 91.7% 32.9%",
      secondary: "210 40% 96.1%",
      accent: "35.5 91.7% 54.9%", // Bright Gold
      radius: "0.5rem"
    }
  }
};

export const MOCK_ANNOUNCEMENTS: AnnouncementItem[] = [
  { id: "1", title: "Senate Approves First Semester Revised Academic Calendar", category: "academic", timestamp: "2 hours ago", isUrgent: true },
  { id: "2", title: "Biometric Attendance Portal Optimization Framework Initiated", category: "administrative", timestamp: "5 hours ago", isUrgent: false },
  { id: "3", title: "Inter-Faculty Leadership Summit & Governance Orientation Scheduled", category: "academic", timestamp: "1 day ago", isUrgent: false }
];

export const MOCK_NEWS: UniversityNews[] = [
  { id: "n1", title: "Research Grant Expansion: Driving Technical Innovation", excerpt: "The university board extends funding for collaborative software architecture paradigms and web development tracking metrics.", publishDate: "June 07, 2026", coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80", category: "Research" },
  { id: "n2", title: "Elected Student Governor Delegation Takes Official Oath", excerpt: "The newly sworn-in institutional student governors layout strategies to optimize internal cross-departmental operations.", publishDate: "June 04, 2026", coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80", category: "Governance" }
];

export const MOCK_EVENTS: CampusEvent[] = [
  { id: "e1", title: "Faculty Technology Symposium", date: "June 18, 2026", location: "Main Convocation Hall", audience: "All Levels" },
  { id: "e2", title: "Mid-Term Academic Coordination Audit", date: "June 22, 2026", location: "Senate Chambers", audience: "Faculty Only" }
];