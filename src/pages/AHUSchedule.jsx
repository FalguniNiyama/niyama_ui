import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function AHUTable() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]); // store selected rows
  const [selectAll, setSelectAll] = useState(false);
  const [open, setOpen] = useState(false);

  const data = [
    {
      roomName: "AHU-01",
      startDate: "12 August, 2025",
      stopDate: "31 December, 2025",
      startTime: "18:17",
      stopTime: "18:17",
      account: "niyama",
      createdDate: "23 August, 2025 18:17",
      modifiedDate: "23 August, 2025 18:17",
      active: false,
      deleted: false,
    },
    {
      roomName: "AHU-02",
      startDate: "10 August, 2025",
      stopDate: "20 December, 2025",
      startTime: "10:10",
      stopTime: "12:20",
      account: "niyama",
      createdDate: "15 August, 2025 10:30",
      modifiedDate: "16 August, 2025 12:00",
      active: true,
      deleted: false,
    },
  ];

  // Filtered data based on search
  const filtered = data.filter((row) =>
    row.roomName.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Select All
  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
      setSelectAll(false);
    } else {
      setSelected(filtered.map((row) => row.roomName));
      setSelectAll(true);
    }
  };

  // Handle single row selection
  const handleSelectRow = (roomName) => {
    if (selected.includes(roomName)) {
      setSelected(selected.filter((r) => r !== roomName));
    } else {
      setSelected([...selected, roomName]);
    }
  };

  return (
    <div className="p-4">
      <table className="w-full border-collapse border">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="border p-2 text-left">Room Name</th>
            <th className="border p-2 text-left">AHU Start Date and Time</th>
            <th className="border p-2 text-left">AHU Stop Date and Time</th>
            <th className="border p-2 text-left">AHU Start Time</th>
            <th className="border p-2 text-left">AHU Stop Time</th>
            <th className="border p-2 text-left">Account</th>
            <th className="border p-2 text-left">Created Date</th>
            <th className="border p-2 text-left">Modified Date</th>
            <th className="border p-2 text-left">Active</th>
            <th className="border p-2 text-left">Deleted</th>
          </tr>
          {/* Search row */}
          <tr>
            <td className="border p-2"></td>
            <td colSpan={10} className="border p-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border rounded p-1"
                />
              </div>
            </td>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {filtered.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={selected.includes(row.roomName)}
                  onChange={() => handleSelectRow(row.roomName)}
                />
              </td>
              <td className="border p-2">{row.roomName}</td>
              <td className="border p-2">{row.startDate}</td>
              <td className="border p-2">{row.stopDate}</td>
              <td className="border p-2">{row.startTime}</td>
              <td className="border p-2">{row.stopTime}</td>
              <td className="border p-2">{row.account}</td>
              <td className="border p-2">{row.createdDate}</td>
              <td className="border p-2">{row.modifiedDate}</td>
              <td className="border p-2 text-center">
                {row.active ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <FaTimes className="text-red-600" />
                )}
              </td>
              <td className="border p-2 text-center">
                {row.deleted ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <FaTimes className="text-red-600" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
              Add AHU Schedule
            </h2>

            <div className="mb-4">
              <label className="block font-semibold">Room Name</label>
              <select className="w-full border p-2 rounded">
                <option>Room Name</option>
                <option>Room 101</option>
                <option>Room 102</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold">
                  AHU Start Date and Time
                </label>
                <input type="datetime-local" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block font-semibold">
                  AHU Stop Date and Time
                </label>
                <input type="datetime-local" className="w-full border p-2 rounded" />
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Account</p>
              <p>niyama</p>
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
}
