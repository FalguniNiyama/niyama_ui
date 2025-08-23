import { FaCheck, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

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
  const [open, setOpen] = useState(false);

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
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>

        {/* Dialog Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Dialog Box */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Add Account
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Description"
                  className="mt-1 w-full border rounded p-2"
                ></textarea>
              </div>

              {/* Logo */}
              <div>
                <label className="block text-sm font-medium">Logo</label>
                <input
                  type="file"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Data Store Duration */}
              <div>
                <label className="block text-sm font-medium">
                  Data Store Duration (In Seconds)
                </label>
                <input
                  type="number"
                  placeholder="Data Store Duration"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Address (full width) */}
              <div className="col-span-2">
                <label className="block text-sm font-medium">Address</label>
                <textarea
                  placeholder="Address"
                  className="mt-1 w-full border rounded p-2"
                ></textarea>
              </div>

              {/* Show Upper On */}
              <div>
                <label className="block text-sm font-medium">
                  Show Upper On
                </label>
                <div className="flex gap-4 mt-1">
                  <label>
                    <input type="radio" name="show" defaultChecked /> Show
                  </label>
                  <label>
                    <input type="radio" name="show" /> Do Not Show
                  </label>
                </div>
              </div>

              {/* Empty cell for alignment */}
              <div></div>

              {/* Total Users Allowed */}
              <div>
                <label className="block text-sm font-medium">
                  Total Users Allowed
                </label>
                <input
                  type="number"
                  placeholder="Total Users Allowed"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Total Devices Allowed */}
              <div>
                <label className="block text-sm font-medium">
                  Total Devices Allowed
                </label>
                <input
                  type="number"
                  placeholder="Total Devices Allowed"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Total Channels Allowed */}
              <div>
                <label className="block text-sm font-medium">
                  Total Channels Allowed
                </label>
                <input
                  type="number"
                  placeholder="Total Channels Allowed"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Total Approval Required */}
              <div>
                <label className="block text-sm font-medium">
                  Total Approval Required
                </label>
                <input
                  type="number"
                  placeholder="Total Approval Required"
                  className="mt-1 w-full border rounded p-2"
                />
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
}
