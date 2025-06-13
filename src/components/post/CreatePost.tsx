import React, { useState } from "react";
import {
  SaveIcon,
  SendIcon,
  NotebookTextIcon,
  ChevronDownIcon,
  XCircle,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  CheckSquare,
  Quote,
  Link,
  Code,
  AtSign,
  Paperclip,
  Image,
  GripHorizontal,
} from "lucide-react";

/**
 * CreatePost Component
 *
 * A comprehensive post creation interface that allows users to compose rich content
 * with multimedia elements, formatting options, and publishing controls.
 */
interface CreatePostProps {
  /** User avatar image URL */
  avatarUrl?: string;
  /** Callback when post is published */
  onPublish?: (postData: PostData) => void;
  /** Callback when post is saved as draft */
  onSaveDraft?: (postData: PostData) => void;
  /** Callback when modal is closed */
  onClose?: () => void;
  /** Initial post data */
  initialData?: Partial<PostData>;
}

interface PostData {
  title: string;
  content: string;
  tags: string[];
  wordCount: number;
}

const CreatePost: React.FC<CreatePostProps> = ({
  avatarUrl = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C168204332-1749585306993-node-I2043%3A1275%3B2845%3A2189-1749585306290.png",
  onPublish,
  onSaveDraft,
  onClose,
  initialData = {},
}) => {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [tags, setTags] = useState<string[]>(initialData.tags || []);
  const [wordCount, setWordCount] = useState(initialData.wordCount || 123);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const handleContentChange = (value: string) => {
    setContent(value);
    // Simple word count calculation
    const words = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  const handlePublish = () => {
    const postData: PostData = { title, content, tags, wordCount };
    onPublish?.(postData);
  };

  const handleSaveDraft = () => {
    const postData: PostData = { title, content, tags, wordCount };
    onSaveDraft?.(postData);
  };

  return (
    <div className="w-[800px] p-4 bg-white rounded-2xl border border-[#d8d6f0] flex flex-col justify-center items-center gap-4 h-fit">
      <div className="self-stretch px-4 pt-3 pb-4 bg-neutral-100 rounded-lg flex flex-col justify-start items-start gap-3 h-fit">
        {/* Header Section */}
        <div className="self-stretch pb-4 justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center flex">
            <img
              className="rounded-full object-cover w-12 h-12"
              src={avatarUrl}
              alt="User avatar"
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex gap-y-0.5">
            <div className="self-stretch text-[#1c1530] text-xl font-medium font-poppins leading-7">
              Share your insights ...
            </div>
            <div className="justify-center items-center gap-1.5 inline-flex gap-x-1">
              <NotebookTextIcon className="w-4 h-4 text-[#342985]" />

              <div className="text-[#342985] text-sm font-normal font-poppins underline leading-none">
                View guidelines
              </div>
            </div>
          </div>

          <div
            className="w-6 h-6 py-0.5 justify-center items-center flex pl-px pr-px cursor-pointer"
            onClick={onClose}
          >
            <XCircle
              className="w-5 h-5 cursor-pointer hover:opacity-70"
              style={{ color: "#EE6C4D" }}
            />
          </div>
        </div>

        {/* Tabs and Action Buttons */}
        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 h-9 justify-between items-center flex">
            {/* Tabs */}
            <div className="p-1 bg-[#efeffb] rounded-lg justify-start items-start flex">
              <button
                onClick={() => setActiveTab("edit")}
                className={`h-7 px-3 py-1.5 rounded-md justify-center items-center flex ${
                  activeTab === "edit" ? "bg-white" : ""
                }`}
              >
                <div
                  className={`text-center text-sm font-poppins leading-none ${
                    activeTab === "edit"
                      ? "text-[#1C1530]"
                      : "text-[#707070] font-medium"
                  }`}
                >
                  Edit Post
                </div>
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`h-7 px-3 py-1.5 rounded-md justify-center items-center flex ${
                  activeTab === "preview" ? "bg-white" : ""
                }`}
              >
                <div
                  className={`text-center text-sm font-poppins leading-none ${
                    activeTab === "preview"
                      ? "text-[#1c1530] font-semibold"
                      : "text-[#707070] font-normal"
                  }`}
                >
                  Post Preview
                </div>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="justify-start items-center gap-3 flex">
              <button
                onClick={handleSaveDraft}
                className="px-3 py-2 bg-white rounded-md border border-[#d8d6f0] justify-center items-center gap-1 flex overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <SaveIcon className="w-4 h-4 text-[#9189A8]" />

                <div className="px-1 justify-start items-start flex">
                  <div className="text-[#1c1530] text-sm font-normal font-poppins leading-none">
                    Save as Draft
                  </div>
                </div>
              </button>
              <button
                onClick={handlePublish}
                className="px-3 py-2 bg-[#342985] rounded-md justify-center items-center gap-1 flex overflow-hidden hover:bg-[#2a1f6b] transition-colors"
              >
                <div className="px-1 justify-start items-start flex">
                  <div className="text-white text-sm font-normal font-poppins leading-none">
                    Publish
                  </div>
                </div>

                <SendIcon className="w-4 h-4 text-[#F5F5F5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="self-stretch py-2 flex-col justify-start items-start gap-3 flex h-fit">
          {/* Title Input */}
          <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#1c1530] text-sm font-normal font-poppins leading-none">
                Add a compelling title (optional).
              </div>
            </div>
            <div className="self-stretch p-3 bg-white rounded-lg border border-[#d8d6f0] justify-start items-center inline-flex overflow-hidden h-40">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title ..."
                className="grow shrink basis-0 text-[#707070] text-sm font-normal font-poppins leading-none bg-transparent border-none outline-none placeholder:text-[#707070]"
              />
            </div>
          </div>

          {/* Content Textarea */}
          <div className="self-stretch h-[184px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#1c1530] text-sm font-normal font-poppins leading-none">
                Add a description for your post.
              </div>
              <div className="text-center text-[#707070] text-sm font-normal font-poppins leading-none">
                Word count: {wordCount}
              </div>
            </div>
            <div className="self-stretch p-3 bg-white rounded-lg border border-[#d8d6f0] flex-col justify-start items-start gap-3 flex overflow-hidden h-52">
              {/* Text Editor Toolbar */}
              <div className="justify-start items-center gap-2 inline-flex">
                <Bold className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <Italic className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <Underline className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <div className="w-px self-stretch bg-[#9189A8]"></div>
                <ListOrdered className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <List className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <CheckSquare className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <div className="w-px self-stretch bg-[#9189A8]"></div>
                <Quote className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <Link className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <Code className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
                <AtSign className="w-3 h-3 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              </div>
              {/* Content Textarea */}
              <textarea
                value={content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder="Share your insights here..."
                className="self-stretch grow shrink basis-0 text-[#707070] text-sm font-normal font-poppins leading-none bg-transparent border-none outline-none resize-none placeholder:text-[#707070]"
              />
              {/* Bottom Actions */}
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <button className="px-2 py-1.5 bg-[#efeffb] rounded-md justify-center items-center gap-1 flex hover:bg-[#e0e0f0] transition-colors">
                    <Paperclip className="w-4 h-4 text-[#342985]" />
                    <div className="text-[#342985] text-sm font-normal font-poppins leading-none">
                      Attach a File
                    </div>
                  </button>
                  <button className="px-2 py-1.5 bg-[#efeffb] rounded-md justify-center items-center gap-1 flex hover:bg-[#e0e0f0] transition-colors">
                    <Image className="w-4 h-4 text-[#342985]" />
                    <div className="text-[#342985] text-sm font-normal font-poppins leading-none">
                      Upload an Image
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Input */}
          <div className="self-stretch flex-col justify-start items-start gap-2 flex h-fit">
            <div
              className="self-stretch p-3 bg-white rounded-lg border border-[#d8d6f0] justify-start items-center inline-flex overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setIsTagsOpen(!isTagsOpen)}
            >
              <div className="grow shrink basis-0 text-[#707070] text-sm font-normal font-poppins leading-none">
                Select Tags
              </div>

              <ChevronDownIcon className="w-5 h-5 text-[#342985]" />
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="justify-start items-center gap-1.5 inline-flex">
          <div className="text-[#707070] text-sm font-normal font-poppins leading-none">
            Draft saved at 12:10 PM (auto-saving...)
          </div>
          <div className="w-[3px] h-[3px] relative bg-[#c0bed8] rounded-[50px]"></div>
          <div>
            <span className="text-[#707070] text-sm font-normal font-poppins leading-none">
              Network:{" "}
            </span>
            <span className="text-[#018e42] text-sm font-normal font-poppins leading-none">
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
