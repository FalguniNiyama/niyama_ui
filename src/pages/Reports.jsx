import React, { useState } from "react";

const reports = [
  { name: "Device Report" },
  { name: "Door Status Report" },
  { name: "Min Max Report" },
  { name: "System Performance Report" },
  { name: "Alarm Report" },
  { name: "AHU On Off Report" },
  { name: "History Report" },
];

const ReportList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
};

const [selectedDuration, setSelectedDuration] = useState("");

const durations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
]; // durations in minutes

return (
  <div>
    <ul>
      {reports.map((report, index) => (
          <li key={index}>
            <div
              onClick={() => toggleExpand(index)}
              className="p-4 bg-white shadow rounded-lg cursor-pointer flex justify-between items-center hover:bg-highlightcolor transition"
            >
              <span className="text-lm font-semibold text-blackcolor">{report.name}</span>
            </div>

            {/* Expanded content */}
            {expandedIndex === index && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg shadow-inner">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-black">Device Name</p>
                    <input
                      type="text"
                      placeholder="Enter device"
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">Duration</p>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="mt-1 w-full border rounded-md p-2"
                    >
                    <option value="">Select Duration</option>
                      {durations.map((minutes, index) => (
                        <option key={index} value={minutes}>
                          {minutes} Minutes
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">Start Date</p>
                    <input
                      type="date"
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">End Date</p>
                    <input
                      type="date"
                      className="mt-1 w-full border rounded-md p-2 text-sm"
                    />
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-primary400">
                  Export to PDF
                </button>
              </div>
            )}
          </li>
      ))}
      </ul>
    </div>
  );
};

export default ReportList;