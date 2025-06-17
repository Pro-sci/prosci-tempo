import HeaderNavigation from "./HeaderNavigation.tsx";
import { MoonIcon } from "lucide-react";
import SidebarNavigation from "./SidebarNavigation.tsx";
import WelcomeBanner from "./WelcomeBanner.tsx";
import PostEditor from "./post/PostEditor.tsx";
import React from "react";
import SidePanel from "./SidePanel.tsx";
import EditPost from "./post/EditPost";
import ProfileCompletionBanner from "./ProfileCompletionBanner.tsx";
function Home() {
  return (
    <div className="w-screen h-screen">
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
    </div>
  );
}

export default Home;
