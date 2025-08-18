import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DeviceContext = createContext();

// Device Provider to provide live data
export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  
  // Simulate live data (you can replace this with your real-time API or WebSocket)
  useEffect(() => {
    const interval = setInterval(() => {
      const newDevice = {
        id: Math.random().toString(),
        name: `Device ${Math.floor(Math.random() * 10) + 1}`,
        parentArea: "Living Room",  
        dewPoint: Math.random() * 30 + 20,
        grains: Math.random() * 20 + 10,
        alert: Math.random() > 0.8 ? true : false,  // Random alert for demonstration
      };
      setDevices(prevDevices => [newDevice, ...prevDevices].slice(0, 5));  // Keep the latest 5 devices
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DeviceContext.Provider value={{ devices, setDevices }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook to access device data
export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevices must be used within a DeviceProvider');
  }
  return context;
};
