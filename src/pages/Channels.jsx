import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const handleFabClick = () => {
  alert("➕ Add New Channel Clicked!");
};

const Channels = () => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // track selected rows
  const [selectAll, setSelectAll] = useState(false); // track header checkbox

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
        onClick={handleFabClick}
        className="fixed bottom-6 right-6 bg-backgroundcolor text-white rounded-full p-4 shadow-lg hover:bg-highlightcolor transition"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default Channels;
