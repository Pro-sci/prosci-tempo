import React from "react";
import { Badge } from "@/components/ui/badge";

interface PostContainerProps {
  authorName?: string;
  authorUsername?: string;
  authorAvatar?: string;
  timeAgo?: string;
  title?: string;
  tags?: string[];
  likesCount?: string;
  dislikesCount?: string;
  commentsCount?: string;
  bestCommentAuthor?: string;
  bestCommentTime?: string;
  bestCommentAvatar?: string;
  bestCommentText?: string;
  bestCommentLikes?: string;
  bestCommentDislikes?: string;
  bestCommentComments?: string;
}

export default function PostContainer({
  authorName = "Olivia Martin",
  authorUsername = "@OliviaM",
  authorAvatar = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749586524271-node-I2034%3A1402%3B2845%3A2189-1749586523296.png",
  timeAgo = "3h ago",
  title = "How to optimize remote work?",
  tags = ["Career", "Remote Work"],
  likesCount = "12.6k",
  dislikesCount = "24",
  commentsCount = "1k",
  bestCommentAuthor = "@Jackson.lee",
  bestCommentTime = "30min ago",
  bestCommentAvatar = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C113753687-1749586525213-node-I2034%3A1474%3B2845%3A2189-1749586524421.png",
  bestCommentText = "Remote work is great but tricky. Here's how to stay focused...",
  bestCommentLikes = "12",
  bestCommentDislikes = "4",
  bestCommentComments = "2",
}: PostContainerProps) {
  return <></>;
}
