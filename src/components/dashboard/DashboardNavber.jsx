import React from "react";
import { Menu, Search, X } from "lucide-react";
import Logo from "../logo";

const DashboardNavber = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6 text-gray-800">
        <div className="flex items-center space-x-3 flex-shrink-0">
            <Logo/>
          <span className="text-xl font-bold text-green-600">Esey Education</span>
        </div>

        <div className="flex-1 max-w-lg mx-6 hidden sm:flex flex-col">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses, students, instructors..."
              className="pl-10 w-full bg-gray-100 rounded-xl h-10 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 flex-shrink-0 relative">
          <div className="sm:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl hover:bg-green-100 transition-colors"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavber;
