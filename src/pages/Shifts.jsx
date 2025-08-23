import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Shifts = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox
  const [open, setOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

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

  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const isAllSelected = selectedDays.length === allDays.length;

  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleSelectAllDays = () => {
    if (isAllSelected) {
      setSelectedDays([]);
    } else {
      setSelectedDays([...allDays]);
    }
  };

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
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Shift Days</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
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
              <td className="border p-2">{row.startDate}</td>
              <td className="border p-2">{row.endDate}</td>
              <td className="border p-2">{row.startTime}</td>
              <td className="border p-2">{row.endTime}</td>
              <td className="border p-2">{row.shiftDays}</td>
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
              Add Area
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

              {/* Shift Days */}
              <div className="mb-4">
                <p className="font-medium mb-2">Select Shift Days</p>
                <label className="flex items-center gap-2 mb-2">
                <input type="checkbox" checked={isAllSelected} onChange={handleSelectAllDays}/>
                Select All Days
                </label>

                <div className="flex flex-wrap gap-6">
                  {allDays.map((day) => (
                  <label key={day} className="flex items-center gap-2">
                    <input type="checkbox" checked={selectedDays.includes(day)}
                    onChange={() => handleDayToggle(day)}
                  />
                  {day}
                  </label>
                  ))}
                </div>
              </div>

              {/* Start Date and Time */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-medium mb-1">Select shift start date and time</label>
                  <input type="datetime-local" className="border p-2 w-full rounded" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Select shift end date and time</label>
                  <input type="datetime-local" className="border p-2 w-full rounded" />
                </div>
              </div>

              {/* Device List and Account (Placeholder) */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-medium mb-1">Device List</label>
                  <textarea
                  placeholder="Device List"
                  readOnly
                  value={"1-- AHU-01"}
                  className="mt-1 w-full border rounded p-2"
                  ></textarea>
                </div>
                <div>
                  <label className="block font-medium mb-1">Account</label>
                  <p className="border p-2 bg-gray-100 rounded">niyama</p>
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
        </div>
      )}
    </div>  
  );
};

export default Shifts;
