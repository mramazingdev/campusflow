// src/features/dashboard/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  ClipboardList, 
  FileText, 
  Bell, 
  User 
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: CalendarCheck, label: 'Attendance', path: '/attendance' },
    { icon: ClipboardList, label: 'Assignments', path: '/assignments' },
    { icon: FileText, label: 'Materials', path: '/materials' },
    { icon: CalendarCheck, label: 'Timetable', path: '/timetable' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-slate-950 fixed left-0 top-0 z-50">
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-tight">CampusFlow</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold">JD</div>
          <div>
            <p className="text-sm font-bold">John Daniel</p>
            <p className="text-xs text-slate-500">21/ENG/0234</p>
          </div>
        </div>
      </div>
    </aside>
  );
};