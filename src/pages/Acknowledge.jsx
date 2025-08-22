import React from "react";

const Acknowledge = () => {
  const data = [
    {
      deviceName: "AHU-1",
      parentArea: "RM",
      dp1: "0.69 Pa",
      temperature: 30.98,
      humidity: 49.43,
      lastUpdated: "moments ago",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Device Name</th>
            <th className="px-4 py-2 border">Parent Area</th>
            <th className="px-4 py-2 border">DP1</th>
            <th className="px-4 py-2 border">Temperature (°C)</th>
            <th className="px-4 py-2 border">Humidity (%)</th>
            <th className="px-4 py-2 border">Last Updated</th>
            <th className="px-4 py-2 border">Acknowledge</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{row.deviceName}</td>
              <td className="px-4 py-2 border">{row.parentArea}</td>
              <td className="px-4 py-2 border text-blue-600">{row.dp1}</td>
              <td
                className={`px-4 py-2 border ${
                  row.temperature > 28 ? "text-red-500" : "text-green-600"
                }`}
              >
                {row.temperature.toFixed(2)} °C
              </td>
              <td className="px-4 py-2 border">{row.humidity.toFixed(2)} %</td>
              <td className="px-4 py-2 border">{row.lastUpdated}</td>
              <td className="px-4 py-2 border text-blue-500 cursor-pointer hover:underline">
                Acknowledge
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Acknowledge;
