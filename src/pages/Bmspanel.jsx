import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiArrowCircleDown, HiArrowCircleRight, HiFolder} from "react-icons/hi";

const ITEMS_PER_PAGE = 20;

const bmsData = [
  {
    areaName: "Verve",
    ahuName: "MaterialAirlock(Lift Area)",
    description: "VHC/EMC/001",
    deviceId: 1,
    doorStatus:"Open",
    pressure: 3.09,
    dp2Valve:0,
    temp: 23.74,
    chwValve:0,
    humidity: 40.53,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Change Room - 1",
    description: "VHC/EMC/002",
    deviceId: 2,
    doorStatus:"Close",
    pressure: 0.00,
    dp2Valve:0,
    temp: 26.56,
    chwValve:0,
    humidity: 42.82,
    hwValve: "OFF"
  },
  {
    areaName: "SunPharma",
    ahuName: "Change Room - 2",
    description: "VHC/EMC/003",
    deviceId: 3,
    doorStatus:"Close",
    pressure: 5.45,
    dp2Valve:0,
    temp: 24.24,
    chwValve:0,
    humidity: 47.17,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Manufacturing and Washing Commmon Corridor",
    description: "VHC/EMC/004",
    deviceId: 4,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 25.59,
    chwValve:0,
    humidity: 43.34,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "RM day store area - 1",
    description: "VHC/EMC/005",
    deviceId: 5,
    doorStatus:"Close",
    pressure: 21.56,
    dp2Valve:0,
    temp: 25.59,
    chwValve:0,
    humidity: 43.34,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Manufacturing Airlock - 1",
    description: "VHC/EMC/006",
    deviceId: 6,
    doorStatus:"Close",
    pressure: 20.48,
    dp2Valve:0,
    temp: 20.45,
    chwValve:0,
    humidity: 68.75,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Manufacturing Airlock - 2",
    description: "VHC/EMC/007",
    deviceId: 7,
    doorStatus:"Close",
    pressure: 7.48,
    dp2Valve:0,
    temp: 17.42,
    chwValve:0,
    humidity: 71.51,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Manufacturing Area - 1",
    description: "VHC/EMC/008",
    deviceId: 8,
    doorStatus:"Close",
    pressure: 54.14,
    dp2Valve:0,
    temp: 18.71,
    chwValve:0,
    humidity: 68.78,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Buffer Area",
    description: "VHC/EMC/009",
    deviceId: 9,
    doorStatus:"Close",
    pressure: 8.76,
    dp2Valve:0,
    temp: 19.70,
    chwValve:0,
    humidity: 62.26,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Disinfectant Preparation Area",
    description: "VHC/EMC/010",
    deviceId: 10,
    doorStatus:"Open",
    pressure: 8.34,
    dp2Valve:0,
    temp: 22.08,
    chwValve:0,
    humidity: 58.05,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Washing Airlock - 1",
    description: "VHC/EMC/011",
    deviceId: 11,
    doorStatus:"Open",
    pressure: 32.33,
    dp2Valve:0,
    temp: 13.66,
    chwValve:0,
    humidity: 55.51,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Washing Airlock - 2",
    description: "VHC/EMC/012",
    deviceId: 12,
    doorStatus:"Open",
    pressure: 28.56,
    dp2Valve:0,
    temp: 15.46,
    chwValve:0,
    humidity: 47.58,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Washing Area - 1",
    description: "VHC/EMC/013",
    deviceId: 13,
    doorStatus:"Open",
    pressure: 39.60,
    dp2Valve:0,
    temp: 14.65,
    chwValve:0,
    humidity: 51.92,
    hwValve: "OFF"
  },
  {
    areaName: "SunPharma",
    ahuName: "Ampoule day store",
    description: "VHC/EMC/014",
    deviceId: 14,
    doorStatus:"Open",
    pressure: 16.03,
    dp2Valve:0,
    temp: 14.35,
    chwValve:0,
    humidity: 75.48,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Dacartoning Area",
    description: "VHC/EMC/015",
    deviceId: 15,
    doorStatus:"Open",
    pressure: 9.19,
    dp2Valve:0,
    temp: 12.84,
    chwValve:0,
    humidity: 76.11,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Change Room (outer corridor)",
    description: "VHC/EMC/016",
    deviceId: 16,
    doorStatus:"Close",
    pressure: 7.82,
    dp2Valve:0,
    temp: 16.36,
    chwValve:0,
    humidity: 51.43,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Corrindor Area (Adjucent to filling and Autoclave Area)",
    description: "VHC/EMC/017",
    deviceId: 17,
    doorStatus:"Open",
    pressure: 8.66,
    dp2Valve:0,
    temp: "TEMP_SENSOR_FAIL",
    chwValve:0,
    humidity: "RH_SENSOR_FAIL",
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Airlock - 1 (Autoclave Area)",
    description: "VHC/EMC/018",
    deviceId: 18,
    doorStatus:"Close",
    pressure: 10.46,
    dp2Valve:0,
    temp: 16.28,
    chwValve:0,
    humidity: 59.08,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Airlock - 2 (Autoclave Area)",
    description: "VHC/EMC/019",
    deviceId: 19,
    doorStatus:"Close",
    pressure: 9.76,
    dp2Valve:0,
    temp: 15.99,
    chwValve:0,
    humidity: 53.81,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Unit Preparation Area",
    description: "VHC/EMC/020",
    deviceId: 20,
    doorStatus:"Open",
    pressure: 13.66,
    dp2Valve:0,
    temp: 11.47,
    chwValve:0,
    humidity: 57.01,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Hot zone area - 1",
    description: "VHC/EMC/021",
    deviceId: 21,
    doorStatus:"Close",
    pressure: 6.16,
    dp2Valve:0,
    temp: 18.32,
    chwValve:0,
    humidity: 41.64,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Equipment Washing Area - 1",
    description: "VHC/EMC/022",
    deviceId: 22,
    doorStatus:"Close",
    pressure: -2.49,
    dp2Valve:0,
    temp: 12.09,
    chwValve:0,
    humidity: 59.77,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Holding Area - 1",
    description: "VHC/EMC/023",
    deviceId: 23,
    doorStatus:"Close",
    pressure: 18.68,
    dp2Valve:0,
    temp: 12.04,
    chwValve:0,
    humidity: 58.58,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Tray Washing Area - 1",
    description: "VHC/EMC/024",
    deviceId: 24,
    doorStatus:"Close",
    pressure: -20.16,
    dp2Valve:0,
    temp: 12.12,
    chwValve:0,
    humidity: 57.86,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Garment Holding Area - 1",
    description: "VHC/EMC/025",
    deviceId: 25,
    doorStatus:"Close",
    pressure: 20.13,
    dp2Valve:0,
    temp: 11.82,
    chwValve:0,
    humidity: 58.80,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Garment Washing Area - 1",
    description: "VHC/EMC/026",
    deviceId: 26,
    doorStatus:"Open",
    pressure: 21.31,
    dp2Valve:0,
    temp: 12.03,
    chwValve:0,
    humidity: 54.57,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Filling Entry Airlock - 1",
    description: "VHC/EMC/027",
    deviceId: 27,
    doorStatus:"Close",
    pressure: 2.64,
    dp2Valve:0,
    temp: 21.24,
    chwValve:0,
    humidity: 55.60,
    hwValve: "OFF"
  },
  {
    areaName: "SunPharma",
    ahuName: "Filling Entry Airlock - 2",
    description: "VHC/EMC/028",
    deviceId: 28,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 21.89,
    chwValve:0,
    humidity: 58.31,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Filling Entry Airlock - 3",
    description: "VHC/EMC/029",
    deviceId: 29,
    doorStatus:"Close",
    pressure: -42.75,
    dp2Valve:0,
    temp: 18.75,
    chwValve:0,
    humidity: "RH_SENSOR_FAIL",
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Disinfectant Filtration Area",
    description: "VHC/EMC/030",
    deviceId: 30,
    doorStatus:"Open",
    pressure: -21.11,
    dp2Valve:0,
    temp: 19.29,
    chwValve:0,
    humidity: 52.44,
    hwValve: "OFF"
  },
  {
    areaName: "SunPharma",
    ahuName: "Ampoule Filling Area",
    description: "VHC/EMC/031",
    deviceId: 31,
    doorStatus:"Close",
    pressure: 67.25,
    dp2Valve:0,
    temp: 15.55,
    chwValve:0,
    humidity: 75.44,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Filling Area",
    description: "VHC/EMC/032",
    deviceId: 32,
    doorStatus:"Close",
    pressure: 0.00,
    dp2Valve:0,
    temp: 17.78,
    chwValve:0,
    humidity: 62.86,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Corridor Area (Main Passage aseptic area)",
    description: "VHC/EMC/033",
    deviceId: 33,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 16.94,
    chwValve:0,
    humidity: 66.19,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Cooling Zone Area - 1",
    description: "VHC/EMC/034",
    deviceId: 34,
    doorStatus:"Close",
    pressure: 0.00,
    dp2Valve:0,
    temp: 18.70,
    chwValve:0,
    humidity: 52.10,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Ampoule Quarantine Area - 1",
    description: "VHC/EMC/035",
    deviceId: 35,
    doorStatus:"Close",
    pressure: 8.13,
    dp2Valve:0,
    temp: 18.95,
    chwValve:0,
    humidity: 49.15,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Filling Exit Airlock - 1",
    description: "VHC/EMC/036",
    deviceId: 36,
    doorStatus:"Close",
    pressure: -67.32,
    dp2Valve:0,
    temp: 19.50,
    chwValve:0,
    humidity: 56.68,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Filling Exit Airlock - 1",
    description: "VHC/EMC/037",
    deviceId: 37,
    doorStatus:"Close",
    pressure: -5.76,
    dp2Valve:0,
    temp: 21.38,
    chwValve:0,
    humidity: 59.84,
    hwValve: "OFF"
  },
  {
    areaName: "SunPharma",
    ahuName: "Filling Exit Airlock - 2",
    description: "VHC/EMC/037",
    deviceId: 37,
    doorStatus:"Close",
    pressure: -5.76,
    dp2Valve:0,
    temp: 21.38,
    chwValve:0,
    humidity: 59.84,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Airlock (Outer Corridor)",
    description: "VHC/EMC/038",
    deviceId: 38,
    doorStatus:"Open",
    pressure: -4.01,
    dp2Valve:0,
    temp: 18.88,
    chwValve:0,
    humidity: 59.41,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Packing Material Day Store",
    description: "VHC/EMC/039",
    deviceId: 39,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 25.26,
    chwValve:0,
    humidity: 58.44,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Change Part",
    description: "VHC/EMC/040",
    deviceId: 40,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 26.41,
    chwValve:0,
    humidity: 57.47,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Packing Hall",
    description: "VHC/EMC/041",
    deviceId: 41,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 29.74,
    chwValve:0,
    humidity: 49.33,
    hwValve: "OFF"
  },
  {
    areaName: "Verve",
    ahuName: "Visual & Labelling Area",
    description: "VHC/EMC/042",
    deviceId: 42,
    doorStatus:"Open",
    pressure: 0.00,
    dp2Valve:0,
    temp: 28.51,
    chwValve:0,
    humidity: 52.81,
    hwValve: "OFF"
  }

  // Add more data as needed
];

export default function BmsPanel() {

  const [page, setPage] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState();
  const [selectedAHU, setselectedAHU] = useState(null);

  const totalPages = Math.ceil(bmsData.length / ITEMS_PER_PAGE);
  const paginatedData = bmsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));
  
  // Expandable list component                                                 
  const BMSExpandableList = ({ data, onSelectahu }) => {
    const parentAreas = [...new Set(data.map((item) => item.areaName))];
  
    const [expanded, setExpanded] = useState(() => {
      const state = {};
      parentAreas.forEach((parent) => {
        state[parent] = false; 
      });
      return state;
    });

    const toggleExpand = (parentArea) => {
      setExpanded((prev) => ({
        ...prev,
        [parentArea]: !prev[parentArea],
      }));
    };
   
    return (
      <div className="p-2 space-y-3">
        {parentAreas.map((parent) => {
          const children = data
            .filter((item) => item.areaName === parent)
            .map((item) => item.ahuName);
  
          return (
            <div key={parent}>
              <div
                className="cursor-pointer font-semibold text-whitecolor flex items-center justify-between"
                onClick={() => toggleExpand(parent)}
              >
                <span>{parent}</span>
                {expanded[parent] ? (
                  <HiArrowCircleDown size={20} />
                ) : (
                  <HiArrowCircleRight size={20} />
                )}
              </div>
  
              {expanded[parent] && (
                <ul className="ml-4 mt-1 list-disc text-sm text-whitecolor">
                  {[...new Set(children)].map((child, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-blackcolor"
                      onClick={() => onSelectahu(child)}
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const handleSelectahu = (ahuName) => {
    setselectedAHU(ahuName);
    // Optional: if you want to jump to page containing selected ahu
    const index = bmsData.findIndex((item) => item.ahuName === ahuName);
    if (index >= 0) {
      setPage(Math.floor(index / ITEMS_PER_PAGE) + 1);
    }
  };


  return(
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`flex flex-col shadow-md p-1 transition-all duration-300
          ${isSidebarOpen ? "w-72 bg-backgroundcolor" : "w-8 bg-whitecolor"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="focus:outline-none p-2"
        >
          {isSidebarOpen ? (
            <HiOutlineX size={26} className="text-whitecolor" />
          ) : (
            <HiFolder size={26} className="text-backgroundcolor" /> 
          )}
        </button>

        {/* Sidebar content with scroll */}
        {isSidebarOpen && (
          <div className="overflow-hidden flex-1 p-2 scrollbar-hide">
            <BMSExpandableList data={bmsData} onSelectahu={handleSelectahu} />
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex flex-col px-4 flex-1">
        <main className="flex-1 overflow-hidden">
          <div className="overflow-auto max-h-[calc(100vh-200px)] border rounded-lg shadow">
            <table className="min-w-full table-auto border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  {[
                    "Area Name",
                    "AHU Name",
                    "Description",
                    "Device ID",
                    "Door Status",
                    "Pressure",
                    "DP2 Valve",
                    "Temp (°C)",
                    "CHW VALVE",
                    "Humidity (%)",
                    "HW VALVE"
                  ].map((title) => (
                    <th
                      key={title}
                      className="px-4 py-2 text-left text-lm font-semibold text-blackcolor"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-whitecolor divide-y divide-secondary100">
                {paginatedData.map((ahu, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-highlightcolor ${
                      ahu.ahuName === selectedAHU
                        ? "bg-highlightcolor font-bold"
                        : "bg-whitecolor"
                    }`}
                  >
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.areaName}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.ahuName}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.description}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.deviceId}
                    </td>
                    <td
                      className={`px-4 py-2 text-sm font-semibold ${
                        ahu.doorStatus === "Open"
                          ? "text-redcolor"
                          : "text-greencolor"
                      }`}
                    >
                      {ahu.doorStatus}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.pressure} Pa
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.dp2Valve}
                    </td>
                    <td className={`px-4 py-2 text-sm font-semibold ${ahu.temp === "TEMP_SENSOR_FAIL" ? "text-redcolor" : "text-blackcolor"}`}>
                      {ahu.temp === "TEMP_SENSOR_FAIL" ? <span>{ahu.temp}</span> : <span>{ahu.temp} °C</span>}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.chwValve}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {ahu.humidity} %
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-redcolor">
                      {ahu.hwValve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {/* Pagination Footer */}
        <footer className="w-full bg-whitecolor border-t border-secondary300 py-4 shadow-md flex-shrink-0">
          
          <div className="flex justify-between items-center px-4 relative">
            <p className="text-lm text-blackcolor font-semibold">
              Page {page} of {totalPages || 1}
            </p>

            <div className="flex justify-center items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 bg-whitecolor text-lm rounded font-semibold disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="px-4 py-2 bg-whitecolor text-lm rounded font-semibold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}