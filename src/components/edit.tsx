import HeaderNavigation from "./HeaderNavigation.tsx";
import {
  MoonIcon,
  HomeIcon,
  HelpCircle,
  Users,
  Calendar,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import PostsContainer from "./PostsContainer.tsx";
import CreatePost from "./post/CreatePost";
import TabsNavigation from "./TabsNavigation.tsx";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import ProfileCompletionBanner from "./ProfileCompletionBanner.tsx";
import PostContainer from "./PostContainer.tsx";

function EditPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="w-screen h-screen">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="w-screen h-screen bg-white">
          <ProfileCompletionBanner className="sticky" />
          <HeaderNavigation className="sticky">
            <MoonIcon />
          </HeaderNavigation>
          <div className="flex">
            <SidebarNavigation className="items-start w-max justify-start flex sticky h-screen absolute static" />
            <WelcomeBanner className=" h-screen w-screen justify-center items-start static">
              <PostEditor />
            </WelcomeBanner>

            <SidePanel className="h-screen w-5/12">SidePanel content</SidePanel>
          </div>
        </div>

        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Modal Pop-up</DialogTitle>
            <DialogDescription>
              This is a modal pop-up with background blur effect.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600">
              This modal appears on top of all content with a blurred
              background.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-[#342985] text-white rounded-lg hover:bg-[#2a1f6b] transition-colors"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

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

function SidePanel({ className = "" }: SidePanelProps) {
  return (
    <div
      className={`h-[760px] p-6 border-l border-[#d8d6f0] flex flex-col justify-start items-center gap-6 bg-white ${className}`}
    >
      {/* Edit History Section */}
      <div className="bg-white rounded-lg border border-[#d8d6f0] flex flex-col justify-start items-start w-full h-fit">
        {/* Header */}
        <div className="self-stretch px-6 pt-4 pb-3 flex flex-col justify-start items-start gap-0.5">
          <h2 className="self-stretch text-[#1c1530] text-2xl font-semibold font-sans leading-7">
            Edit History
          </h2>
          <p className="self-stretch text-[#9189a8] text-sm font-normal leading-tight">
            You can view and manage your content version histories here.
          </p>
        </div>

        {/* Content */}
        <div className="self-stretch px-6 pt-4 pb-6 border-t border-[#d8d6f0] flex flex-col justify-start items-start gap-4">
          {/* History Item 1 */}
          <div className="self-stretch flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-[#1c1530] text-lg font-semibold leading-6 mb-1">
                My Awesome Post Title #3
              </h3>
              <p className="text-[#9189a8] text-sm leading-tight mb-2">
                This is a preview of my post content. I...
              </p>
              <span className="text-[#9189a8] text-sm">Jun 17 • 06:00 AM</span>
            </div>
            <button className="px-4 py-2 bg-[#342985] text-white text-sm font-medium rounded-lg hover:bg-[#2a1f6b] transition-colors">
              Restore
            </button>
          </div>

          {/* History Item 2 */}
          <div className="self-stretch flex justify-between items-start gap-4 pt-4 border-t border-[#f0f0f0]">
            <div className="flex-1">
              <h3 className="text-[#1c1530] text-lg font-semibold leading-6 mb-1">
                My Awesome Post Title #2
              </h3>
              <p className="text-[#9189a8] text-sm leading-tight mb-2">
                This is a preview of my post content. I...
              </p>
              <span className="text-[#9189a8] text-sm">Jun 17 • 06:00 AM</span>
            </div>
            <button className="px-4 py-2 bg-white border border-[#d8d6f0] text-[#9189a8] text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Restore
            </button>
          </div>

          {/* History Item 3 */}
          <div className="self-stretch flex justify-between items-start gap-4 pt-4 border-t border-[#f0f0f0]">
            <div className="flex-1">
              <h3 className="text-[#1c1530] text-lg font-semibold leading-6 mb-1">
                My Awesome Post Title #1
              </h3>
              <p className="text-[#9189a8] text-sm leading-tight mb-2">
                This is a preview of my post content. I...
              </p>
              <span className="text-[#9189a8] text-sm">Jun 17 • 06:00 AM</span>
            </div>
            <button className="px-4 py-2 bg-white border border-[#d8d6f0] text-[#9189a8] text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Restore
            </button>
          </div>
        </div>
      </div>
      {/* Events Calendar Section */}
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

interface WelcomeBannerProps {
  title?: string;
  description?: string;
}

function WelcomeBanner({
  title = "Welcome back!",
  description = "Get career help from the community ...",
}: WelcomeBannerProps) {
  return (
    <div className="bg-white py-6 rounded-[20px] flex gap-6 h-fit justify-start flex-col items-center w-full px-6">
      {/* Decorative vertical bar */}
      {/* Breadcrumb Navigation */}
      <div className="w-full flex items-center gap-2 mb-4">
        <div className="w-6 h-6 border border-[#d8d6f0] rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-[#9189a8] rounded-sm"></div>
        </div>
        <span className="text-[#9189a8] text-sm">|</span>
        <button className="text-[#342985] text-sm font-medium hover:underline">
          Home
        </button>
        <span className="text-[#9189a8] text-sm">›</span>
        <span className="text-[#9189a8] text-sm">...</span>
        <span className="text-[#9189a8] text-sm">›</span>
        <button className="text-[#9189a8] text-sm hover:text-[#342985] hover:underline">
          My Awesome Post Title
        </button>
        <span className="text-[#9189a8] text-sm">›</span>
        <span className="text-[#9189a8] text-sm font-medium">Edit Post</span>
      </div>
      {/* Content section */}
      <PostEditor className=" w-[100%]">
        <PostContainer />
      </PostEditor>
    </div>
  );
}

interface PostEditorProps {
  /** User avatar image URL */
  avatarUrl?: string;
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Callback function when input value changes */
  onInputChange?: (value: string) => void;
  /** Current input value */
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

const PostEditor: React.FC<PostEditorProps> = ({
  avatarUrl = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749580551990-node-I2028%3A2231%3B2845%3A2189-1749580549574.png",
  placeholder = "Share your insights ...",
  onInputChange,
  value = "",
  className = "",
  children,
}) => {
  const [title, setTitle] = useState("My Awesome Post Title");
  const [content, setContent] = useState(
    "This is a preview of my post content. It shows how the post will appear when published. Lorem ipsum dolor sit amet consectetur. Arcu arcu purus ipsum gravida. Tincidunt est potenti curabitur tincidunt augue sed tortor. Dolor malesuada cursus ut ac mi non dignissim risus. Vel egestas neque porttitor mus donec pharetra odio dui auctor. Habitant volutpat tellus venenatis risus eget massa donec nec.",
  );
  const [tags, setTags] = useState([
    "Artificial Intelligence",
    "Personal Training",
    "Remotasks",
  ]);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const wordCount = content
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const handleSaveAndPublish = () => {
    console.log("Save and publish", { title, content, tags, wordCount });
  };

  const handleCancel = () => {
    console.log("Cancel editing");
  };

  const removeAttachment = () => {
    console.log("Remove attachment");
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto p-6 rounded-2xl bg-[#F5F5F5] ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt="User avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-medium text-[#1c1530] mb-1">
              Editing your post ... ...
            </h2>
            <p className="text-[#9189a8] text-sm">
              And share your valuable insights ...
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 text-[#9189a8] hover:opacity-70">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-6">
        <label className="block text-sm font-normal text-[#1c1530] mb-2">
          Edit your post title.
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-[#d8d6f0] rounded-lg text-[#1c1530] text-lg font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#342985] focus:border-transparent"
          placeholder="Post title..."
        />
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-normal text-[#1c1530]">
            Edit the description of your post.
          </label>
          <span className="text-sm text-[#707070]">
            Word count: {wordCount}
          </span>
        </div>

        <div className="border border-[#d8d6f0] rounded-lg bg-white">
          {/* Toolbar */}
          <div className="flex items-center gap-2 p-3 border-b border-[#d8d6f0]">
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8] font-bold">
              B
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8] italic">
              I
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8] underline">
              U
            </button>
            <div className="w-px h-4 bg-[#d8d6f0] mx-1"></div>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              ≡
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              •
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              ☐
            </button>
            <div className="w-px h-4 bg-[#d8d6f0] mx-1"></div>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              &quot;
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              🔗
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              &lt;&gt;
            </button>
            <button className="w-6 h-6 cursor-pointer hover:opacity-70 text-[#9189A8]">
              @
            </button>
          </div>

          {/* Content Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 min-h-[200px] resize-none border-none outline-none text-[#707070] text-base leading-relaxed"
            placeholder="Share your insights here..."
          />

          {/* Attachment Preview */}
          <div className="p-4 border-t border-[#d8d6f0]">
            <div className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg border border-[#e9ecef] max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#bbdef0] rounded flex items-center justify-center">
                  <div className="w-8 h-10 bg-white rounded shadow-sm flex items-center justify-center">
                    <div className="w-4 h-5 bg-[#4a90e2] rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1c1530]">
                    Screenshot (...
                  </div>
                  <div className="text-xs text-[#707070]">107.7 KB</div>
                </div>
              </div>
              <button
                onClick={removeAttachment}
                className="text-[#EE6C4D] hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center gap-3 p-4 border-t border-[#d8d6f0]">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#efeffb] rounded-md hover:bg-[#e0e0f0] transition-colors">
              <svg
                className="w-4 h-4 text-[#342985]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <span className="text-sm text-[#342985]">Attach a File</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#efeffb] rounded-md hover:bg-[#e0e0f0] transition-colors">
              <svg
                className="w-4 h-4 text-[#342985]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21" />
              </svg>
              <span className="text-sm text-[#342985]">Upload an Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="mb-8">
        <label className="block text-sm font-normal text-[#1c1530] mb-2">
          Edit your tags.
        </label>
        <div className="flex flex-wrap gap-2 bg-[#ffffff] px-3 py-3 border border-[#D8D6F0] rounded-xl mb-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1.5 bg-[#efeffb] rounded-full border border-[#d8d6f0] text-[#1c1530] text-xs font-light"
            >
              {tag}
            </div>
          ))}
          <button
            onClick={() => setIsTagsOpen(!isTagsOpen)}
            className="flex items-center gap-1 px-3 py-1.5 border border-[#d8d6f0] rounded-full hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#342985]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex pt-4 border-t border-[#d8d6f0] flex-col gap-y-4 items-end justify-end">
        <div className="flex items-center gap-4 text-sm text-[#707070] w-full">
          <span>Draft saved at 12:10 PM (auto-saving...)</span>
          <span>•</span>
          <span>Last edited: 5 min ago</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 px-4 py-2 border border-[#d8d6f0] text-[#707070] hover:bg-gray-50 rounded-lg transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Cancel Editing
          </button>
          <button
            onClick={handleSaveAndPublish}
            className="flex items-center gap-2 px-4 py-2 bg-[#342985] text-white hover:bg-[#2a1f6b] transition-colors rounded-lg"
          >
            Save and Publish
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
            </svg>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

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
function SidebarNavigation({
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

export default EditPage;
