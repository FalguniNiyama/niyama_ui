import React, { useState } from "react";
import { FaCheck, FaTimes, FaPlus } from "react-icons/fa";

const Devices = () => {
  const [search, setSearch] = useState("");
  const [selectedDevices, setSelectedDevices] = useState([]); // Track selected checkboxes
  const [open, setOpen] = useState(false);

  const devicedata = [
    {
      id: 1,
      name: "AHU-1",
      description: "1",
      serialId: "1",
      channel: "Wireless",
      actualId: "01",
      parentArea: "RM",
      account: "Niyama",
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:32",
      modifiedDate: "24 January, 2019 13:34",
    },
    {
      id: 2,
      name: "RM-2",
      description: "2",
      serialId: "2",
      channel: "Wireless",
      actualId: "02",
      parentArea: "RM",
      account: "Niyama",
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:32",
      modifiedDate: "24 January, 2019 16:27",
    },
    {
      id: 3,
      name: "RM-3",
      description: "3",
      serialId: "3",
      channel: "Wireless",
      actualId: "03",
      parentArea: "RM",
      account: "Niyama",
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:33",
      modifiedDate: "23 January, 2019 14:26",
    },
  ];

  // Filter by search (global filter across name, serialId, actualId)
  const filteredDevices = devicedata.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.serialId.toLowerCase().includes(search.toLowerCase()) ||
      d.actualId.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle single checkbox
  const handleCheckboxChange = (id) => {
    setSelectedDevices((prev) =>
      prev.includes(id)
        ? prev.filter((deviceId) => deviceId !== id)
        : [...prev, id]
    );
  };

  // Toggle "Select All"
  const handleSelectAll = () => {
    if (selectedDevices.length === filteredDevices.length) {
      setSelectedDevices([]); // Unselect all
    } else {
      setSelectedDevices(filteredDevices.map((d) => d.id)); // Select all
    }
  };

  const handleFabClick = () => {
    alert("➕ Add New Device Clicked!");
  };

  return (
    <div className="p-6">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            {/* Column Headers */}
            <tr>
              <th className="px-3 py-2 border">
                <input
                  type="checkbox"
                  checked={
                    selectedDevices.length === filteredDevices.length &&
                    filteredDevices.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Description</th>
              <th className="px-3 py-2 border">Device Serial ID</th>
              <th className="px-3 py-2 border">Channel</th>
              <th className="px-3 py-2 border">Actual Device ID</th>
              <th className="px-3 py-2 border">Parent Area</th>
              <th className="px-3 py-2 border">Account</th>
              <th className="px-3 py-2 border">Active</th>
              <th className="px-3 py-2 border">Deleted</th>
              <th className="px-3 py-2 border">Created Date</th>
              <th className="px-3 py-2 border">Modified Date</th>
            </tr>

            {/* Search Row (Global Search) */}
            <tr>
              <td colSpan={24} className="p-2">
              <input
                type="text"
                placeholder="Search..."
                className="border px-3 py-2 mb-3 w-full rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              </td>
            </tr>
          </thead>

          <tbody>
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device) => (
                <tr key={device.id} className="text-center">
                  <td className="px-3 py-2 border">
                    <input
                      type="checkbox"
                      checked={selectedDevices.includes(device.id)}
                      onChange={() => handleCheckboxChange(device.id)}
                    />
                  </td>
                  <td className="px-3 py-2 border">{device.name}</td>
                  <td className="px-3 py-2 border">{device.description}</td>
                  <td className="px-3 py-2 border">{device.serialId}</td>
                  <td className="px-3 py-2 border">{device.channel}</td>
                  <td className="px-3 py-2 border">{device.actualId}</td>
                  <td className="px-3 py-2 border">{device.parentArea}</td>
                  <td className="px-3 py-2 border">{device.account}</td>
                  <td className="px-3 py-2 border">
                    {device.active ? (
                      <FaCheck className="text-green-500 inline" />
                    ) : (
                      <FaTimes className="text-red-500 inline" />
                    )}
                  </td>
                  <td className="px-3 py-2 border">
                    {device.deleted ? (
                      <FaCheck className="text-green-500 inline" />
                    ) : (
                      <FaTimes className="text-red-500 inline" />
                    )}
                  </td>
                  <td className="px-3 py-2 border">{device.createdDate}</td>
                  <td className="px-3 py-2 border">{device.modifiedDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="py-4 text-center text-gray-500">
                  No devices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>

      {/* Dialog Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Dialog Box */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl p-6 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Add Device
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" placeholder="Name" className="mt-1 w-full border rounded p-2"/>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Description</label>
                <textarea placeholder="Description" className="mt-1 w-full border rounded p-2"></textarea>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

              {/* Niyama Type */}
              <div>
                <label className="block text-sm font-medium">Niyama Type</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>NIYAMA TYPE - A</option>
                  <option>NIYAMA TYPE - B</option>
                </select>
              </div>

              {/* Device Serial ID */}
              <div>
                <label className="block text-sm font-medium">Device Serial ID</label>
                <input
                  type="text"
                  placeholder="Device Serial ID"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Actual Device ID */}
              <div>
                <label className="block text-sm font-medium">Actual Device ID</label>
                <input
                  type="number"
                  placeholder="Actual Device ID"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* AHU Area DP1 */}
              <div>
                <label className="block text-sm font-medium">AHU Area DP1</label>
                 <input
                  type="text"
                  placeholder="AHU Area DP1"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* AHU Area Pressure */}
              <div>
                <label className="block text-sm font-medium">AHU Area Pressure</label>
                <input
                  type="text"
                  placeholder="AHU Area Pressure"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Channel */}
              <div>
                <label className="block text-sm font-medium">Channel</label>
                <input
                  type="number"
                  placeholder="Channel"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Parent Area */}
              <div>
                <label className="block text-sm font-medium">Parent Area</label>
                <input
                  type="number"
                  placeholder="Parent Area"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Account */}
              <div className="col-span-2">
                <label className="block text-sm font-medium">Account</label>
                <p className="mt-2 font-semibold">Verve Human Care Laboratories</p>
              </div>

              {/* AHU */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="AHU" />
                <label htmlFor="AHU">AHU</label>
              </div>

              {/* AHU Devices */}
              <div>
                <label className="block text-sm font-medium">AHU Devices</label>
                <input
                  type="text"
                  placeholder="AHU Devices"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* DP1 Unit */}
              <div>
                <label className="block text-sm font-medium">DP1 Unit</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>PRESSURE_PSI</option>
                  <option>PRESSURE_MILIBAR</option>
                  <option>PRESSURE_PA</option>
                  <option>PRESSURE_HG_INCH</option>
                  <option>PRESSURE_H2O_MM</option>
                  <option>PRESSURE_H2O_INCH</option>
                  <option>PRESSURE_PHM</option>
                  <option>PRESSURE_CFM</option>
                </select>
              </div>

              {/* Pressure Unit */}
              <div>
                <label className="block text-sm font-medium">Pressure Unit</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>PRESSURE_PSI</option>
                  <option>PRESSURE_MILIBAR</option>
                  <option>PRESSURE_PA</option>
                  <option>PRESSURE_HG_INCH</option>
                  <option>PRESSURE_H2O_MM</option>
                  <option>PRESSURE_H2O_INCH</option>
                  <option>PRESSURE_PHM</option>
                  <option>PRESSURE_CFM</option>
                </select>
              </div>

              {/* Temperature Unit */}
              <div>
                <label className="block text-sm font-medium">Temperature Unit</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>CELSIUS</option>
                  <option>FAHRENHEIT</option>
                  <option>KELVIN</option>
                </select>
              </div>

              {/* RH Unit */}
              <div>
                <label className="block text-sm font-medium">RH Unit</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>PERCENTAGE</option>
                </select>
              </div>
              
              {/* DP1 Stability Time  */}
              <div>
                <label className="block text-sm font-medium">DP1 Stability Time</label>
                <input
                  type="number"
                  placeholder="DP1 Stability Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Pressure Stability Time  */}
              <div>
                <label className="block text-sm font-medium">Pressure Stability Time</label>
                <input
                  type="number"
                  placeholder="Pressure Stability Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Temp Stability Time  */}
              <div>
                <label className="block text-sm font-medium">Temparature Stability Time</label>
                <input
                  type="number"
                  placeholder="Temparature Stability Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* RH Stability Time  */}
              <div>
                <label className="block text-sm font-medium">RH Stability Time</label>
                <input
                  type="number"
                  placeholder="RH Stability Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* DP1 Range Count */}
              <div>
                <label className="block text-sm font-medium">DP1 Range Count</label>
                <input
                  type="number"
                  placeholder="DP1 Range Count"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Pressure Range Count */}
              <div>
                <label className="block text-sm font-medium">Pressure Range Count</label>
                <input
                  type="number"
                  placeholder="Pressure Range Count"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* DP1 */}
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium"> DP1 </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="DP1" />
                  <label htmlFor="dp1">DP1 Enable</label>
                </div>
              </div>

              {/* Pressure */}
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium"> Pressure </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="Pressure" />
                  <label htmlFor="pressure">Pressure Enable</label>
                </div>
              </div>
            
              {/* Temprature */}
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium"> Temprature </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="Temprature" />
                  <label htmlFor="temprature">Temprature Enable</label>
                </div>
              </div>

              {/* Humidity */}
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium"> Humidity(%) </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="RH" />
                  <label htmlFor="rh">RH Enable</label>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded bg-darkgraycolor text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded bg-backgroundcolor text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Devices;
