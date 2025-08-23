import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const DeviceSettings = () => {
  const [settings] = useState([
    {
      id: 1,
      deviceName: "AHU-1",
      dp1UpperOff: 1000,
      dp1UpperOn: 1001,
      dp1LowerOff: 500,
      dp1LowerOn: 499,
      dp2UpperOff: 0,
      dp2UpperOn: 0,
      dp2LowerOff: 0,
      dp2LowerOn: 0,
      tempUpperOff: 2500,
      tempUpperOn: 2501,
      tempLowerOff: 2000,
      tempLowerOn: 1999,
      rhUpperOff: 6000,
      rhUpperOn: 6001,
      rhLowerOff: 4500,
      rhLowerOn: 4499,
      account: "Niyama",
      createddate: "01 February, 2020 05:30",
      modifieddate: "01 February, 2020 17:00",
    },
    {
      id: 2,
      deviceName: "AHU-2",
      dp1UpperOff: 1000,
      dp1UpperOn: 1001,
      dp1LowerOff: 500,
      dp1LowerOn: 499,
      dp2UpperOff: 0,
      dp2UpperOn: 0,
      dp2LowerOff: 0,
      dp2LowerOn: 0,
      tempUpperOff: 2500,
      tempUpperOn: 2501,
      tempLowerOff: 2000,
      tempLowerOn: 1999,
      rhUpperOff: 6000,
      rhUpperOn: 6001,
      rhLowerOff: 4500,
      rhLowerOn: 4499,
      account: "Niyama",
      createddate: "01 March, 2020 05:30",
      modifieddate: "01 March, 2020 17:00",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [open, setOpen] = useState(false);
  
  // Toggle individual checkbox
  const toggleCheckbox = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // Toggle select all
  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(settings.map((row) => row.id));
    } else {
      setSelectedIds([]);
    }
  }; 

  // Check if all rows are selected
  const allSelected =
    settings.length > 0 && selectedIds.length === settings.length;

  const handleFabClick = () => {
    alert("➕ Add New Device Clicked!");
  };

  // Filtered Data
  const filteredSettings = settings.filter((row) =>
    row.deviceName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 text-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </th>
              <th className="border px-2 py-1">Device Name</th>
              <th className="border px-2 py-1">DP1 Upper Off</th>
              <th className="border px-2 py-1">DP1 Upper On</th>
              <th className="border px-2 py-1">DP1 Lower Off</th>
              <th className="border px-2 py-1">DP1 Lower On</th>
              <th className="border px-2 py-1">DP2 Upper Off</th>
              <th className="border px-2 py-1">DP2 Upper On</th>
              <th className="border px-2 py-1">DP2 Lower Off</th>
              <th className="border px-2 py-1">DP2 Lower On</th>
              <th className="border px-2 py-1">Temp Upper Off</th>
              <th className="border px-2 py-1">Temp Upper On</th>
              <th className="border px-2 py-1">Temp Lower Off</th>
              <th className="border px-2 py-1">Temp Lower On</th>
              <th className="border px-2 py-1">RH Upper Off</th>
              <th className="border px-2 py-1">RH Upper On</th>
              <th className="border px-2 py-1">RH Lower Off</th>
              <th className="border px-2 py-1">RH Lower On</th>
              <th className="border px-2 py-1">Account</th>
              <th className="border px-2 py-1">Created Date</th>
              <th className="border px-2 py-1">Modified Date</th>
            </tr>
            {/* Search row directly below header */}
            <tr>
              <th colSpan="21" className="p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border rounded p-2 text-sm"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSettings.length > 0 ? (
              filteredSettings.map((row) => (
                <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-2 py-1 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => toggleCheckbox(row.id)}
                    />
                  </td>
                  <td className="border px-2 py-1">{row.deviceName}</td>
                  <td className="border px-2 py-1">{row.dp1UpperOff}</td>
                  <td className="border px-2 py-1">{row.dp1UpperOn}</td>
                  <td className="border px-2 py-1">{row.dp1LowerOff}</td>
                  <td className="border px-2 py-1">{row.dp1LowerOn}</td>
                  <td className="border px-2 py-1">{row.dp2UpperOff}</td>
                  <td className="border px-2 py-1">{row.dp2UpperOn}</td>
                  <td className="border px-2 py-1">{row.dp2LowerOff}</td>
                  <td className="border px-2 py-1">{row.dp2LowerOn}</td>
                  <td className="border px-2 py-1">{row.tempUpperOff}</td>
                  <td className="border px-2 py-1">{row.tempUpperOn}</td>
                  <td className="border px-2 py-1">{row.tempLowerOff}</td>
                  <td className="border px-2 py-1">{row.tempLowerOn}</td>
                  <td className="border px-2 py-1">{row.rhUpperOff}</td>
                  <td className="border px-2 py-1">{row.rhUpperOn}</td>
                  <td className="border px-2 py-1">{row.rhLowerOff}</td>
                  <td className="border px-2 py-1">{row.rhLowerOn}</td>
                  <td className="border px-2 py-1">{row.account}</td>
                  <td className="border px-2 py-1">{row.createddate}</td>
                  <td className="border px-2 py-1">{row.modifieddate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="21" className="text-center text-gray-500 py-4">
                  No matching devices found
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
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Add Device Settings
            </h2>

            {/* Form Grid */}
            {/* Room Name */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Room Name</label>
                <input
                  type="text"
                  placeholder="Room Name"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

              {/* Buzzer On Time */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Buzzer On Time</label>
                <input
                  type="number"
                  placeholder="Buzzer On Time"
                  className="mt-1 w-full border rounded p-2"/>
              </div>

              {/* Buzzer Off Time */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Buzzer Off Time</label>
                <input
                  type="number"
                  placeholder="Buzzer Off Time"
                  className="mt-1 w-full border rounded p-2"/>
              </div>

              {/* Display Interval */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Display Interval</label>
                <input
                  type="number"
                  placeholder="Buzzer Off Time"
                  className="mt-1 w-full border rounded p-2"/>
              </div>

              {/* Account */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Account</label>
                <p className="mt-2 font-semibold">
                  niyama
                </p>
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

export default DeviceSettings;
