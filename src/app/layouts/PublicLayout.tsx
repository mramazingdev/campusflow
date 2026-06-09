import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider'; //
import { Navbar } from '@/features/landing/sections/Navbar';

export default function PublicLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}