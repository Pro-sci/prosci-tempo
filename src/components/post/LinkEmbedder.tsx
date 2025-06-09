import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Link as LinkIcon, X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LinkPreview {
  url: string;
  title?: string;
  description?: string;
  image?: string;
}

interface LinkEmbedderProps {
  onLinkEmbed?: (linkPreview: LinkPreview) => void;
  onRemove?: (url: string) => void;
}

const LinkEmbedder: React.FC<LinkEmbedderProps> = ({
  onLinkEmbed = () => {},
  onRemove = () => {},
}) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<LinkPreview | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a URL");
      return;
    }

    // URL validation
    try {
      new URL(url);
    } catch (e) {
      setError("Please enter a valid URL");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // In a real implementation, this would make an API call to fetch link metadata
      // For this UI scaffolding, we'll simulate a successful response
      setTimeout(() => {
        const mockPreview: LinkPreview = {
          url,
          title: "Example Link Title",
          description:
            "This is a preview of the linked content. In a real implementation, this would be fetched from the URL metadata.",
          image: `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80`,
        };

        setPreview(mockPreview);
        onLinkEmbed(mockPreview);
        setIsLoading(false);
        setUrl("");
      }, 1000);
    } catch (error) {
      setError("Failed to generate link preview");
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    if (preview) {
      onRemove(preview.url);
      setPreview(null);
    }
  };

  return (
    <div className="w-full bg-background p-4 rounded-md border border-border">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <LinkIcon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-sm font-medium">Embed Link</h3>
        </div>

        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Paste a URL to embed"
            value={url}
            onChange={handleUrlChange}
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Embed"}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {preview && (
          <Card className="mt-4 overflow-hidden">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 z-10 rounded-full h-8 w-8"
                onClick={handleRemove}
              >
                <X className="h-4 w-4" />
              </Button>

              {preview.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={preview.image}
                    alt={preview.title || "Link preview"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardContent className="p-4">
                <h4 className="font-semibold truncate">
                  {preview.title || "Untitled Link"}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {preview.description || "No description available"}
                </p>
                <p className="text-xs text-muted-foreground mt-2 truncate">
                  {preview.url}
                </p>
              </CardContent>
            </div>
          </Card>
        )}
      </form>
    </div>
  );
};

export default LinkEmbedder;
