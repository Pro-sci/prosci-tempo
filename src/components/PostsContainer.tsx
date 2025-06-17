import React, { useState } from "react";
import { Award } from "lucide-react";
import { VerifiedIcon } from "lucide-react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MoreVertical,
  Edit,
  Bookmark,
  Share,
  EyeOff,
  Trash2,
} from "lucide-react";
import PostWithComments from "./PostWithComments";
import EditPost from "./post/EditPost";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";

/**
 * PostsContainer Component
 *
 * A container component that displays multiple posts in a feed-like layout.
 * Each post includes user information, content, tags, engagement metrics,
 * and comments functionality.
 */
interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    badge?: {
      text: string;
      icon?: string;
    };
    verified?: boolean;
  };
  timeAgo: string;
  title: string;
  content?: string;
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
  hasComments?: boolean;
  bestComment?: {
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
  };
}

interface PostsContainerProps {
  posts?: Post[];
}

const PostsContainer: React.FC<PostsContainerProps> = ({
  posts = [
    {
      id: "1",
      author: {
        name: "Sofia Davis",
        username: "@SofDav",
        avatar:
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635696535-node-I2001%3A1249%3B2845%3A2189-1749635695260.png",
        badge: {
          text: "New Member",
          icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635703867-node-2001%3A1256-1749635703161.png",
        },
        verified: true,
      },
      timeAgo: "2h ago",
      title: "Scale AI - Coder AI Training",
      content:
        'I received that i am invited to take the next steps in that training, But i cant even complete the first step "ID Verification" as it does not appear in my account in Remotasks. It\'s really frustrating, what should i do??',
      attachment: {
        name: "Screenshot (1334334",
        size: "107.7 KB",
        icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635706757-node-2001%3A1272-1749635706016.png",
      },
      tags: ["Artificial Intelligence", "Personal Training", "Remotasks"],
      reactions: {
        likes: 12,
        dislikes: 4,
        comments: 2,
      },
    },
    {
      id: "2",
      author: {
        name: "Olivia Martin",
        username: "@OliviaM",
        avatar:
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635700657-node-I2001%3A1424%3B2845%3A2189-1749635699848.png",
        badge: {
          text: "Top Contributor",
          icon: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635755776-node-2001%3A1431-1749635755057.png",
        },
        verified: true,
      },
      timeAgo: "3h ago",
      title: "How to optimize remote work?",
      tags: ["Career", "Remote Work"],
      reactions: {
        likes: 12600,
        dislikes: 24,
        comments: 1000,
      },
      hasComments: true,
      bestComment: {
        author: {
          username: "@Jackson.lee",
          avatar:
            "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749635701673-node-I2001%3A1496%3B2845%3A2189-1749635700908.png",
        },
        content:
          "Remote work is great but tricky. Here's how to stay focused... Read more.",
        timeAgo: "30min ago",
        badge: "Best Comment",
        reactions: {
          likes: 12,
          dislikes: 4,
          comments: 2,
        },
      },
    },
  ],
}) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  const handleAddCommentClick = (postId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedPostId(postId);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToFeed = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedPostId(null);
      setIsTransitioning(false);
    }, 300);
  };

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPostId(null);
  };

  const handleSaveAndPublish = (postData: any) => {
    console.log("Post updated:", postData);
    handleCloseEditModal();
  };

  if (selectedPostId) {
    const selectedPost = posts.find((post) => post.id === selectedPostId);
    if (selectedPost) {
      return (
        <div
          className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <PostWithComments
            post={{
              author: selectedPost.author,
              timeAgo: selectedPost.timeAgo,
              title: selectedPost.title,
              content: selectedPost.content || "",
              attachment: selectedPost.attachment,
              tags: selectedPost.tags,
              reactions: selectedPost.reactions,
            }}
            onPublish={(content) => console.log("Published:", content)}
            onAttachFile={() => console.log("Attach file")}
            onUploadImage={() => console.log("Upload image")}
          />
        </div>
      );
    }
  }

  return (
    <div
      className={`bg-white flex flex-col gap-2 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          className="px-4 bg-neutral-100 rounded-lg flex flex-col gap-4 pt-3 pb-3 py-16 py-1"
        >
          {/* Post Header */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={post.author.avatar}
                alt={`${post.author.name} avatar`}
              />
            </div>
            <div className="h-10 flex justify-between items-center flex-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-950 text-sm font-normal font-poppins leading-none">
                    {post.author.name}
                  </span>
                  <VerifiedIcon className="w-4 h-4 text-[#EE6C4D]" />
                  {post.author.verified && <></>}
                  {post.author.badge && (
                    <div className="px-1.5 py-0.5 bg-[#efeffb] rounded border border-[#d8d6f0] flex items-center gap-1">
                      <span className="text-[#1c1530] text-xs font-normal font-poppins leading-none">
                        {post.author.badge.text}
                      </span>
                      {post.author.badge.icon && <></>}
                      <Award className="w-4 h-4 text-[#9189A8]" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#707070] text-xs font-normal font-poppins leading-none">
                    {post.author.username}
                  </span>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <span className="text-[#707070] text-xs font-normal font-poppins leading-none">
                    {post.timeAgo}
                  </span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-6 h-6 py-[3px] flex justify-center items-center hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleEditPost(post.id)}
                  >
                    <span>Edit</span>
                    <Edit className="w-4 h-4" style={{ color: "#9189A8" }} />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                    <span>Save to Draft</span>
                    <Bookmark
                      className="w-4 h-4"
                      style={{ color: "#9189A8" }}
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                    <span>Share</span>
                    <Share className="w-4 h-4" style={{ color: "#9189A8" }} />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                    <span>Hide</span>
                    <EyeOff className="w-4 h-4" style={{ color: "#9189A8" }} />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center justify-between cursor-pointer text-red-600 focus:text-red-600">
                    <span>Delete Post</span>
                    <Trash2 className="w-4 h-4" style={{ color: "#9189A8" }} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              <div className="flex flex-col gap-1 gap-y-1.5">
                <div className="flex flex-col gap-1.5 h-fit">
                  <h2 className="text-[#1c1530] text-2xl font-medium font-poppins gap-3 gap-y-1 leading-8">
                    {post.title}
                  </h2>
                  {post.content && (
                    <p className="text-[#707070] text-base font-normal font-poppins leading-tight">
                      {post.content}
                    </p>
                  )}
                </div>

                {/* Attachment */}
                {post.attachment && (
                  <div className="bg-white rounded-sm border border-[#d8d6f0] flex w-fit">
                    <div className="px-2 py-1 bg-[#bbdef0] flex items-center gap-[2.29px] w-fit">
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
                <div className="flex items-center gap-3 py-1.5">
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
                <div className="py-2 flex justify-between items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 gap-x-1">
                      <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none">
                        {formatNumber(post.reactions.likes)}
                      </span>
                      <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                        <ThumbsUp className="w-4 h-4 text-[#9189A8]" />
                      </div>
                    </div>

                    <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                    <div
                      className="flex items-center gap-2 cursor-pointer transition-all duration-200 hover:bg-[#342985]/10 rounded px-2 py-1 group"
                      onClick={() => handleAddCommentClick(post.id)}
                    >
                      <span className="text-[#9189A8] text-sm font-normal font-poppins leading-none group-hover:text-[#342985] group-active:text-[#342985] transition-colors duration-200">
                        {formatNumber(post.reactions.comments)}
                      </span>
                      <div className="w-5 h-5 px-[1.67px] py-[2.08px] flex justify-center items-center">
                        <MessageCircle className="w-4 h-4 text-[#9189A8] group-hover:text-[#342985] group-active:text-[#342985] transition-colors duration-200" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-center gap-1 transition-all duration-200 hover:bg-[#342985]/10 rounded px-2 py-1 cursor-pointer group"
                    onClick={() => handleAddCommentClick(post.id)}
                  >
                    <span className="text-[#342985] text-sm font-normal font-poppins underline leading-none group-hover:text-[#342985] group-active:text-[#342985] transition-colors duration-200">
                      Add a Comment
                    </span>
                    <div className="w-4 h-4 p-[1.33px] flex justify-center items-center">
                      <MessageCircle className="w-4 h-4 text-[#342985] group-hover:text-[#342985] group-active:text-[#342985] transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Comment Section */}
              {post.bestComment && (
                <>
                  <div className="h-[0px] border border-[#c0bed8]"></div>
                  <div className="py-1.5 flex flex-col gap-2">
                    {/* Comment Header */}
                    <div className="flex justify-between items-center gap-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={post.bestComment.author.avatar}
                            alt={`${post.bestComment.author.username} avatar`}
                          />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#342985] text-xs font-normal font-poppins leading-none">
                            {post.bestComment.author.username}
                          </span>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          <span className="text-[#707070] text-xs font-normal font-poppins leading-none">
                            {post.bestComment.timeAgo}
                          </span>
                          <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                          {post.bestComment.badge && (
                            <div className="px-1.5 py-0.5 bg-[#efeffb] rounded border border-[#d8d6f0] flex items-center gap-1">
                              <span className="text-[#1c1530] text-xs font-normal font-poppins leading-none">
                                {post.bestComment.badge}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="w-6 h-6 py-[3px] flex justify-center items-center hover:bg-gray-100 rounded">
                            <MoreVertical className="w-4 h-4 text-gray-400" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => handleEditPost(post.id)}
                          >
                            <span>Edit</span>
                            <Edit
                              className="w-4 h-4"
                              style={{ color: "#9189A8" }}
                            />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                            <span>Save to Draft</span>
                            <Bookmark
                              className="w-4 h-4"
                              style={{ color: "#9189A8" }}
                            />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                            <span>Share</span>
                            <Share
                              className="w-4 h-4"
                              style={{ color: "#9189A8" }}
                            />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
                            <span>Hide</span>
                            <EyeOff
                              className="w-4 h-4"
                              style={{ color: "#9189A8" }}
                            />
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center justify-between cursor-pointer text-red-600 focus:text-red-600">
                            <span>Delete Post</span>
                            <Trash2
                              className="w-4 h-4"
                              style={{ color: "#9189A8" }}
                            />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    {/* Comment Content */}
                    <div className="flex flex-col gap-1">
                      <div className="whitespace-pre-line">
                        <span className="text-[#707070] text-base font-normal font-poppins leading-tight">
                          {post.bestComment.content.includes("Read more") ? (
                            <>
                              {post.bestComment.content.split("Read more")[0]}
                              <span className="text-[#342985] text-base font-bold font-poppins underline leading-tight text-sm">
                                Read more
                              </span>
                              .
                            </>
                          ) : (
                            post.bestComment.content
                          )}
                        </span>
                      </div>
                    </div>
                    {/* Comment Actions */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Edit Post Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-5xl p-0 border-none bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            {editingPostId && (
              <EditPost
                avatarUrl={
                  posts.find((p) => p.id === editingPostId)?.author.avatar
                }
                initialTitle={posts.find((p) => p.id === editingPostId)?.title}
                initialContent={
                  posts.find((p) => p.id === editingPostId)?.content
                }
                initialTags={posts.find((p) => p.id === editingPostId)?.tags}
                onSaveAndPublish={handleSaveAndPublish}
                onCancel={handleCloseEditModal}
                onClose={handleCloseEditModal}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostsContainer;
