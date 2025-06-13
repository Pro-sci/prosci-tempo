import TabsNavigation from "./../TabsNavigation.tsx";
import PostContainer from "./../PostContainer.tsx";
import PostsContainer from "./../PostsContainer.tsx";
import CreatePost from "./CreatePost";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";

/**
 * PostEditor Component
 *
 * A clean, intuitive post creation interface that allows users to compose content
 * with an input field and user avatar, matching the Figma design specifications.
 */
interface PostEditorProps {
  /** User avatar image URL */
  avatarUrl?: string;
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Callback function when input value changes */
  onInputChange?: (value: string) => void;
  /** Current input value */
  value?: string;
}

const PostEditor: React.FC<PostEditorProps> = ({
  avatarUrl = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749580551990-node-I2028%3A2231%3B2845%3A2189-1749580549574.png",
  placeholder = "Share your insights ...",
  onInputChange,
  value = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(event.target.value);
  };

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const handlePublish = (postData: any) => {
    console.log("Post published:", postData);
    setIsModalOpen(false);
  };

  const handleSaveDraft = (postData: any) => {
    console.log("Draft saved:", postData);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full px-6 pt-5 pb-6 bg-white rounded-2xl border border-[#d8d6f0] flex flex-col justify-start items-start gap-4 overflow-hidden h-fit">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        {/* Input Section */}
        <div className="justify-start items-center flex">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={avatarUrl}
            alt="User avatar"
          />
        </div>
        <div className="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <div
                className="grow shrink basis-0 h-10 p-3 bg-white rounded-lg border border-[#d8d6f0] justify-start items-center flex overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={handleInputClick}
              >
                <div className="grow shrink basis-0 text-[#707070] text-sm font-normal font-poppins leading-none">
                  {placeholder}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[850px] p-0 border-none bg-transparent">
              <CreatePost
                avatarUrl={avatarUrl}
                onPublish={handlePublish}
                onSaveDraft={handleSaveDraft}
                onClose={handleClose}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Avatar Section */}
      </div>
      <TabsNavigation className=" w-full" />
      <PostContainer />
      <PostsContainer className="gap-y-3" />
    </div>
  );
};

export default PostEditor;
