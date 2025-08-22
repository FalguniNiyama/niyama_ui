import React, { useState } from "react";

const Acknowledge = () => {
  const [data] = useState([
    {
      id: 1,
      deviceId: "01",
      deviceName: "AHU-1",
      parentArea: "RM",
      dp1: "0.69 Pa",
      temperature: 30.98,
      humidity: 49.43,
      lastUpdated: "moments ago",
    },
  ]);

  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleAcknowledgeClick = (device) => {
    setSelectedDevice(device);
  };

  const handleCloseForm = () => {
    setSelectedDevice(null);
  };

  return (
    <div className="p-4">
      {/* Table */}
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
            {data.map((row) => (
              <tr key={row.id} className="text-center">
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
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleAcknowledgeClick(row)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Acknowledge
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {selectedDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[600px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Acknowledge Device</h2>

            {/* Device Info */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold">Device ID</label>
                <input
                  type="text"
                  value={selectedDevice.deviceId}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  value={selectedDevice.deviceName}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">ID</label>
                <input
                  type="text"
                  value={selectedDevice.id}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
            </div>

            {/* Reason */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Select Reason</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="reason" value="acknowledge" /> Acknowledge
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="reason" value="cleaning" /> Cleaning
                </label>
              </div>
            </div>

            {/* Time */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Time in Minutes</label>
              <input
                type="number"
                placeholder="Time in Minutes"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Description</label>
              <textarea
                placeholder="Enter description"
                className="w-full border p-2 rounded"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => alert("Acknowledged ✅")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Acknowledge
              </button>
              <button
                onClick={handleCloseForm}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Acknowledge;
