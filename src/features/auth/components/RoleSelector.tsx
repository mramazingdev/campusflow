// src/features/auth/components/RoleSelector.tsx
import React from 'react';
import type { UserRole } from '../types/auth.types';
import { GraduationCap, UserCheck, ShieldAlert } from 'lucide-react';

interface RoleSelectorProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ activeRole, onRoleChange }) => {
  
  const roleTabs = [
    {
      id: 'STUDENT' as UserRole,
      label: 'Student',
      icon: GraduationCap,
      description: 'Access academic panels'
    },
    {
      id: 'STAFF_ADMIN' as UserRole,
      label: 'Staff Portal',
      icon: UserCheck,
      description: 'Faculty management'
    },
    {
      id: 'APEX_SUPER' as UserRole,
      label: 'Apex Super',
      icon: ShieldAlert,
      description: 'Infrastructure control'
    }
  ];

  return (
    <div className="w-full space-y-2 font-sans">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
        Select Gateway Access Node
      </label>
      
      <div className="grid grid-cols-3 gap-2.5">
        {roleTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeRole === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onRoleChange(tab.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-sm scale-[1.02]'
                  : 'bg-slate-50/60 dark:bg-slate-950/40 border-slate-200/80 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 transition-transform ${isSelected ? 'scale-110 text-amber-500 dark:text-amber-600' : 'text-slate-400'}`} />
              <span className="text-[11px] font-bold tracking-tight block uppercase">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};