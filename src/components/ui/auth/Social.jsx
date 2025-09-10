import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Github } from 'lucide-react';

const Social = () => {
  return (
    <div>


      {/* Social logins */}
      <div className="grid grid-cols-2 gap-8 md:gap-20 lg:gap-40 px-6">
        {/* Google Card */}
        <button
          type="button"
          onClick={() => console.log("Google login")}
          className="flex flex-col items-center justify-center gap-2 rounded-xl bg-red-500 hover:bg-red-600 text-white p-4 shadow-md transition"
        >
          <FaGoogle className="h-6 w-6" />
          <span className="text-sm font-medium">Google</span>
        </button>

        {/* GitHub Card */}
        <button
          type="button"
          onClick={() => console.log("GitHub login")}
          className="flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white p-4 shadow-md transition"
        >
          <Github className="h-6 w-6" />
          <span className="text-sm font-medium">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
