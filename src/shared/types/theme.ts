// src/shared/types/theme.ts
import type { UniversityTenant } from '@/shared/types/university'; // 🟢 Added this line

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextState {
  tenant: UniversityTenant;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  switchTenantSimulation: (slug: 'unilag' | 'eksu' | 'lasu' | 'oau' | 'default') => void;
}