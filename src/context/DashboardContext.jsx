import React, { createContext, useState, useEffect, useContext } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState({
    totalDevices: 100,
    liveDevices: 85,
    activeUsers: 45,
    userHistory: 230,
    criticalDevices: 5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live updates
      setData(prev => ({
        ...prev,
        liveDevices: Math.floor(Math.random() * 100),
        activeUsers: Math.floor(Math.random() * 50),
        criticalDevices: Math.floor(Math.random() * 10)
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => useContext(DashboardContext);
