"use client";

import DashboardNavber from "@/components/dashboard/DashboardNavber";
import DashboardSidebar from "@/components/dashboard/DashboardSideber";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <DashboardSidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50">
            <DashboardSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardNavber
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="p-4 md:ml-72">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
