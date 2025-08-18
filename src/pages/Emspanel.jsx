import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiArrowCircleDown, HiArrowCircleRight, HiFolder} from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react';

const ITEMS_PER_PAGE = 20;

const emsData = [
  {
    roomName: "Excipient Dispensing",
    description: "MM/GF/RN/101",
    parentArea: "Verve",
    deviceId: 1,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-1",
    description: "MM/GF/RN/102",
    parentArea: "Verve",
    deviceId: 2,
    doorStatus:"Close",
    pressure: 10.09,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-2",
    description: "MM/GF/RN/103",
    parentArea: "Verve",
    deviceId: 3,
    doorStatus:"Close",
    pressure: 20.07,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-3",
    description: "MM/GF/RN/104",
    parentArea: "Verve",
    deviceId: 4,
    doorStatus:"Close",
    pressure: 17.05,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-4",
    description: "MM/GF/RN/105",
    parentArea: "Verve",
    deviceId: 5,
    doorStatus:"Close",
    pressure: 7.03,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-5",
    description: "MM/GF/RN/106",
    parentArea: "Verve",
    deviceId: 6,
    doorStatus:"Open",
    pressure: 12.04,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-6",
    description: "MM/GF/RN/107",
    parentArea: "Verve",
    deviceId: 7,
    doorStatus:"Open",
    pressure: 10.08,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-7",
    description: "MM/GF/RN/108",
    parentArea: "Verve",
    deviceId: 8,
    doorStatus:"Close",
    pressure: 21.03,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-8",
    description: "MM/GF/RN/109",
    parentArea: "Verve",
    deviceId: 9,
    doorStatus:"Close",
    pressure: 10.05,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-9",
    description: "MM/GF/RN/110",
    parentArea: "Verve",
    deviceId: 10,
    doorStatus:"Close",
    pressure: 8.09,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-10",
    description: "MM/GF/RN/001",
    parentArea: "Verve",
    deviceId: 11,
    doorStatus:"Open",
    pressure: 7.10,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-11",
    description: "MM/GF/RN/002",
    parentArea: "Verve",
    deviceId: 12,
    doorStatus:"Open",
    pressure: 31.08,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-12",
    description: "MM/GF/RN/003",
    parentArea: "Verve",
    deviceId: 13,
    doorStatus:"Close",
    pressure: 10.04,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-13",
    description: "MM/GF/RN/004",
    parentArea: "Verve",
    deviceId: 14,
    doorStatus:"Open",
    pressure: 22.02,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-14",
    description: "MM/GF/RN/005",
    parentArea: "Verve",
    deviceId: 15,
    doorStatus:"Open",
    pressure: 6.04,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-15",
    description: "MM/GF/RN/006",    
    parentArea: "Verve",
    deviceId: 16,
    doorStatus:"Open",
    pressure: 9.07,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-16",
    description: "MM/GF/RN/007",
    parentArea: "Verve",
    deviceId: 17,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-17",
    description: "MM/GF/RN/008",
    parentArea: "Verve",
    deviceId: 18,
    doorStatus:"Close",
    pressure: 15.07,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-18",
    description: "MM/GF/RN/009",
    parentArea: "Verve",
    deviceId: 19,
    doorStatus:"Close",
    pressure: 9.40,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-19",
    description: "MM/GF/RN/010",
    parentArea: "Verve",
    deviceId: 20,
    doorStatus:"Close",
    pressure: 7.05,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-20",
    description: "MM/GF/RN/011",
    parentArea: "Sun pharma",
    deviceId: 21,
    doorStatus:"Open",
    pressure: 20.05,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-21",
    description: "MM/GF/RN/012",
    parentArea: "Verve",
    deviceId: 22,
    doorStatus:"Open",
    pressure: 27.50,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "ED-22",
    description: "MM/GF/RN/013",
    parentArea: "Sun pharma",
    deviceId: 23,
    doorStatus:"Close",
    pressure: 16.04,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "Dry Granulation",
    description: "MM/GF/RN/014",
    parentArea: "Verve",
    deviceId: 24,
    doorStatus:"Open",
    pressure: 20.11,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Material Airlock (Lift Area)",
    description: "MM/GF/RN/015",
    parentArea: "Verve",
    deviceId: 25,
    doorStatus:"Close",
    pressure: 9.17,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Change Room -1",
    description: "MM/GF/RN/016",
    parentArea: "Verve",
    deviceId: 26,
    doorStatus:"Open",
    pressure: 23.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "Change Room -2",
    description: "MM/GF/RN/017",
    parentArea: "Verve",
    deviceId: 27,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Manufacturing and washing common corridor",
    description: "MM/GF/RN/018",
    parentArea: "Verve",
    deviceId: 28,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "RM Day store area-1",
    description: "MM/GF/RN/019",
    parentArea: "Verve",
    deviceId: 29,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "Manufacturing Airlock - 1",
    description: "MM/GF/RN/020",
    parentArea: "Verve",
    deviceId: 30,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Manufacturing Airlock - 2",
    description: "MM/GF/RN/021",
    parentArea: "Sun pharma",
    deviceId: 31,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Manufacturing Area - 1",
    description: "MM/GF/RN/022",
    parentArea: "Verve",
    deviceId: 32,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Buffer Area",
    description: "MM/GF/RN/023",
    parentArea: "Verve",
    deviceId: 33,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Disinfect Preparation Area",
    description: "MM/GF/RN/024",
    parentArea: "Verve",
    deviceId: 34,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "Washing Airlock - 1",
    description: "MM/GF/RN/025",
    parentArea: "Verve",
    deviceId: 35,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Washing Airlock - 2",
    description: "MM/GF/RN/026",
    parentArea: "Verve",
    deviceId: 36,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Washing Area - 1",
    description: "MM/GF/RN/027",
    parentArea: "Verve",
    deviceId: 37,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Ampoule day store",
    description: "MM/GF/RN/028",
    parentArea: "Verve",
    deviceId: 38,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Decartoning Area",
    description: "MM/GF/RN/029",
    parentArea: "Verve",
    deviceId: 39,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 31.36,
    humidity: 50.48,
    dewpoint: 19.82,
    grains: 102.02,
  },
  {
    roomName: "Change room (Outer corridoor)",
    description: "MM/GF/RN/030",
    parentArea: "Verve",
    deviceId: 40,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Corridoor Area (Adjacent to filling and autoclave area)",
    description: "MM/GF/RN/031",
    parentArea: "Verve",
    deviceId: 41,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Airlock - 1 (Autoclave Area)",
    description: "MM/GF/RN/032",
    parentArea: "Verve",
    deviceId: 42,
    doorStatus:"Close",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Airlock - 2 (Autoclave Area)",
    description: "MM/GF/RN/033",
    parentArea: "Verve",
    deviceId: 43,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Unit Preparation Area",
    description: "MM/GF/RN/034",
    parentArea: "Verve",
    deviceId: 44,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },
  {
    roomName: "Airlock - 3 (Autoclave Area)",
    description: "MM/GF/RN/035",
    parentArea: "Verve",
    deviceId: 45,
    doorStatus:"Open",
    pressure: 30.01,
    temp: 35.13,
    humidity: 76.93,
    dewpoint: 30.46,
    grains: 195.37,
  },

  // Add more data as needed
];

export default function EmsPanel() {

  const [page, setPage] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const totalPages = Math.ceil(emsData.length / ITEMS_PER_PAGE);
  const paginatedData = emsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));
  
  // Expandable list component
  const EMSExpandableList = ({ data, onSelectRoom }) => {
    const parentAreas = [...new Set(data.map((item) => item.parentArea))];
  
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
            .filter((item) => item.parentArea === parent)
            .map((item) => item.roomName);
  
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
                      className="cursor-pointer hover:text-highlightcolor"
                      onClick={() => onSelectRoom(child)}
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

  const handleSelectRoom = (roomName) => {
    setSelectedRoom(roomName);
    // Optional: if you want to jump to page containing selected room
    const index = emsData.findIndex((item) => item.roomName === roomName);
    if (index >= 0) {
      setPage(Math.floor(index / ITEMS_PER_PAGE) + 1);
    }
  };

  // Floating menu per row
  function RowMenu({ idx, openMenuIndex, setOpenMenuIndex }) {
    const menuRef = useRef(null);
  
    const {
      refs,
      floatingStyles,
      update,
    } = useFloating({
      placement: 'bottom-end',
      middleware: [offset(6), flip(), shift({ padding: 8 })],
    });
  
    useEffect(() => {
      if (!refs.reference.current || !refs.floating.current) return;
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }, [refs.reference, refs.floating, update]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpenMenuIndex(null);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []); 

  
    return (
      <td className="px-4 py-2 text-sm relative z-50">
        <button
          ref={refs.reference}
          onClick={() => setOpenMenuIndex(openMenuIndex === idx ? null : idx)}
          className="p-1 hover:bg-highlightcolor rounded-full"
        >
          <BsThreeDotsVertical className="w-5 h-5" />
        </button>
  
        {openMenuIndex === idx && (
          <div
            ref={(node) => {
              refs.floating.current = node;
              menuRef.current = node;
            }}
            style={floatingStyles}
            className="w-24 bg-backgroundcolor border rounded-md shadow-lg z-10 text-whitecolor"
          >
            <button className="w-full text-left px-4 py-2 hover:bg-highlightcolor">
              Report
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-highlightcolor">
              Chart
            </button>
          </div>
        )}
      </td>
    );
  }

  return(
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`flex flex-col shadow-md transition-all duration-300
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
            <EMSExpandableList data={emsData} onSelectRoom={handleSelectRoom} />
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 px-4">
        <main className="flex-1 overflow-hidden">
          <div className="overflow-auto max-h-[calc(100vh-200px)] border rounded-lg shadow">
            <table className="min-w-full table-auto border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  {[
                    "Room Name",
                    "Description",
                    "Parent Area",
                    "Device ID",
                    "Door Status",
                    "Pressure",
                    "Temp (°C)",
                    "Humidity (%)",
                    "Dew Point",
                    "Grains",
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

              <tbody className="bg-whitecolor divide-y divide-secondary300">
                {paginatedData.map((room, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-highlightcolor ${
                      room.roomName === selectedRoom
                        ? "bg-highlightcolor font-bold"
                        : "bg-whitecolor"
                    }`}
                  >
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.roomName}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.description}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.parentArea}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.deviceId}
                    </td>
                    <td
                      className={`px-4 py-2 text-sm font-semibold ${
                        room.doorStatus === "Open"
                          ? "text-redcolor"
                          : "text-greencolor"
                      }`}
                    >
                      {room.doorStatus}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.pressure} Pa
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.temp} °C
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-blackcolor">
                      {room.humidity} %
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-greencolor">
                      {room.dewpoint}
                    </td>
                    <td className="px-4 py-2 text-sm font-semibold text-greencolor">
                      {room.grains}
                    </td>

                    {/* Row menu dropdown */}
                    <RowMenu
                      idx={idx}
                      openMenuIndex={openMenuIndex}
                      setOpenMenuIndex={setOpenMenuIndex}
                    />
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