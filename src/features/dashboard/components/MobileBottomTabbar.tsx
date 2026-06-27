// src/features/dashboard/components/MobileBottomTabbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  ClipboardList, 
  User 
} from 'lucide-react';

export const MobileBottomTabbar: React.FC = () => {
  const tabs = [
    { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: CalendarCheck, label: 'Attend', path: '/attendance' },
    { icon: ClipboardList, label: 'Tasks', path: '/assignments' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 py-2 px-4 flex justify-between items-center z-50">
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 ${
              isActive ? 'text-indigo-600' : 'text-slate-400'
            }`
          }
        >
          <tab.icon size={22} />
          <span className="text-[10px] font-medium">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};