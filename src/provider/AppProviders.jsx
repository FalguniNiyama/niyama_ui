// AppProviders.js
import React from 'react';
import { DeviceProvider } from '../context/DeviceContext';
import { DashboardProvider } from '../context/DashboardContext';

const AppProviders = ({ children }) => {
  return (
    <DashboardProvider>
      <DeviceProvider>
        {children}
      </DeviceProvider>
    </DashboardProvider>
  );
};

export default AppProviders;
