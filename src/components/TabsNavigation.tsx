import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TabsNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  activeTab = "All",
  onTabChange = () => {},
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);

  const tabs = [
    { id: "All", label: "All", hasDropdown: false },
    { id: "Popular", label: "Popular", hasDropdown: false },
    { id: "Latest", label: "Latest", hasDropdown: false },
    { id: "Topics", label: "Topics", hasDropdown: true },
    { id: "Topic #1", label: "Topic #1", hasDropdown: false },
  ];

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    onTabChange(tabId);
  };

  const isActive = (tabId: string) => selectedTab === tabId;
  const isHighlighted = (tabId: string) =>
    tabId === "All" || tabId === "Topic #1";

  return (
    <div className="bg-white w-full">
      <div className="w-full border-b border-[#d8d6f0] flex items-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              h-[38px] px-4 pt-2 pb-3 flex justify-center items-center gap-1
              ${isActive(tab.id) ? "border-b-2 border-[#342985]" : ""}
              hover:bg-gray-50 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#342985] focus:ring-opacity-50
            `}
            role="tab"
            aria-selected={isActive(tab.id)}
            tabIndex={0}
          >
            <span
              className={`
                text-sm font-normal leading-none text-center
                ${isHighlighted(tab.id) ? "text-[#342985]" : "text-[#9189A8]"}
              `}
            >
              {tab.label}
            </span>
            {tab.hasDropdown && (
              <ChevronDown className="w-4 h-4 text-[#342985]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsNavigation;
