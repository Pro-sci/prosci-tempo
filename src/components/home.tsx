import React, { useState } from "react";
import PostEditor from "./post/PostEditor";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PenLine, BookOpen, Clock } from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Community Posts
          </h1>
          <p className="text-muted-foreground">
            Share your insights and engage with the community
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="create" className="flex items-center gap-2">
                <PenLine className="h-4 w-4" />
                Create Post
              </TabsTrigger>
              <TabsTrigger value="drafts" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                My Drafts
              </TabsTrigger>
              <TabsTrigger
                value="published"
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                My Published
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="create" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
              </CardHeader>
              <CardContent>
                <PostEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drafts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Draft Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((draft) => (
                    <Card
                      key={draft}
                      className="cursor-pointer hover:bg-accent/50 transition-colors"
                    >
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1">
                          Draft Post Title #{draft}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Last edited: {new Date().toLocaleDateString()}
                        </p>
                        <p className="line-clamp-2 text-sm">
                          This is a preview of your draft post content. Click to
                          continue editing...
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Published Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((post) => (
                    <Card
                      key={post}
                      className="cursor-pointer hover:bg-accent/50 transition-colors"
                    >
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1">
                          Published Post Title #{post}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Published: {new Date().toLocaleDateString()} • 42
                          views • 5 comments
                        </p>
                        <p className="line-clamp-2 text-sm">
                          This is a preview of your published post content.
                          Click to view the full post...
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                          >
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
