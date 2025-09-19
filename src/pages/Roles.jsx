import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Roles = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [open, setOpen] = useState(false);
  
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

  const permissionObjects = [
    "Account",
    "Area",
    "Channel",
    "Department",
    "Devices",
    "Device Setting",
    "PID Setting",
    "Roles",
    "Shift",
    "User",
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
            <th className="border p-2">Role</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Account</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Modified Date</th>
          </tr>
          <tr>
            <td colSpan={8} className="p-2">
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
          {filteredData.map((row, index) => (
            <tr key={index} className="bg-secondary300">
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
              <td className="p-2 border-t">
                {row.active ? <FaCheck className="text-greencolor" /> : null}
              </td>
              <td className="p-2 border-t">
                {row.deleted ? (
                  <FaCheck className="text-greencolor" />
                ) : (
                  <FaTimes className="text-redcolor" />
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
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition"
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
              Add Role
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {/* Name */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Description */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Description"
                  className="mt-1 w-full border rounded p-2"
                ></textarea>
              </div>

              {/* Permissions Table */}
              <div className="mb-4 overflow-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border p-2">Object Type</th>
                    <th className="border p-2">List</th>
                    <th className="border p-2">View</th>
                    <th className="border p-2">Active/Deactive</th>
                    <th className="border p-2">Add</th>
                    <th className="border p-2">Update</th>
                    <th className="border p-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {permissionObjects.map((obj, idx) => (
                    <tr key={idx}>
                      <td className="border p-2">{obj}</td>
                      {[...Array(6)].map((_, i) => (
                        <td key={i} className="border p-2 text-center">
                          <input type="checkbox" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

              {/* Account */}
              <div className="col-span-1">
                <label className="block text-sm font-medium">Account</label>
                <p className="mt-2 font-semibold">
                  Niyama
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

export default Roles;
