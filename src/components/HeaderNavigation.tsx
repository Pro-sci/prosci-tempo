import { MessageSquareTextIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { BellIcon } from "lucide-react";
import React from "react";

interface HeaderNavigationProps {
  className?: string;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  className = "",
}) => {
  return (
    <header
      className={`h-[60px] py-3 border-b border-[#d8d6f0] bg-white ${className}`}
    >
      <div className="px-10 h-full flex justify-center items-center">
        <div className="w-full h-9 flex justify-between items-center gap-8 gap-x-32">
          {/* Logo Section */}
          <div className="flex justify-center items-center gap-2">
            <img
              className="w-6 h-6"
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749572451965-node-2001%3A1163-1749572451081.png"
              alt="Prosci Logo"
            />
            <div className="text-center text-[#1e295a] text-xl font-poppins font-normal leading-7">
              Prosci
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="h-9 px-3 py-2 bg-white rounded-lg border border-[#d8d6f0] flex items-center gap-2 w-full">
              <SearchIcon className="text-[#A8A4C0] size-4 h-4" />

              <input
                type="text"
                placeholder="Search for posts, groups, and people ..."
                className="flex-1 text-[#707070] text-sm font-poppins font-light leading-none bg-transparent border-none outline-none"
              />
            </div>
          </div>

          {/* User Actions Section */}
          <div className="flex justify-start items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              className="w-8 h-8 bg-white rounded-md border border-[#efeffb] flex justify-center items-center hover:bg-gray-50 transition-colors"
              aria-label="Toggle theme"
            >
              <MoonIcon className="text-[#9189A8] w-4 w-5 h-4" />
            </button>

            {/* Chat Button */}
            <button
              className="bg-white rounded-md border border-[#efeffb] flex justify-center items-center hover:bg-gray-50 transition-colors h-8 w-8"
              aria-label="Open chat"
            >
              <MessageSquareTextIcon className="w-4 h-4 text-[#9189A8]" />
            </button>

            {/* Notifications Button with Badge */}
            <button
              className="relative w-8 h-8 bg-white rounded-md border border-[#efeffb] flex justify-center items-center hover:bg-gray-50 transition-colors"
              aria-label="View notifications"
            >
              {/* Notification Badge */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#ee6c4d] rounded-full flex justify-center items-center">
                <span className="text-white text-xs font-poppins font-light leading-none">
                  4
                </span>
              </div>
              <BellIcon className="w-4 h-4 text-[#9189A8]" />
            </button>

            {/* User Avatar */}
            <div className="flex justify-start items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749572452947-node-I2001%3A1187%3B2845%3A2189-1749572452247.png"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
