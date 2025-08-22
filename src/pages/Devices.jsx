import React, { useState } from "react";
import { FaCheck, FaTimes, FaPlus } from "react-icons/fa";

const Devices = () => {
  const [search, setSearch] = useState("");
  const [selectedDevices, setSelectedDevices] = useState([]); // ✅ Track selected checkboxes

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

  // Filter by search
  const filteredDevices = devicedata.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.serialId.toLowerCase().includes(search.toLowerCase()) ||
      d.actualId.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Toggle single checkbox
  const handleCheckboxChange = (id) => {
    setSelectedDevices((prev) =>
      prev.includes(id) ? prev.filter((deviceId) => deviceId !== id) : [...prev, id]
    );
  };

  // ✅ Toggle "Select All"
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
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">
                <input
                  type="checkbox"
                  checked={selectedDevices.length === filteredDevices.length && filteredDevices.length > 0}
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
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleFabClick}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default Devices;
