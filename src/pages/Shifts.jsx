import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const handleFabClick = () => {
  alert("➕ Add New Shift Clicked!");
};

const Shifts = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox

  const ShiftsData = [
    {
      name: "Day Shift",
      startDate: "04 February, 2019",
      endDate: "28 February, 2019",
      startTime: "09:00",
      endTime: "17:00",
      shiftDays: "sun, mon, tue, wed, thu, fri, sat",
      active: true,
      deleted: false,
    },
  ];

  const filteredData = ShiftsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // handle single row checkbox toggle
  const handleRowSelect = (name) => {
    if (selectedRows.includes(name)) {
      setSelectedRows(selectedRows.filter((row) => row !== name));
    } else {
      setSelectedRows([...selectedRows, name]);
    }
  };

  // handle header checkbox toggle
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
    } else {
      setSelectedRows(filteredData.map((row) => row.name));
      setSelectAll(true);
    }
  };

  // update header checkbox if user unchecks manually
  React.useEffect(() => {
    if (
      selectedRows.length === filteredData.length &&
      filteredData.length > 0
    ) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedRows, filteredData]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 mb-3 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Shift Days</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.name)}
                  onChange={() => handleRowSelect(row.name)}
                />
              </td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.startDate}</td>
              <td className="border p-2">{row.endDate}</td>
              <td className="border p-2">{row.startTime}</td>
              <td className="border p-2">{row.endTime}</td>
              <td className="border p-2">{row.shiftDays}</td>
              <td className="border p-2">
                {row.active ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : (
                  <span className="text-red-600 font-bold">✘</span>
                )}
              </td>
              <td className="border p-2">
                {row.deleted ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : (
                  <span className="text-red-600 font-bold">✘</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleFabClick}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default Shifts;
