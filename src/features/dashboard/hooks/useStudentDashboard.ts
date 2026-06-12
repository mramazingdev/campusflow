// src/features/dashboard/hooks/useStudentDashboard.ts
import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboard.service';

export const useStudentDashboard = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dashboardService.getDashboardData();
        setData(result);
      } catch (err) {
        console.error("Failed to load dashboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading };
};