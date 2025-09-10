"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Social = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:gap-10 lg:gap-16 px-6">
      {/* Google Card */}
      <Card
        onClick={() => console.log("Google login")}
        className="cursor-pointer group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-2xl"
      >
        <CardContent className="flex flex-col items-center justify-center gap-3 py-6">
          <div className="bg-red-500 text-white p-3 rounded-full group-hover:bg-red-600 transition">
            <FaGoogle className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition">
            Continue with Google
          </span>
        </CardContent>
      </Card>

      {/* GitHub Card */}
      <Card
        onClick={() => console.log("GitHub login")}
        className="cursor-pointer group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-2xl"
      >
        <CardContent className="flex flex-col items-center justify-center gap-3 py-6">
          <div className="bg-gray-900 text-white p-3 rounded-full group-hover:bg-gray-800 transition">
            <Github className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition">
            Continue with GitHub
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default Social;
