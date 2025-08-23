import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Channels = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox
  const [open, setOpen] = useState(false);

  const channelsData = [
    {
      name: "Niyama",
      description: "",
      baudrate: 57600,
      port: "/dev/ttyUSB0",
      connectionType: "USB",
      scannerHost: "sap-desktop",
      databits: 8,
      parity: 0,
      stopbits: 2,
      account: "Niyama",
      calibration: false,
      active: true,
      deleted: false,
      createdDate: "22 January, 2019 13:31",
      modifiedDate: "22 January, 2019 13:31",
    },
  ];

  const filteredData = channelsData.filter((item) =>
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
            <th className="border p-2">Description</th>
            <th className="border p-2">Baudrate</th>
            <th className="border p-2">Port</th>
            <th className="border p-2">Connection Type</th>
            <th className="border p-2">Scanner Host</th>
            <th className="border p-2">Data Bits</th>
            <th className="border p-2">Parity</th>
            <th className="border p-2">Stop Bits</th>
            <th className="border p-2">Account</th>
            <th className="border p-2">Calibration</th>
            <th className="border p-2">Active</th>
            <th className="border p-2">Deleted</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Modified Date</th>
          </tr>
          <tr>
            <td colSpan={16} className="p-2">
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
              <td className="border p-2">{row.description || " "}</td>
              <td className="border p-2">{row.baudrate}</td>
              <td className="border p-2">{row.port}</td>
              <td className="border p-2">{row.connectionType}</td>
              <td className="border p-2">{row.scannerHost}</td>
              <td className="border p-2">{row.databits}</td>
              <td className="border p-2">{row.parity}</td>
              <td className="border p-2">{row.stopbits}</td>
              <td className="border p-2">{row.account}</td>
              <td className="border p-2">
                {row.calibration ? (
                  <FaCheck className="text-greencolor" />
                ) : (
                  <FaTimes className="text-redcolor" />
                )}
              </td>
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

      {/* Dialog Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Dialog Box */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl p-6 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Add Channel
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <div className="col-span-2">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Description"
                  className="mt-1 w-full border rounded p-2"
                ></textarea>
              </div>

              {/* Connection Type */}
              <div>
                <label className="block text-sm font-medium">Connection Type</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>USB</option>
                  <option>Ethernet</option>
                  <option>Serial</option>
                </select>
              </div>

              {/* Baudrate */}
              <div>
                <label className="block text-sm font-medium">
                  Baudrate e.g 9600,57600 or Port e.g : 9090,9091
                </label>
                <input
                  type="text"
                  placeholder="9600,57600"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Port or IP */}
              <div>
                <label className="block text-sm font-medium">Port or IP Address</label>
                <input
                  type="text"
                  placeholder="Port or IP"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Databits */}
              <div>
                <label className="block text-sm font-medium">Databits</label>
                 <input
                  type="number"
                  placeholder="Databits"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Parity */}
              <div>
                <label className="block text-sm font-medium">Parity</label>
                <select className="mt-1 w-full border rounded p-2">
                  <option>NONE</option>
                  <option>ODD</option>
                  <option>EVEN</option>
                </select>
              </div>

              {/* Stopbits */}
              <div>
                <label className="block text-sm font-medium">Stopbits</label>
                <input
                  type="number"
                  placeholder="Stopbits"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Calibration */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="calibration" />
                <label htmlFor="calibration">Calibration</label>
              </div>

              {/* Delay Time */}
              <div>
                <label className="block text-sm font-medium">Delay Time</label>
                <input
                  type="text"
                  placeholder="Delay Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Alarm Setting Time */}
              <div>
                <label className="block text-sm font-medium">Alarm Setting Time</label>
                <input
                  type="text"
                  placeholder="Alarm Setting Time"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Time A Delay */}
              <div>
                <label className="block text-sm font-medium">Time A Delay</label>
                <input
                  type="text"
                  placeholder="Time A Delay"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Time B Delay */}
              <div>
                <label className="block text-sm font-medium">Time B Delay</label>
                <input
                  type="text"
                  placeholder="Time B Delay"
                  className="mt-1 w-full border rounded p-2"
                />
              </div>

              {/* Account */}
              <div className="col-span-2">
                <label className="block text-sm font-medium">Account</label>
                <p className="mt-2 font-semibold">Verve Human Care Laboratories</p>
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

export default Channels;
