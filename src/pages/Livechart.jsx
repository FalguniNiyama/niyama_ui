import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useLivechartData from "../context/LivechartContext";
// import flowImage from "../assets/drawing.gif"; // Ensure path is correct

export default function Livechart() {
  const { data, history } = useLivechartData();

  const variables = [
    { key: "Pressure", color: "#8884d8" },
    { key: "Temperature", color: "#82ca9d" },
    { key: "Humidity", color: "#1de477ff" },
  ];

  return (
    // <div className="flex justify-center items-center bg-gray-100">
    //   <div className="relative w-[800px] h-[600px] overflow-hidden border border-gray-300 rounded-xl">
    //     // Background GIF
    //     <img src={flowImage} alt="Pipe Flow Diagram" className="w-full h-full object-contain" />
    //     <div className="absolute left-40 bottom-20 h-20 w-0.5 bg-blue-500" />
    //     <div className="absolute left-60 bottom-20 h-20 w-0.5 bg-blue-500" />
    //     <div className="absolute left-80 bottom-20 h-20 w-0.5 bg-blue-500" />
    //   </div>
    // </div>

    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-2 gap-4 w-full max-w-12xl">
        {variables.map(({ key, color }) => (
          <div
            key={key}
            className="bg-white border border-gray-300 rounded-xl p-4 shadow"
          >
            <h3 className="font-semibold mb-2">{key}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={key} stroke={color} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}

        {/* Reserved / Placeholder */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow flex flex-col justify-center">
          <h3 className="font-semibold mb-2">Room Details</h3>
          <p className="text-gray-700">Room: {data.Room}</p>
          <p className="text-gray-700">Description: {data.Description}</p>
          <p className="text-gray-700">Parent Area: {data.ParentArea}</p>
          <p className="text-gray-700">Device ID: {data.DeviceID}</p>
          <p className="text-gray-700">Door Status: {data.DoorStatus}</p>
        </div>
      </div>
    </div>
  );
}
