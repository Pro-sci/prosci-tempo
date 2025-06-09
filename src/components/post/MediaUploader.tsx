import React, { useState, useRef, useCallback } from "react";
import { Upload, X, Image, FileVideo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MediaFile {
  id: string;
  file: File;
  preview: string;
  type: "image" | "video";
}

interface MediaUploaderProps {
  onMediaUpload?: (files: MediaFile[]) => void;
  onMediaRemove?: (id: string) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
  className?: string;
}

const MediaUploader = ({
  onMediaUpload = () => {},
  onMediaRemove = () => {},
  maxFiles = 5,
  acceptedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/quicktime",
  ],
  className = "",
}: MediaUploaderProps) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (files: FileList | null) => {
      if (!files || mediaFiles.length >= maxFiles) return;

      const newFiles: MediaFile[] = [];

      Array.from(files).forEach((file) => {
        if (mediaFiles.length + newFiles.length >= maxFiles) return;
        if (!acceptedFileTypes.includes(file.type)) return;

        const fileType = file.type.startsWith("image/") ? "image" : "video";
        const preview = URL.createObjectURL(file);

        newFiles.push({
          id: `${file.name}-${Date.now()}`,
          file,
          preview,
          type: fileType,
        });
      });

      if (newFiles.length > 0) {
        const updatedFiles = [...mediaFiles, ...newFiles];
        setMediaFiles(updatedFiles);
        onMediaUpload(updatedFiles);
      }
    },
    [mediaFiles, maxFiles, acceptedFileTypes, onMediaUpload],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileChange(e.dataTransfer.files);
    },
    [handleFileChange],
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      const fileToRemove = mediaFiles.find((file) => file.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }

      const updatedFiles = mediaFiles.filter((file) => file.id !== id);
      setMediaFiles(updatedFiles);
      onMediaRemove(id);
    },
    [mediaFiles, onMediaRemove],
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  return (
    <div
      className={cn("w-full space-y-4", className)}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className={cn(
          "relative flex min-h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25",
          mediaFiles.length >= maxFiles ? "opacity-50" : "",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFileTypes.join(",")}
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files)}
          disabled={mediaFiles.length >= maxFiles}
        />

        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <Upload className="h-10 w-10 text-muted-foreground" />
          <h3 className="text-lg font-medium">Drag & drop media files</h3>
          <p className="text-sm text-muted-foreground">
            {mediaFiles.length < maxFiles
              ? `Upload up to ${maxFiles} files (${acceptedFileTypes.map((type) => type.split("/")[1]).join(", ")})`
              : "Maximum number of files reached"}
          </p>
          <Button
            variant="outline"
            onClick={handleButtonClick}
            disabled={mediaFiles.length >= maxFiles}
            className="mt-2"
          >
            Select Files
          </Button>
        </div>
      </div>

      {mediaFiles.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {mediaFiles.map((file) => (
            <Card key={file.id} className="relative overflow-hidden">
              <div className="group aspect-square w-full overflow-hidden">
                {file.type === "image" ? (
                  <img
                    src={file.preview}
                    alt={file.file.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <FileVideo className="h-10 w-10 text-muted-foreground" />
                    <video
                      src={file.preview}
                      className="absolute inset-0 h-full w-full object-cover"
                      controls
                    />
                  </div>
                )}
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute right-1 top-1 h-6 w-6 rounded-full opacity-80 transition-opacity hover:opacity-100"
                  onClick={() => handleRemoveFile(file.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="p-2">
                <p className="truncate text-xs text-muted-foreground">
                  {file.file.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaUploader;
