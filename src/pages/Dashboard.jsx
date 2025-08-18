import React from 'react';
import Card from '../components/Card';
import { useDashboardData } from '../context/DashboardContext';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {

  
  const { totalDevices, liveDevices, activeUsers, userHistory, criticalDevices } = useDashboardData();

  const chartData = [
    { time: '12:00', liveDevices: 38, criticalDevices: 10 },
    { time: '1:00', liveDevices: 28, criticalDevices: 13 },
    { time: '2:00', liveDevices: 100, criticalDevices: 17 },
    { time: '3:00', liveDevices: 40, criticalDevices: 12 },
    { time: '4:00', liveDevices: 45, criticalDevices: 16 },
    { time: '5:00', liveDevices: 28, criticalDevices: 10 },
    { time: '6:00', liveDevices: 80, criticalDevices: 4 },
    { time: '7:00', liveDevices: 10, criticalDevices: 2 },
    { time: '8:00', liveDevices: 70, criticalDevices: 20 },
    { time: '9:00', liveDevices: 30, criticalDevices: 12 },
    { time: '10:00', liveDevices: 15, criticalDevices: 5 },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        <Card title="Total Devices" value={totalDevices} />
        <Card title="Live Devices" value={liveDevices} />
        <Card title="Active Users" value={activeUsers} />
        <Card title="User History" value={userHistory} />
        <Card title="Critical Devices" value={criticalDevices} />
      </div>

      {/* Area Chart Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blackcolor">Device Trends Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="liveDevices" stroke="#4c4145" fill="#4c4145" fillOpacity={0.4} />
            <Area type="monotone" dataKey="criticalDevices" stroke="#34a853" fill="#34a853" fillOpacity={0.4} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
