import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Laptop, Smartphone, Tablet } from "lucide-react";

interface PostPreviewProps {
  title?: string;
  content?: string;
  author?: {
    name: string;
    avatar: string;
  };
  tags?: string[];
  createdAt?: Date;
  media?: Array<{
    type: "image" | "video";
    url: string;
    alt?: string;
  }>;
  links?: Array<{
    url: string;
    title: string;
    description?: string;
    thumbnail?: string;
  }>;
}

const PostPreview = ({
  title = "My Awesome Post Title",
  content = "This is a preview of your post content. It shows how your post will appear when published. Add more content to see how it renders in the preview.",
  author = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  tags = ["Community", "Discussion", "Tips"],
  createdAt = new Date(),
  media = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      alt: "Sample image",
    },
  ],
  links = [
    {
      url: "https://example.com",
      title: "Example Website",
      description: "This is an example of an embedded link with preview.",
      thumbnail:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=400&q=80",
    },
  ],
}: PostPreviewProps) => {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );

  const getDeviceWidth = () => {
    switch (deviceView) {
      case "desktop":
        return "w-full";
      case "tablet":
        return "w-[768px]";
      case "mobile":
        return "w-[375px]";
      default:
        return "w-full";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col space-y-4 bg-background p-4 rounded-lg border">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Post Preview</h2>
        <div className="flex items-center space-x-2">
          <Tabs
            defaultValue="desktop"
            onValueChange={(value) => setDeviceView(value as any)}
          >
            <TabsList>
              <TabsTrigger value="desktop">
                <Laptop className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Desktop</span>
              </TabsTrigger>
              <TabsTrigger value="tablet">
                <Tablet className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Tablet</span>
              </TabsTrigger>
              <TabsTrigger value="mobile">
                <Smartphone className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className={`${getDeviceWidth()} transition-all duration-300 mx-auto`}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{author.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Post Title */}
              <h1 className="text-2xl font-bold mb-4">{title}</h1>

              {/* Post Content */}
              <div className="prose max-w-none mb-6">
                <p>{content}</p>
              </div>

              {/* Media Content */}
              {media && media.length > 0 && (
                <div className="space-y-4 mb-6">
                  {media.map((item, index) => (
                    <div key={index} className="rounded-md overflow-hidden">
                      {item.type === "image" ? (
                        <img
                          src={item.url}
                          alt={item.alt || "Post image"}
                          className="w-full h-auto object-cover max-h-[400px]"
                        />
                      ) : (
                        <video
                          src={item.url}
                          controls
                          className="w-full h-auto max-h-[400px]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Embedded Links */}
              {links && links.length > 0 && (
                <div className="space-y-4 mb-6">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border rounded-md overflow-hidden hover:bg-accent transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {link.thumbnail && (
                          <div className="sm:w-1/4">
                            <img
                              src={link.thumbnail}
                              alt={link.title}
                              className="w-full h-full object-cover aspect-video sm:aspect-square"
                            />
                          </div>
                        )}
                        <div className="p-4 sm:w-3/4">
                          <h3 className="font-medium mb-1">{link.title}</h3>
                          {link.description && (
                            <p className="text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2 truncate">
                            {link.url}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline">Back to Editor</Button>
        <Button>Publish Post</Button>
      </div>
    </div>
  );
};

export default PostPreview;
