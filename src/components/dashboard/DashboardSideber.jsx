"use client";
import React from "react";
import {
  Home,
  BookOpen,
  Users,
  UserCheck,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen, current: false, count: 24 },
  { name: "Students", href: "/dashboard/students", icon: Users, current: false, count: 320 },
  { name: "Instructors", href: "/dashboard/instructors", icon: UserCheck, current: false, count: 12 },
  { name: "Assignments", href: "/dashboard/assignments", icon: FileText, current: false, count: 58 },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3, current: false },
  { name: "Settings", href: "/dashboard/settings", icon: Settings, current: false },
];

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-screen w-72 bg-white border-r border-gray-200 shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <span className="font-bold text-lg">LMS Dashboard</span>
        <p className="text-xs text-gray-500">Manage your learning system</p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-2 p-4">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Main Menu
        </div>
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
                item.current
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
              {item.count && (
                <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Version Info */}
      <div className="p-4 mt-auto">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-200">
          <div>
            <div className="text-sm font-medium">ClubHub LMS</div>
            <span className="text-xs font-bold text-green-700">
              version: 1.0.0
            </span>
            <div className="text-xs text-gray-500">Latest version</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
