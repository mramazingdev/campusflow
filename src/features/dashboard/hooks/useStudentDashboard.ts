import { useEffect, useState } from "react";
import { dashboardService } from "../services/dashboard.service";
import type { DashboardData } from "../types/dashboard.types";

export const useStudentDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const result = await dashboardService.getDashboardData();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return {
    data,
    loading,
  };
};