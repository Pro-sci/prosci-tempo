import React, { useState } from "react";
import {
  XIcon,
  HistoryIcon,
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
  ChevronDown,
  Trash2,
  Send,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * EditPost Component
 *
 * A modal component for editing existing posts with rich text editing capabilities,
 * file attachments, and tag management.
 */
interface EditPostProps {
  /** User avatar image URL */
  avatarUrl?: string;
  /** Initial post title */
  initialTitle?: string;
  /** Initial post content */
  initialContent?: string;
  /** Initial tags */
  initialTags?: string[];
  /** Callback when post is saved and published */
  onSaveAndPublish?: (postData: EditPostData) => void;
  /** Callback when editing is cancelled */
  onCancel?: () => void;
  /** Callback when modal is closed */
  onClose?: () => void;
}

interface EditPostData {
  title: string;
  content: string;
  tags: string[];
  wordCount: number;
}

const EditPost: React.FC<EditPostProps> = ({
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
  initialTitle = "My Awesome Post Title",
  initialContent = "This is a preview of my post content. It shows how the post will appear when published. Lorem ipsum dolor sit amet consectetur. Arcu arcu purus ipsum gravida. Tincidunt est potenti curabitur tincidunt augue sed tortor. Dolor malesuada cursus ut ac mi non dignissim risus. Vel egestas neque porttitor mus donec pharetra odio dui auctor. Habitant volutpat tellus venenatis risus eget massa donec nec.",
  initialTags = ["Artificial Intelligence", "Personal Training", "Remotasks"],
  onSaveAndPublish,
  onCancel,
  onClose,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const wordCount = content
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const handleSaveAndPublish = () => {
    const postData: EditPostData = { title, content, tags, wordCount };
    onSaveAndPublish?.(postData);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const removeAttachment = () => {
    // Handle attachment removal
    console.log("Remove attachment");
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-2xl w-[50%]">
      <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-[#F5F5F5]">
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
                Editing your post ...
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#342985]">
                <HistoryIcon className="w-4 h-4" />
                <span className="underline cursor-pointer hover:opacity-70">
                  View previous versions of this content
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 text-[#EE6C4D] hover:opacity-70 transition-opacity"
          >
            <X className="w-6 h-6" />
          </button>
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
              <Bold className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <Italic className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <Underline className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <div className="w-px h-4 bg-[#d8d6f0] mx-1"></div>
              <ListOrdered className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <List className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <CheckSquare className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <div className="w-px h-4 bg-[#d8d6f0] mx-1"></div>
              <Quote className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <Link className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <Code className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
              <AtSign className="w-4 h-4 cursor-pointer hover:opacity-70 text-[#9189A8]" />
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
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 p-4 border-t border-[#d8d6f0]">
              <button className="flex items-center gap-2 px-3 py-2 bg-[#efeffb] rounded-md hover:bg-[#e0e0f0] transition-colors">
                <Paperclip className="w-4 h-4 text-[#342985]" />
                <span className="text-sm text-[#342985]">Attach a File</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-[#efeffb] rounded-md hover:bg-[#e0e0f0] transition-colors">
                <Image className="w-4 h-4 text-[#342985]" />
                <span className="text-sm text-[#342985]">Upload an Image</span>
              </button>
            </div>
          </div>
        </div>
        {/* Tags Section */}
        <div className=" mb-8">
          <label className="block text-sm font-normal text-[#1c1530] mb-2">
            Edit your tags.
          </label>
          <div className="flex flex-wrap gap-2 bg-[#ffffff] px-3 py-3 border border-[#D8D6F0] rounded-xl mb-3">
            {tags.map((tag, index) => (
              <div>
                <div
                  key={index}
                  className="px-3 py-1.5 bg-[#efeffb] rounded-full border border-[#d8d6f0] text-[#1c1530] text-xs font-light"
                >
                  {tag}
                </div>
              </div>
            ))}
            <button
              onClick={() => setIsTagsOpen(!isTagsOpen)}
              className="flex items-center gap-1 px-3 py-1.5 border border-[#d8d6f0] rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronDown className="w-4 h-4 text-[#342985]" />
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
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 border border-[#d8d6f0] text-[#707070] hover:bg-gray-50"
            >
              <X className="w-4 h-4" />
              Cancel Editing
            </Button>
            <Button
              onClick={handleSaveAndPublish}
              className="flex items-center gap-2 px-4 py-2 bg-[#342985] text-white hover:bg-[#2a1f6b] transition-colors"
            >
              Save and Publish
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
