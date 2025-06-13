import {
  HomeIcon,
  HelpCircle,
  Users,
  Calendar,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import React from "react";

interface NavigationItem {
  id: string;
  label: string;
  iconUrl: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownIconUrl?: string;
}

interface SidebarNavigationProps {
  navigationItems?: NavigationItem[];
  className?: string;
}

const defaultNavigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    iconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577686258-node-2019%3A1114-1749577685141.png",
    isActive: true,
  },
  {
    id: "feed",
    label: "Feed",
    iconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577687303-node-2019%3A1117-1749577686527.png",
  },
  {
    id: "events",
    label: "Events",
    iconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577688268-node-2019%3A1120-1749577687567.png",
  },
  {
    id: "groups",
    label: "Groups",
    iconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577689239-node-2019%3A1123-1749577688499.png",
    hasDropdown: true,
    dropdownIconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577690191-node-2019%3A1126-1749577689457.png",
  },
  {
    id: "help",
    label: "Help",
    iconUrl:
      "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749577691133-node-2019%3A1128-1749577690408.png",
  },
];

/**
 * SidebarNavigation Component
 *
 * A vertical navigation sidebar with icons and labels.
 * Supports active states and dropdown indicators.
 *
 * @param navigationItems - Array of navigation items to display
 * @param className - Additional CSS classes
 */
export default function SidebarNavigation({
  navigationItems = defaultNavigationItems,
  className = "",
}: SidebarNavigationProps) {
  return (
    <nav
      className={`bg-white border-r border-[#d8d6f0] px-4 py-6 flex flex-col items-center ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Navigation Menu List */}
      <div className="flex flex-col items-center gap-6">
        {navigationItems.map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  );
}

/**
 * Individual Navigation Item Component
 */
interface NavigationItemProps {
  item: NavigationItem;
}

function NavigationItem({ item }: NavigationItemProps) {
  const textColor = item.isActive ? "text-[#342985]" : "text-[#9189A8]";

  return (
    <button
      className="py-1 rounded-[5px] flex flex-col justify-center items-center gap-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#342985] focus:ring-opacity-50"
      aria-label={`Navigate to ${item.label}`}
      aria-current={item.isActive ? "page" : undefined}
    >
      {/* Label and Dropdown Container */}
      <div className="w-6 h-6 flex justify-center items-center">
        {item.id === "home" ? (
          <HomeIcon className="w-full h-full text-[#342985]" />
        ) : item.id === "help" ? (
          <HelpCircle className="w-full h-full text-[#9189A8]" />
        ) : item.id === "groups" ? (
          <Users className="w-full h-full text-[#9189A8]" />
        ) : item.id === "events" ? (
          <Calendar className="w-full h-full text-[#9189A8]" />
        ) : item.id === "feed" ? (
          <MessageSquare className="w-full h-full text-[#9189A8]" />
        ) : (
          <img
            src={item.iconUrl}
            alt={`${item.label} icon`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <div className="flex justify-center items-center gap-1">
        <span
          className={`${textColor} text-xs font-normal font-poppins leading-none`}
        >
          {item.label}
        </span>

        {/* Dropdown Arrow Icon */}
        {item.hasDropdown && <ChevronDown className="w-3 h-3 text-[#342985]" />}
      </div>
      {/* Main Icon */}
    </button>
  );
}
