import React from "react";
import { AlertCircleIcon } from "lucide-react";
import { AlertCircle } from "lucide-react";

interface ProfileCompletionBannerProps {
  className?: string;
}

/**
 * ProfileCompletionBanner - A banner component that prompts users to complete their profile
 * to gain access to share valuable insights by getting approved.
 */
const ProfileCompletionBanner: React.FC<ProfileCompletionBannerProps> = ({
  className = "",
}) => {
  const handleCompleteProfileClick = () => {
    // Handle navigation to profile completion page
    console.log("Navigate to profile completion");
  };

  return (
    <div
      className={`h-11 px-20 py-3 bg-[#342985] flex justify-center items-center gap-8 ${className}`}
      role="banner"
      aria-label="Profile completion notification"
    >
      <div className="flex items-center gap-2 container w-fit justify-start">
        {/* Alert Icon */}
        {/* Banner Text Content */}
        <div className="flex items-center container gap-x-2 w-max justify-center">
          <AlertCircleIcon className="w-5 h-5 text-[#BBDEF0]" />
          <span className="text-neutral-100 text-sm font-normal font-poppins leading-none">
            Gain access to share valuable insights by getting approved. Start by
            completing your profile.{" "}
          </span>
          <button
            onClick={handleCompleteProfileClick}
            className="text-[#ee6c4d] text-sm font-bold font-poppins underline leading-none hover:text-[#d85a3d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ee6c4d] focus:ring-opacity-50 rounded ml-0 ml-1"
            aria-label="Complete your profile"
          >
            Complete profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletionBanner;
