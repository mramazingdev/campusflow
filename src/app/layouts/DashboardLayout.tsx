// src/app/layouts/DashboardLayout.tsx
import { Sidebar } from "../../features/dashboard/components/Sidebar";
import { MobileBottomTabbar } from "../../features/dashboard/components/MobileBottomTabbar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="min-h-screen bg-slate-50 md:pl-64">
    {" "}
    {/* Added pl-64 for desktop side gap */}
    <Sidebar />
    <main className="p-4 md:p-8">{children}</main>
    <div className="md:hidden">
      <MobileBottomTabbar />
    </div>
  </div>
);
