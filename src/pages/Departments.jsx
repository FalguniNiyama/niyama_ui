import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Departments = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox
  const [open, setOpen] = useState(false);

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
            <th className="border p-2">Name</th>
            <th className="border p-2">In Charge Of</th>
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
                  checked={selectedRows.includes(row.name)}
                  onChange={() => handleRowSelect(row.name)}
                />
              </td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.inchargeOf}</td>
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

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[600px]">
            <h2 className="text-xl font-bold mb-4">AddDepartment</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block mb-1">Account</label>
                <p className="mt-2">Verve Human Care Laboratories</p>
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-1">Incharge Of</label>
              <select className="w-full border rounded p-2">
                <option>Select Incharge</option>
              </select>
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

export default Departments;
