// src/app/providers/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Explicitly isolate type-only entries using 'import type' for verbatimModuleSyntax compliance
import type { UniversityTenant } from '@/shared/types/university';
import type { ThemeContextState, ThemeMode } from '@/shared/types/theme';

// 2. Direct absolute mapping down to your src/themes/ destination files
import { unilagTheme } from '@/themes/unilag';
import { eksuTheme } from '@/themes/eksu';

const tenantRegistry: Record<string, UniversityTenant> = {
  unilag: unilagTheme,
  eksu: eksuTheme,
};

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenant, setTenant] = useState<UniversityTenant>(unilagTheme);
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', tenant.theme.primary);
    root.style.setProperty('--primary-foreground', tenant.theme.primaryForeground);
    root.style.setProperty('--accent', tenant.theme.accent);
    root.style.setProperty('--radius', tenant.theme.radius);
    
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [tenant, mode]);

  const switchTenantSimulation = (slug: 'unilag' | 'eksu' | 'lasu' | 'oau' | 'default') => {
    if (tenantRegistry[slug]) {
      setTenant(tenantRegistry[slug]);
    }
  };

  return (
    <ThemeContext.Provider value={{ tenant, mode, setMode, switchTenantSimulation }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useUniversityTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useUniversityTheme must be used within an App ThemeProvider framework');
  return context;
};