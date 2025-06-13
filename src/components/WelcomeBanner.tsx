import PostContainer from "./PostContainer.tsx";
import PostEditor from "./post/PostEditor.tsx";
/**
 * Welcome Banner Component
 *
 * A welcome message banner with a decorative vertical bar and typography
 * matching the Figma design specifications.
 */

interface WelcomeBannerProps {
  title?: string;
  description?: string;
}

export default function WelcomeBanner({
  title = "Welcome back!",
  description = "Get career help from the community ...",
}: WelcomeBannerProps) {
  return (
    <div className="bg-white px-10 py-6 rounded-[20px] flex gap-6 h-fit justify-start flex-col items-center w-full">
      {/* Decorative vertical bar */}
      {/* Content section */}
      <div className="flex-1 flex flex-col justify-center h-fit w-full">
        <h2 className="text-[#1c1530] text-2xl font-poppins font-normal leading-8 mb-0">
          {title}
        </h2>
        <p className="text-[#707070] text-base font-poppins font-normal leading-5">
          {description}
        </p>
      </div>
      <PostEditor className="w-screen">
        <PostContainer />
      </PostEditor>
    </div>
  );
}
