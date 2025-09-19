import React, { useState } from "react";

const initialData = [
  {
    room: "AHU-01",
    dp1KP: 10,
    dp1TI: 33,
    dp1TD: 10,
    dp1SetPoint: 2500,
    pressureKP: 10,
    pressureTI: 44,
    pressureTD: 22,
    pressureSetPoint: 4300,
    tempKP: 10,
    tempTI: 85,
    tempTD: 33,
    tempSetPoint: 7600,
    humidityKP: 10,
    humidityTI: 88,
    humidityTD: 84,
    humiditySetPoint: 3500,
    account: "niyama",
    created: "23 August, 2025 18:26",
    modified: "23 August, 2025 18:26",
  },
];

export default function PIDsettings() {
  const [data] = useState(initialData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = data.filter((row) =>
    row.room.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (room) => {
    setSelected((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === filtered.length) {
      setSelected([]);
    } else {
      setSelected(filtered.map((r) => r.room));
    }
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto border rounded">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100">
            {/* Column Titles */}
            <tr>
              <th className="p-2 border">
                <input
                  type="checkbox"
                  checked={selected.length === filtered.length && filtered.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-2 border">Room Name</th>
              <th className="p-2 border">DP1 KP</th>
              <th className="p-2 border">DP1 TI</th>
              <th className="p-2 border">DP1 TD</th>
              <th className="p-2 border">DP1 Set Point</th>
              <th className="p-2 border">Pressure KP</th>
              <th className="p-2 border">Pressure TI</th>
              <th className="p-2 border">Pressure TD</th>
              <th className="p-2 border">Pressure Set Point</th>
              <th className="p-2 border">Temperature KP</th>
              <th className="p-2 border">Temperature TI</th>
              <th className="p-2 border">Temperature TD</th>
              <th className="p-2 border">Temperature Set Point</th>
              <th className="p-2 border">Humidity KP</th>
              <th className="p-2 border">Humidity TI</th>
              <th className="p-2 border">Humidity TD</th>
              <th className="p-2 border">Humidity Set Point</th>
              <th className="p-2 border">Account</th>
              <th className="p-2 border">Created Date</th>
              <th className="p-2 border">Modified Date</th>
            </tr>

            {/* Search bar row */}
            <tr>
              <td colSpan="21" className="p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-2 py-2 w-full rounded"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </td>
            </tr>
          </thead>

          <tbody>
            {filtered.map((row) => (
              <tr key={row.room} className="hover:bg-gray-50">
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.room)}
                    onChange={() => toggleSelect(row.room)}
                  />
                </td>
                <td className="p-2 border">{row.room}</td>
                <td className="p-2 border">{row.dp1KP}</td>
                <td className="p-2 border">{row.dp1TI}</td>
                <td className="p-2 border">{row.dp1TD}</td>
                <td className="p-2 border">{row.dp1SetPoint}</td>
                <td className="p-2 border">{row.pressureKP}</td>
                <td className="p-2 border">{row.pressureTI}</td>
                <td className="p-2 border">{row.pressureTD}</td>
                <td className="p-2 border">{row.pressureSetPoint}</td>
                <td className="p-2 border">{row.tempKP}</td>
                <td className="p-2 border">{row.tempTI}</td>
                <td className="p-2 border">{row.tempTD}</td>
                <td className="p-2 border">{row.tempSetPoint}</td>
                <td className="p-2 border">{row.humidityKP}</td>
                <td className="p-2 border">{row.humidityTI}</td>
                <td className="p-2 border">{row.humidityTD}</td>
                <td className="p-2 border">{row.humiditySetPoint}</td>
                <td className="p-2 border">{row.account}</td>
                <td className="p-2 border">{row.created}</td>
                <td className="p-2 border">{row.modified}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="21" className="p-4 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}