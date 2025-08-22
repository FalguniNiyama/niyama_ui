import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const handleFabClick = () => {
  alert("➕ Add New Device Clicked!");
};

const Departments = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox

  const DepartmentsData = [
    {
      name: "Engineering",
      inchargeOf: "Niyama",
      account: "Niyama",
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:31",
      modifiedDate: "22 January, 2019 13:31",
    },
  ];

  const filteredData = DepartmentsData.filter((item) =>
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
            <th className="border p-2">In Charge Of</th>
            <th className="border p-2">Account</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Modified Date</th>
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
              <td className="border p-2">{row.inchargeOf}</td>
              <td className="border p-2">{row.account}</td>
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
              <td className="border p-2">{row.createdDate}</td>
              <td className="border p-2">{row.modifiedDate}</td>
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

export default Departments;
