import React from "react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MoreVertical,
  Paperclip,
  ImageIcon,
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
} from "lucide-react";

/**
 * CommentsSection Component
 *
 * A comprehensive comments section component that displays comments with
 * reactions, reply functionality, and a rich text editor for new comments.
 */
interface CommentsSectionProps {
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

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments = [
    {
      id: "1",
      author: {
        username: "@Jackson.lee",
        avatar:
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749591414645-node-I2046%3A1413%3B2845%3A2189-1749591413351.png",
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
          "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749591415674-node-I2046%3A1445%3B2845%3A2189-1749591414871.png",
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
  const [replyContent, setReplyContent] = React.useState("");
  const [wordCount, setWordCount] = React.useState(123);

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
    <div className="bg-white font-poppins">
      {/* Comments Header */}
      <div className="flex justify-between items-center pb-1 mb-3">
        <h3 className="text-[#1c1530] text-xl font-normal leading-7">
          Comments
        </h3>
        <button className="text-[#ee6c4d] text-sm font-normal underline leading-none hover:opacity-80">
          Collapse Comments
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-2.5 py-1">
            <div className="flex-1 py-0.5 flex flex-col gap-3">
              {/* Comment Header */}
              <div className="flex justify-between items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#342985] text-xs font-normal leading-none">
                    {comment.author.username}
                  </span>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <span className="text-[#707070] text-xs font-normal leading-none">
                    {comment.timeAgo}
                  </span>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  {comment.badge && (
                    <div className="px-1.5 py-0.5 bg-[#efeffb] rounded border border-[#d8d6f0] flex items-center gap-1">
                      <span className="text-[#1c1530] text-xs font-normal leading-none">
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
              <div className="h-auto flex flex-col gap-1">
                <div className="whitespace-pre-line">
                  {comment.content.includes("@Jackson.lee") ? (
                    <>
                      <span className="text-[#342985] text-base font-normal leading-tight">
                        @Jackson.lee
                      </span>
                      <span className="text-[#707070] text-base font-normal leading-tight">
                        {" Could you share your resource list?"}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#707070] text-base font-normal leading-tight">
                      {comment.content}
                    </span>
                  )}
                </div>
              </div>

              {/* Comment Actions */}
              <div className="py-2 border-b border-[#c0bed8] flex justify-between items-center gap-6">
                <div className="h-5 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1c1530] text-sm font-normal leading-none">
                      {formatNumber(comment.reactions.likes)}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                      <ThumbsUp className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1c1530] text-sm font-normal leading-none">
                      {comment.reactions.dislikes}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.92px] flex justify-center items-center">
                      <ThumbsDown className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                  <div className="w-[3px] h-[3px] bg-[#c0bed8] rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1c1530] text-sm font-normal leading-none">
                      {formatNumber(comment.reactions.comments)}
                    </span>
                    <div className="w-5 h-5 px-[1.67px] py-[2.08px] flex justify-center items-center">
                      <MessageCircle className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="h-5"></div>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[#342985] text-sm font-normal underline leading-none hover:opacity-80 cursor-pointer">
                    Add a Comment
                  </span>
                  <div className="w-4 h-4 p-[1.33px] flex justify-center items-center">
                    <MessageCircle className="w-2 h-2 text-[#342985]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={comment.author.avatar}
                alt={`${comment.author.username} avatar`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="h-[0px] border border-[#c0bed8] my-3"></div>

      {/* Reply Section */}
      <div className="py-2 rounded-[20px] flex justify-end items-start gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-40 p-3 bg-white rounded-lg border border-[#d8d6f0] flex flex-col gap-3">
            {/* Toolbar */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="w-3 h-3 pl-[2.50px] pr-[3px] py-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <Bold className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 px-[2.50px] py-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                  <Italic className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <Underline className="w-2 h-2 text-gray-600" />
                </button>
                <div className="w-px h-3 bg-[#d8d6f0]"></div>
                <button className="w-3 h-3 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <ListOrdered className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 px-0.5 py-[2.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <List className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 px-[1.50px] py-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                  <CheckSquare className="w-2 h-2 text-gray-600" />
                </button>
                <div className="w-px h-3 bg-[#d8d6f0]"></div>
                <button className="w-3 h-3 px-[2.50px] py-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <Quote className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <Link className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 p-0.5 flex justify-center items-center hover:bg-gray-100 rounded">
                  <Code className="w-2 h-2 text-gray-600" />
                </button>
                <button className="w-3 h-3 p-[1.50px] flex justify-center items-center hover:bg-gray-100 rounded">
                  <AtSign className="w-2 h-2 text-gray-600" />
                </button>
              </div>
              <span className="text-[#707070] text-sm font-normal leading-none">
                Word count: {wordCount}
              </span>
            </div>

            {/* Textarea */}
            <textarea
              value={replyContent}
              onChange={(e) => handleReplyChange(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 text-[#707070] text-sm font-normal leading-none bg-transparent border-none outline-none resize-none placeholder:text-[#707070]"
            />

            {/* Bottom Actions */}
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <button
                  onClick={onAttachFile}
                  className="flex justify-center items-center gap-2 hover:opacity-80"
                >
                  <span className="text-[#342985] text-sm font-normal underline leading-none">
                    Attach a File
                  </span>
                  <div className="w-4 h-4 pl-0.5 pr-[2.33px] py-[1.33px] flex justify-center items-center">
                    <Paperclip className="w-3 h-3 text-[#342985]" />
                  </div>
                </button>
                <button
                  onClick={onUploadImage}
                  className="flex justify-center items-center gap-2 hover:opacity-80"
                >
                  <div className="w-4 h-4 p-[1.33px] flex justify-center items-center">
                    <ImageIcon className="w-3 h-3 text-[#342985]" />
                  </div>
                  <span className="text-[#342985] text-sm font-normal underline leading-none">
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
                  <span className="text-white text-sm font-normal leading-none">
                    Post Comment
                  </span>
                </div>
                <div className="w-4 h-4 p-[1.67px] flex justify-center items-center">
                  <Send className="w-2 h-2 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749591416643-node-I2056%3A2533%3B2845%3A2189-1749591415841.png"
            alt="Your avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
