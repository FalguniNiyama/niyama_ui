import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const handleFabClick = () => {
  alert("➕ Add New Role Clicked!");
};

const Roles = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const RolesData = [
    {
      role: "Niyama-Admin",
      description: "Full access role",
      account: "Niyama",
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:31",
      modifiedDate: "22 January, 2019 13:31",
    },
  ];

  // filter by role (you can extend this to description/account)
  const filteredData = RolesData.filter((item) =>
    item.role.toLowerCase().includes(search.toLowerCase())
  );

  // handle single row checkbox toggle
  const handleRowSelect = (role) => {
    if (selectedRows.includes(role)) {
      setSelectedRows(selectedRows.filter((row) => row !== role));
    } else {
      setSelectedRows([...selectedRows, role]);
    }
  };

  // handle header checkbox toggle
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
    } else {
      setSelectedRows(filteredData.map((row) => row.role));
      setSelectAll(true);
    }
  };

  // update header checkbox if user unchecks manually
  useEffect(() => {
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
      {/* search input */}
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 mb-3 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* table */}
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
            <th className="border p-2">Role</th>
            <th className="border p-2">Description</th>
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
                  checked={selectedRows.includes(row.role)}
                  onChange={() => handleRowSelect(row.role)}
                />
              </td>
              <td className="border p-2">{row.role}</td>
              <td className="border p-2">{row.description}</td>
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

      {/* floating add button */}
      <button
        onClick={handleFabClick}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default Roles;
