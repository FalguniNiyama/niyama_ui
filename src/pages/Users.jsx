import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Users = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox
  const [isOpen, setIsOpen] = useState(false);

  const usersData = [
    {
      username: "niyama",
      firstName: "Test",
      lastName: "User",
      gender: "Male",
      account: "Niyama",
      department: "Engineering",
      validUpto: "31 December, 2025 23:59",
      active: true,
      deleted: false,
    },
  ];

  const filteredData = usersData.filter((item) =>
    (item.username + " " + item.firstName + " " + item.lastName)
      .toLowerCase()
      .includes(search.toLowerCase())
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
            <th className="border p-2">Username</th>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Account</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Valid Upto</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
          </tr>
          <tr>
            <td colSpan={10} className="p-2">
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
                  checked={selectedRows.includes(row.name)}
                  onChange={() => handleRowSelect(row.name)}
                />
              </td>
              <td className="border p-2">{row.username}</td>
              <td className="border p-2">{row.firstName}</td>
              <td className="border p-2">{row.lastName}</td>
              <td className="border p-2">{row.gender}</td>
              <td className="border p-2">{row.account}</td>
              <td className="border p-2">{row.department}</td>
              <td className="border p-2">{row.validUpto}</td>
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
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Dialog Box */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Add User
            </h2>

            {/* Username and Password */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Username</label>
                <input type="text" className="input mt-1 w-full border rounded p-2" placeholder="Enter Username" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Choose Password</label>
                <input type="password" className="input mt-1 w-full border rounded p-2" placeholder="Enter Password" />
              </div>
            </div>

            {/* Retype Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Retype Password</label>
              <input type="password" className="input mt-1 w-full border rounded p-2" placeholder="Retype Password" />
            </div>

            {/* Name Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" className="input mt-1 w-full border rounded p-2" placeholder="First Name" />
                <input type="text" className="input mt-1 w-full border rounded p-2" placeholder="Middle Name" />
                <input type="text" className="input mt-1 w-full border rounded p-2" placeholder="Last Name" />
              </div>
            </div>

            {/* Communication Details */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="input mt-1 w-full border rounded p-2" placeholder="Enter Email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile</label>
                <input type="tel" pattern="[0-9]{10}" maxLength="10" className="input mt-1 w-full border rounded p-2" placeholder="Enter Mobile" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Extension Number</label>
                <input type="tel" pattern="[0-9]{10}" maxLength="10" className="input mt-1 w-full border rounded p-2" placeholder="Extension Number" />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <div className="flex gap-6">
                <label><input type="radio" name="gender" className="mr-1" /> Male</label>
                <label><input type="radio" name="gender" className="mr-1" /> Female</label>
                <label><input type="radio" name="gender" className="mr-1" /> Other</label>
              </div>
            </div>

            {/* Department and Role */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Choose Department</label>
                <select className="input mt-1 w-full border rounded p-2">
                  <option>Departments</option>
                  <option>Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Choose Role</label>
                <select className="input mt-1 w-full border rounded p-2">
                  <option>Roles</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
            </div>

            {/* Avatar and Validity */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Avatar</label>
                <input type="file" className="input mt-1 w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Validity in Days</label>
                <input type="number" className="input mt-1 w-full border rounded p-2" placeholder="Enter Days" />
              </div>
            </div>

            {/* Account */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Account</label>
              <select className="input mt-1 w-full border rounded p-2">
                <option>Account</option>
                <option>Niyama</option>
              </select>
            </div>


            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-darkgraycolor text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-backgroundcolor text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Users;
