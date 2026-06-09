// src/features/auth/services/auth.service.ts
import type { PreLoadedStudentProfile } from '../types/auth.types';

export const authService = {
  /**
   * Scans pre-loaded institutional archives to match against JAMB Reg or Matric strings.
   * Auto-fills student attributes upon verification match.
   */
  async lookupStudentIdentity(identifier: string): Promise<PreLoadedStudentProfile> {
    // Simulate real network/database latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const cleanId = identifier.toUpperCase().trim();

    // Verify structural configuration formats
    const isJamb = cleanId.startsWith('JAMB/');
    const isMatric = cleanId.startsWith('MAT/');

    if (!isJamb && !isMatric) {
      throw new Error(
        "Invalid format structure. Student identifiers must start explicitly with 'JAMB/' or 'MAT/'."
      );
    }

    // Mock database lookup payload results
    if (isJamb) {
      return {
        id: cleanId,
        firstName: "Oluwaseun",
        lastName: "Adebayo",
        faculty: "Faculty of Engineering",
        department: "Computer Engineering",
        level: "100 Level",
        academicYear: "2025/2026",
        currentSemester: "First Semester",
        entryType: "Freshman (UTME)"
      };
    } else {
      return {
        id: cleanId,
        firstName: "Chidi",
        lastName: "Okonkwo",
        faculty: "Faculty of Science",
        department: "Computer Science",
        level: "300 Level",
        academicYear: "2025/2026",
        currentSemester: "First Semester",
        entryType: "Returning Stream"
      };
    }
  }
};