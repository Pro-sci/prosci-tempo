import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  X,
  Bold,
  Italic,
  Heading,
  Quote,
  Code,
  Eye,
  Save,
  Send,
} from "lucide-react";
import MediaUploader from "./MediaUploader";
import LinkEmbedder from "./LinkEmbedder";
import PostPreview from "./PostPreview";

interface PostEditorProps {
  onSaveDraft?: (post: PostData) => void;
  onPublish?: (post: PostData) => void;
  initialData?: PostData;
}

export interface PostData {
  title: string;
  content: string;
  tags: string[];
  media: MediaItem[];
  links: LinkItem[];
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  caption?: string;
}

export interface LinkItem {
  id: string;
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

const PostEditor: React.FC<PostEditorProps> = ({
  onSaveDraft = () => {},
  onPublish = () => {},
  initialData = {
    title: "",
    content: "",
    tags: [],
    media: [],
    links: [],
  },
}) => {
  const [activeTab, setActiveTab] = useState<string>("edit");
  const [postData, setPostData] = useState<PostData>(initialData);
  const [currentTag, setCurrentTag] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData, content: e.target.value });
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !postData.tags.includes(currentTag.trim())) {
      setPostData({ ...postData, tags: [...postData.tags, currentTag.trim()] });
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleAddMedia = (media: MediaItem) => {
    setPostData({
      ...postData,
      media: [...postData.media, media],
    });
  };

  const handleRemoveMedia = (mediaId: string) => {
    setPostData({
      ...postData,
      media: postData.media.filter((item) => item.id !== mediaId),
    });
  };

  const handleAddLink = (link: LinkItem) => {
    setPostData({
      ...postData,
      links: [...postData.links, link],
    });
  };

  const handleRemoveLink = (linkId: string) => {
    setPostData({
      ...postData,
      links: postData.links.filter((item) => item.id !== linkId),
    });
  };

  const insertFormatting = (format: string) => {
    // This is a placeholder for text formatting functionality
    // In a real implementation, this would insert markdown or rich text formatting
    const formatMap: Record<string, { prefix: string; suffix: string }> = {
      bold: { prefix: "**", suffix: "**" },
      italic: { prefix: "_", suffix: "_" },
      heading: { prefix: "# ", suffix: "" },
      quote: { prefix: "> ", suffix: "" },
      code: { prefix: "```\n", suffix: "\n```" },
    };

    if (formatMap[format]) {
      const { prefix, suffix } = formatMap[format];
      const updatedContent = postData.content + `${prefix}text${suffix}`;
      setPostData({ ...postData, content: updatedContent });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-background border-border">
      <CardContent className="p-6">
        <Tabs
          defaultValue="edit"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSaveDraft(postData)}
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button size="sm" onClick={() => onPublish(postData)}>
                <Send className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>

          <TabsContent value="edit" className="space-y-4">
            <div>
              <Input
                placeholder="Post Title"
                value={postData.title}
                onChange={handleTitleChange}
                className="text-xl font-semibold mb-2"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {postData.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <div className="flex">
                <Input
                  placeholder="Add tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  className="w-32 h-7 text-xs"
                  onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAddTag}
                  className="h-7 px-2"
                >
                  Add
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 p-1 border border-border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertFormatting("bold")}
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertFormatting("italic")}
              >
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertFormatting("heading")}
              >
                <Heading className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertFormatting("quote")}
              >
                <Quote className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertFormatting("code")}
              >
                <Code className="h-4 w-4" />
              </Button>
            </div>

            <Textarea
              placeholder="Write your post content here..."
              value={postData.content}
              onChange={handleContentChange}
              className="min-h-[200px]"
            />

            <Separator className="my-4" />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Media</h3>
              <MediaUploader
                onMediaUploaded={handleAddMedia}
                onMediaRemoved={handleRemoveMedia}
                existingMedia={postData.media}
              />
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Links</h3>
              <LinkEmbedder
                onLinkAdded={handleAddLink}
                onLinkRemoved={handleRemoveLink}
                existingLinks={postData.links}
              />
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <PostPreview postData={postData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PostEditor;
