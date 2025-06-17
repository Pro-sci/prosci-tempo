import React from "react";

// Featured topics data
const featuredTopics = [
  "Artificial Intelligence",
  "Personal Training",
  "Remotasks",
  "Workflows",
  "Career",
  "Tech",
  "Topics #8",
  "Topics #9",
  "Topics #10",
];

// Events data
const events = [
  {
    id: 1,
    title: "Webinar: Fin Optimization and Insight Analysis",
    date: "Oct 17, 2025",
    icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1750159340460-node-2122%3A1140-1750159339689.png",
  },
  {
    id: 2,
    title: "Webinar: Fin Optimization and Insight Analysis",
    date: "Oct 17, 2025 - Nov 6, 2025",
    icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1750159341379-node-2122%3A1145-1750159340817.png",
  },
  {
    id: 3,
    title: "Webinar: Fin Optimization and Insight Analysis",
    date: "Oct 17, 2025",
    icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1750159342253-node-2122%3A1150-1750159341681.png",
  },
];

// Footer links data
const footerLinks = [
  "Privacy & Cookies",
  "Terms of Use",
  "User Agreement & Guidelines",
];

interface SidePanelProps {
  className?: string;
}

/**
 * SidePanel component displaying featured topics, events calendar, and footer links
 * Matches the Figma design with proper typography, spacing, and colors
 */
export default function SidePanel({ className = "" }: SidePanelProps) {
  return (
    <div
      className={`h-[760px] p-6 border-l border-[#d8d6f0] flex flex-col justify-start items-center gap-6 bg-white ${className}`}
    >
      {/* Featured Topics Section */}
      <div className="bg-white rounded-lg border border-[#d8d6f0] flex flex-col justify-start items-start w-full h-fit">
        {/* Header */}
        <div className="self-stretch h-14 px-6 pt-4 pb-3 flex flex-col justify-start items-start gap-0.5">
          <h2 className="self-stretch text-[#1c1530] text-xl font-semibold font-open-sans leading-7">
            Featured Topics
          </h2>
        </div>

        {/* Content */}
        <div className="self-stretch px-6 pt-4 pb-6 border-t border-[#d8d6f0] flex flex-col justify-start items-start gap-6 h-fit">
          <div className="self-stretch flex flex-wrap justify-start items-center gap-3 h-full">
            {featuredTopics.map((topic, index) => (
              <div
                key={index}
                className="px-2.5 py-1 bg-[#efeffb] rounded-full border border-[#d8d6f0] flex justify-center items-center overflow-hidden"
              >
                <span className="text-[#1c1530] text-sm leading-tight whitespace-nowrap font-normal">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Events Calendar Section */}
      <div className="bg-white rounded-lg border border-[#d8d6f0] flex flex-col justify-start items-start w-full h-fit">
        {/* Header */}
        <div className="self-stretch h-[84px] px-6 pt-4 pb-3 flex flex-col justify-start items-start w-full">
          <h2 className="self-stretch text-[#1c1530] text-xl font-semibold font-open-sans leading-7">
            Events Calendar
          </h2>
          <p className="self-stretch text-[#707070] text-base font-normal font-open-sans leading-7 w-fit text-sm">
            Stay informed about upcoming events.
          </p>
        </div>

        {/* Content */}
        <div className="self-stretch h-fit px-6 pt-2 pb-5 border-t border-[#d8d6f0] flex flex-col justify-start items-start">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`self-stretch py-3 flex justify-start items-start gap-4 ${
                index < events.length - 1
                  ? "border-b border-[#d8d6f0]"
                  : " gap-x-3"
              }`}
            >
              <div className="w-5 h-5 flex justify-center items-center flex-shrink-0">
                <img src={event.icon} alt="Calendar icon" className="h-4 w-4" />
              </div>
              <div className="grow flex flex-col justify-start items-start gap-1 gap-y-1.5">
                <div className="self-stretch text-[#1c1530] text-sm font-normal font-open-sans leading-tight">
                  {event.title}
                </div>
                <div className="text-[#9189a8] text-xs font-normal font-open-sans leading-none">
                  {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-white rounded-lg border border-[#d8d6f0] flex flex-col justify-start items-start w-full h-fit">
        {/* Links */}
        <div className="self-stretch px-6 pt-4 pb-3 flex justify-start items-start gap-4">
          <div className="grow flex flex-col justify-start items-start gap-2">
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className="text-[#9189a8] text-sm font-normal font-open-sans leading-tight text-[12px]"
              >
                {link}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="self-stretch px-6 pt-3 pb-6 border-t border-[#efeffb] flex justify-start items-start gap-4">
          <div className="text-[#707070] text-xs font-normal leading-none">
            <span className="font-open-sans">Prosci Inc. </span>
            <span className="font-poppins"> © </span>
            <span className="font-open-sans">2025. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
