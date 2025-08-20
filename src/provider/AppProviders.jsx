// AppProviders.js
import React from "react";
import { DeviceProvider } from "../context/DeviceContext";
import { DashboardProvider } from "../context/DashboardContext";
import { LivechartProvider } from "../context/LivechartContext";
// import { emsData } from "../pages/EMSPanel"; // Ensure EMSPanel is imported correctly>

const AppProviders = ({ children }) => {
  return (
    <DashboardProvider>
      <DeviceProvider>
        <LivechartProvider>{children}</LivechartProvider>
      </DeviceProvider>
    </DashboardProvider>
  );
};

export default AppProviders;
