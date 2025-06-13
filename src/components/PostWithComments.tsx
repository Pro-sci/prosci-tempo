import React, { useState } from "react";
import { VerifiedIcon, Award } from "lucide-react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MoreVertical,
  Paperclip,
  ImagePlus,
  Send,
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
  CheckCircle,
} from "lucide-react";

/**
 * PostWithComments Component
 *
 * A comprehensive post component that displays a post with user information,
 * content, tags, engagement metrics, comments section, and a rich text editor
 * for adding new comments. Matches the Figma design specifications.
 */
interface PostWithCommentsProps {
  /** Post data */
  post?: {
    author: {
      name: string;
      username: string;
      avatar: string;
      badge?: {
        text: string;
        icon?: string;
      };
    };
    timeAgo: string;
    title: string;
    content: string;
    attachment?: {
      name: string;
      size: string;
      icon: string;
    };
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
      comments: number;
    };
  };
  /** Comments data */
  comments?: Array<{
    id: string;
    author: {
      username: string;
      avatar: string;
    };
    content: string;
    timeAgo: string;
    badge?: string;
    reactions: {
      likes: number;
      dislikes: number;
      comments: number;
    };
  }>;
  /** Callback functions */
  onPublish?: (content: string) => void;
  onAttachFile?: () => void;
  onUploadImage?: () => void;
}

const PostWithComments: React.FC<PostWithCommentsProps> = ({
  post = {
    author: {
      name: "Sofia Davis",
      username: "@SofDav",
      avatar:
        "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749634320389-node-I2046%3A1338%3B2845%3A2189-1749634319270.png",
      badge: {
        text: "New Member",
        icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635703867-node-2001%3A1256-1749635703161.png",
      },
    },
    timeAgo: "2h ago",
    title: "Scale AI - Coder AI Training",
    content:
      'I received that i am invited to take the next steps in that training, But i cant even complete the first step "ID Verification" as it does not appear in my account in Remotasks. It\'s really frustrating, what should i do??',
    attachment: {
      name: "Screenshot (1334334",
      size: "107.7 KB",
      icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749634328104-node-2046%3A1361-1749634327368.png",
    },
    tags: ["Artificial Intelligence", "Personal Training", "Remotasks"],
    reactions: {
      likes: 12,
      dislikes: 4,
      comments: 2,
    },
  },
  comments = [
    {
      id: "1",
      author: {
        username: "@Jackson.lee",
        avatar:
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749634321446-node-I2046%3A1413%3B2845%3A2189-1749634320588.png",
      },
      content:
        "Great insights! Here's what worked for me:\nUse Pomodoro Technique,\nTake regular breaks",
      timeAgo: "30min ago",
      badge: "Best Comment",
      reactions: {
        likes: 12600,
        dislikes: 24,
        comments: 1000,
      },
    },
    {
      id: "2",
      author: {
        username: "@SofDav",
        avatar:
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749634322533-node-I2046%3A1445%3B2845%3A2189-1749634321742.png",
      },
      content: "@Jackson.lee Could you share your resource list?",
      timeAgo: "15min ago",
      badge: "Author",
      reactions: {
        likes: 0,
        dislikes: 0,
        comments: 0,
      },
    },
  ],
  onPublish,
  onAttachFile,
  onUploadImage,
}) => {
  const [replyContent, setReplyContent] = useState("");
  const [wordCount, setWordCount] = useState(123);

  const handleReplyChange = (value: string) => {
    setReplyContent(value);
    const words = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  const handlePostComment = () => {
    onPublish?.(replyContent);
    setReplyContent("");
    setWordCount(0);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <div className="bg-neutral-100 rounded-lg font-poppins">
      <div className="px-4 pt-4 pb-5 flex flex-col gap-4">
        {/* Post Header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={post.author.avatar}
              alt={`${post.author.name} avatar`}
            />
          </div>
          <div className="flex items-center justify-between h-10 w-full">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-slate-950 text-sm font-normal leading-none">
                  {post.author.name}
                </span>
                <VerifiedIcon className="w-4 text-[#EE6C4D]" />
                {post.author.badge && (
                  <div className="px-1.5 py-0.5 bg-[#efeffb] rounded border border-[#d8d6f0] flex items-center gap-1">
                    <span className="text-[#1c1530] text-xs font-normal font-poppins leading-none">
                      {post.author.badge.text}
                    </span>
                    <Award className="w-4 h-4 text-[#9189A8]" />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#707070] text-xs font-normal leading-none">
                  {post.author.username}
                </span>
                <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                <span className="text-[#707070] text-xs font-normal leading-none">
                  {post.timeAgo}
                </span>
              </div>
            </div>
            <button className="w-6 h-6 py-[3px] flex justify-center items-center hover:bg-gray-100 rounded">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="flex gap-4">
          {/* Vertical Line */}
          <div className="w-8 flex justify-center items-center">
            <div className="w-0.5 h-full bg-[#d8d6f0] rounded-2xl"></div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Title and Description */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1.5">
                <h2 className="text-[#1c1530] text-2xl font-medium font-poppins leading-loose">
                  {post.title}
                </h2>
                <p className="text-[#707070] text-base font-normal font-poppins leading-tight">
                  {post.content}
                </p>
              </div>

              {/* Attachment */}
              {post.attachment && (
                <div className="bg-white rounded-sm border border-[#d8d6f0] flex w-fit">
                  <div className="px-2 py-1 bg-[#bbdef0] flex items-center gap-[2.29px]">
                    <div className="w-[42.83px] h-[55.39px] rounded-[0.90px] shadow-[0px_0.4484669268131256px_0.4484669268131256px_0px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden">
                      <img
                        src={post.attachment.icon}
                        alt="Document icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-3 flex flex-col justify-center gap-1">
                    <span className="text-[#1c1530] text-sm font-normal font-poppins leading-none">
                      {post.attachment.name}
                    </span>
                    <span className="text-[#707070] text-xs font-normal font-poppins leading-none">
                      {post.attachment.size}
                    </span>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="py-2 flex items-center gap-3">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2.5 bg-[#efeffb] rounded-full border border-[#d8d6f0] flex items-center py-1.5"
                  >
                    <span className="text-[#1c1530] text-xs font-normal font-poppins leading-none">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Post Engagement */}
              <div className="py-2 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 gap-x-1">
                    <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                      {post.reactions.likes}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                      <ThumbsUp className="w-4 h-4 text-[#9189A8]" />
                    </div>
                  </div>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <div className="flex items-center gap-2 gap-x-1">
                    <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                      {post.reactions.dislikes}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                      <ThumbsDown className="w-4 h-4 text-[#9189A8]" />
                    </div>
                  </div>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <div className="flex items-center gap-2 gap-x-1">
                    <span className="text-[#342985] text-sm font-normal font-poppins leading-none">
                      {post.reactions.comments}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.08px] flex justify-center items-center">
                      <MessageCircle className="w-4 h-4 text-[#342985]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="py-2 flex flex-col gap-3">
              {/* Comments Header */}
              <div className="pb-1 flex justify-between items-center">
                <h3 className="text-[#1c1530] text-xl font-medium font-poppins leading-7">
                  Comments
                </h3>
                <button className="text-[#ee6c4d] text-sm font-normal font-poppins underline leading-none hover:opacity-80">
                  Collapse Comments
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-2.5 py-0">
                    <div className="flex items-start justify-start">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={comment.author.avatar}
                        alt={`${comment.author.username} avatar`}
                      />
                    </div>
                    <div className="flex-1 py-0.5 flex flex-col gap-3">
                      {/* Comment Header */}
                      <div className="flex justify-between items-center gap-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#342985] text-xs font-normal font-poppins leading-none">
                            {comment.author.username}
                          </span>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          <span className="text-[#707070] text-xs font-normal font-poppins leading-none">
                            {comment.timeAgo}
                          </span>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          {comment.badge && (
                            <div className="px-1.5 py-0.5 bg-[#efeffb] rounded border border-[#d8d6f0] flex items-center gap-1">
                              <span className="text-[#1c1530] text-xs font-normal font-poppins leading-none">
                                {comment.badge}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="h-6"></div>
                          <button className="w-6 h-6 py-[3px] flex justify-center items-center hover:bg-gray-100 rounded">
                            <MoreVertical className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>

                      {/* Comment Content */}
                      <div className="flex flex-col gap-1">
                        <div className="whitespace-pre-line">
                          {comment.content.includes("@Jackson.lee") ? (
                            <>
                              <span className="text-[#342985] text-base font-normal font-poppins leading-tight">
                                @Jackson.lee
                              </span>
                              <span className="text-[#707070] text-base font-normal font-poppins leading-tight">
                                {" Could you share your resource list?"}
                              </span>
                            </>
                          ) : (
                            <span className="text-[#707070] text-base font-normal font-poppins leading-tight">
                              {comment.content}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Comment Actions */}
                      <div className="py-2 flex justify-between items-center gap-6">
                        <div className="h-5 flex items-center gap-3">
                          <div className="flex items-center gap-2 gap-x-1">
                            <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                              {formatNumber(comment.reactions.likes)}
                            </span>
                            <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                              <ThumbsUp className="w-4 h-4 text-[#9189A8]" />
                            </div>
                          </div>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          <div className="flex items-center gap-2 gap-x-1">
                            <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                              {comment.reactions.dislikes}
                            </span>
                            <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                              <ThumbsDown className="w-4 h-4 text-[#9189A8]" />
                            </div>
                          </div>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          <div className="flex items-center gap-2 gap-x-1">
                            <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                              {formatNumber(comment.reactions.comments)}
                            </span>
                            <div className="w-5 h-5 px-[1.67px] py-[2.08px] flex justify-center items-center">
                              <MessageCircle className="w-4 h-4 text-[#9189A8]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          <span className="text-[#342985] text-sm font-normal font-poppins underline leading-none hover:opacity-80 cursor-pointer">
                            Add a Comment
                          </span>
                          <div className="w-5 h-5 p-[1.33px] flex justify-center items-center">
                            <MessageCircle className="w-4 h-4 text-[#342985]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="h-[0px] border border-[#d8d6f0]"></div>

              {/* Reply Section */}
              <div className="py-2 rounded-[20px] flex justify-end items-start gap-4">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749634323536-node-I2056%3A2533%3B2845%3A2189-1749634322801.png"
                    alt="Your avatar"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-40 p-3 bg-white rounded-lg border border-[#d8d6f0] flex flex-col gap-3">
                    {/* Rich Text Editor Toolbar */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button className="w-5 h-5 pl-[2.50px] pr-[3px] py-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <Bold className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 px-[2.50px] py-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                          <Italic className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <Underline className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <div className="w-px h-3 bg-[#d8d6f0]"></div>
                        <button className="w-5 h-5 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <ListOrdered className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 px-0.5 py-[2.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <List className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 px-[1.50px] py-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                          <CheckSquare className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <div className="w-px h-3 bg-[#d8d6f0]"></div>
                        <button className="w-5 h-5 px-[2.50px] py-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <Quote className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <Link className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 p-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                          <Code className="w-4 h-4 text-[#9189A8]" />
                        </button>
                        <button className="w-5 h-5 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                          <AtSign className="w-4 h-4 text-[#9189A8]" />
                        </button>
                      </div>
                      <span className="text-[#707070] text-sm font-normal font-poppins leading-none">
                        Word count: {wordCount}
                      </span>
                    </div>

                    {/* Textarea */}
                    <textarea
                      value={replyContent}
                      onChange={(e) => handleReplyChange(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 text-[#707070] text-sm font-normal font-poppins leading-none bg-transparent border-none outline-none resize-none placeholder:text-[#707070]"
                    />

                    {/* Bottom Actions */}
                    <div className="flex justify-between items-center gap-6">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={onAttachFile}
                          className="flex justify-center items-center gap-2 hover:opacity-80 gap-x-1"
                        >
                          <div className="pl-0.5 pr-[2.33px] py-[1.33px] flex justify-center items-center w-5 h-5">
                            <Paperclip className="w-4 h-4 text-[#342985]" />
                          </div>
                          <span className="text-[#342985] text-sm font-normal font-poppins underline leading-none">
                            Attach a File
                          </span>
                        </button>
                        <button
                          onClick={onUploadImage}
                          className="flex justify-center items-center gap-2 hover:opacity-80 gap-x-1"
                        >
                          <div className="p-[1.33px] flex justify-center items-center w-5 h-5">
                            <ImagePlus className="w-4 h-4 text-[#342985]" />
                          </div>
                          <span className="text-[#342985] text-sm font-normal font-poppins underline leading-none">
                            Upload an Image
                          </span>
                        </button>
                      </div>
                      <div className="h-8"></div>
                      <button
                        onClick={handlePostComment}
                        className="px-3 py-2 bg-[#342985] rounded-md flex justify-center items-center gap-1 hover:opacity-90 transition-opacity"
                      >
                        <div className="px-1 flex justify-start items-start">
                          <span className="text-white text-sm font-normal font-poppins leading-none">
                            Post Comment
                          </span>
                        </div>
                        <div className="p-[1.67px] flex justify-center items-center w-5 h-5">
                          <Send className="text-white w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWithComments;
