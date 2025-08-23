import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { usePage } from "./PageContext"; // Adjust path as needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pageTitle } = usePage(); // get dynamic title

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-backgroundcolor text-whitecolor shadow px-6 py-3 flex justify-between items-center">
     
      {/* Left side (e.g., title or logo) */}
      <h1 className="text-lg font-semibold">{pageTitle}</h1>

      {/* Right side (icons) */}
      <div className="flex items-center gap-4 relative">
        <button className="relative">
           <FiBell className="w-6 h-6 text-whitecolor" />
           <span className="absolute top-0 right-0 w-2 h-2 bg-redcolor rounded-full" />
        </button>

    <div className="relative" ref={dropdownRef}>
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="w-8 h-8 bg-secondary300 rounded-full flex items-center justify-center">
         <FiUser className="w-4 h-4 text-secondary600" />
        </button>

      {/* {isOpen && (
        <div className="absolute right-0 mt-2 w-40 top-[40px] bg-backgroundcolor shadow-md rounded-md py-1 z-10">
          <button
            className="w-full flex items-center px-4 py-2 text-sm text-whitecolor"
            onClick={handleLogout}
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
          )} */}
    </div>
</div>
</header>
);
}