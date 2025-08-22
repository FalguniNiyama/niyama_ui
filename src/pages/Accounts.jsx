import { FaCheck, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const handleFabClick = () => {
  alert("➕ Add New Account Clicked!");
};

const data = [
  {
    name: "Verve Human Care Laboratories",
    lifetime: "26 March, 2025 05:30",
    active: true,
    deleted: false,
    createdDate: "26 March, 2025 05:30",
    modifiedDate: "26 March, 2025 23:04",
  },
  {
    name: "Sun Pharma",
    lifetime: "27 March, 2025 06:30",
    active: true,
    deleted: true,
    createdDate: "27 March, 2025 06:30",
    modifiedDate: "27 March, 2025 22:00",
  },
  {
    name: "Cadila HealthCare",
    lifetime: "27 March, 2025 03:20",
    active: true,
    deleted: false,
    createdDate: "27 March, 2025 03:20",
    modifiedDate: "27 March, 2025 20:40",
  },
];

export default function Accounts() {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox

  const filteredData = data.filter((item) =>
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
      <table className="min-w-full border border-secondary300">
        <thead>
          <tr className="bg-white">
            <th className="p-2 border-b accent-backgroundcolor">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="p-2 border-b text-left">Name</th>
            <th className="p-2 border-b text-left">Lifetime</th>
            <th className="p-2 border-b text-left">Active</th>
            <th className="p-2 border-b text-left">Deleted</th>
            <th className="p-2 border-b text-left">Created Date</th>
            <th className="p-2 border-b text-left">Modified Date</th>
          </tr>
          <tr>
            <td colSpan={9} className="p-2">
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
          {filteredData.map((item, index) => (
            <tr key={index} className="bg-secondary300">
              <td className="p-2 border-t accent-backgroundcolor">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.name)}
                  onChange={() => handleRowSelect(item.name)}
                />
              </td>
              <td className="p-2 border-t">{item.name}</td>
              <td className="p-2 border-t">{item.lifetime}</td>
              <td className="p-2 border-t">
                {item.active ? <FaCheck className="text-greencolor" /> : null}
              </td>
              <td className="p-2 border-t">
                {item.deleted ? (
                  <FaCheck className="text-greencolor" />
                ) : (
                  <FaTimes className="text-redcolor" />
                )}
              </td>
              <td className="p-2 border-t">{item.createdDate}</td>
              <td className="p-2 border-t">{item.modifiedDate}</td>
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
}
