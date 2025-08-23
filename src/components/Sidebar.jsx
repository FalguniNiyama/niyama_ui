import { useState } from "react";
import { FaHome, FaCogs, FaChartLine, FaFileAlt, FaThumbsUp, FaUsers, FaMap, FaUsb, FaRegBuilding, FaTabletAlt, 
  FaWrench, FaUserTie, FaCalendarPlus, FaUser, FaSignOutAlt, FaSlidersH, FaMapPin, FaTh, FaCrosshairs } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { usePage } from "./PageContext";

const menuItems = [
  { name: "Dashboard", icon: FaHome, path: "/dashboard"},
  { name: "EMS Panel", icon: MdDashboard, path: "/emspanel" },
  { name: "BMS Panel", icon: MdDashboard, path: "/bmspanel"},
  { name: "Live Chart", icon: FaChartLine, path: "/livechart" },
  { name: "Reports", icon: FaFileAlt, path: "/reports" },
  { name: "Acknowledge", icon: FaThumbsUp, path: "/acknowledge" },
  { name: "Settings", icon: FaCogs,
    children: [
      { name: "Accounts", icon: FaUsers, path: "/settings/accounts"},
      { name: "Areas", icon: FaMap, path: "/settings/areas" },
      { name: "Channels", icon: FaUsb, path: "/settings/channels" },
      { name: "Departments", icon: FaRegBuilding, path: "/settings/departments" },
      { name: "Devices", icon: FaTabletAlt, path: "/settings/devices" },
      { name: "Device Settings", icon: FaWrench, path: "/settings/devicesettings" },
      { name: "PID Settings", icon: FaSlidersH, path: "/settings/pidsettings"},
      { name: "AHU Schedule", icon: FaMapPin, path: "/settings/ahuschedule"},
      { name: "VFD Schedule", icon: FaMapPin, path: "/settings/vfdschedule"},
      { name: "Cascade Setting", icon: FaTh, path: "/settings/cascadesetting"},
      { name: "Output Mapping", icon: FaMapPin, path: "/settings/outputmapping"},
      { name: "Calibrations", icon: FaCrosshairs, path: "/settings/calibrations"},
      { name: "Roles", icon: FaUserTie, path: "/settings/roles" },
      { name: "Shifts", icon: FaCalendarPlus, path: "/settings/shifts" },
      { name: "Users", icon: FaUser, path: "/settings/users" },
    ],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const [isPinned, setIsPinned] = useState(false); 
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const { setPageTitle } = usePage();

  const handleMenuClick = (item) => {
    if (item.path) {
      setPageTitle(item.name);
      navigate(item.path, { replace: true });
      setIsOpen(false); 
    } else if (item.children) {
      setExpanded(prev => (prev === item.name ? null : item.name));
    }
  };

  const handleLogout = () => {
    // 🔹 clear auth/session logic
    localStorage.clear();
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      setIsOpen(false);
      navigate('/login', { replace: true });
    }else{
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-backgroundcolor">
      <button className="md:hidden fixed top-4 left-4 z-50 bg-whitecolor p-2 border rounded" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
      </button>

      {isOpen && <div className="fixed inset-0 bg-balckcolor40 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      <aside className={`fixed top-0 left-0 h-full flex flex-col bg-backgroundcolor text-whitecolor shadow z-50 transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static
        ${isCollapsed ? "w-16" : "w-64"}`}
        onMouseEnter={() => { if (!isPinned) setIsCollapsed(false); }}
        onMouseLeave={() => { if (!isPinned) setIsCollapsed(true); }}>

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          {!isCollapsed && <span className="font-bold text-lg">Niyama</span>}
          <button onClick={() => {
            setIsPinned(prev => {
              const pinned = !prev;
              setIsCollapsed(!pinned);
              return pinned;
            });
          }}>
            <HiOutlineMenu className="h-5 w-5" />
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary600 scrollbar-track-backgroundcolor">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between p-2 text-sm hover:bg-secondary600 rounded cursor-pointer"
                onClick={() => handleMenuClick(item)}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span>{item.name}</span>}
                </div>
                {!isCollapsed && item.children && <span>{expanded === item.name ? "▲" : "▼"}</span>}
              </div>

              {item.children && expanded === item.name && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1 text-sm text-secondary300">
                  {item.children.map((child) => (
                    <div key={child.name} className="py-1 px-2 hover:bg-secondary600 rounded cursor-pointer"
                      onClick={() => handleMenuClick(child)}>
                      <div className="flex items-center space-x-3">
                        <child.icon className="h-5 w-5" />
                        <span>{child.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 🔹 Logout Button at Bottom */}
        <div className="p-4 border-t">
          <div
            className="flex items-center space-x-3 p-2 text-sm hover:bg-darkgraycolor rounded cursor-pointer"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="h-5 w-5" />
            {!isCollapsed && <span>Logout</span>}
          </div>
        </div>
      </aside>
    </div>
  );
}
