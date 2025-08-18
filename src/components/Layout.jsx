import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Layout() {
  return (
    <div className="flex h-screen">
           {/* Sidebar - full height, fixed width */}
           <Sidebar />
           {/* Right side: Navbar on top, content below */}
           <div className="flex flex-col flex-1 overflow-hidden">
              <Navbar />
              {/* Page Content */}
              <main className="flex-1 p-6 overflow-auto">
                <Outlet />
              </main>
            </div>
          </div>
        );
}