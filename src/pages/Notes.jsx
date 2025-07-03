
import { useState } from "react";
import { Search, Plus, Tag, Moon, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newTag, setNewTag] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  const tags = ["#work", "#personal", "#ideas"];

  return (
    <div className="min-h-screen warm-gradient">
      <div className="flex h-screen">
        <div className="w-80 bg-white/70 backdrop-blur-sm border-r border-white/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))] flex items-center">
              <StickyNote className="h-5 w-5 mr-2 text-[hsl(var(--accent-coral))]" />
              Notes
            </h2>
            <Moon className="h-5 w-5 text-[hsl(var(--sage-light))]" />
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--sage-light))]" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
          </div>

          <Button className="w-full mb-6 bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>

          <div className="flex mb-4">
            <Input
              placeholder="Add tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 bg-white/80 border-white/30 text-[hsl(var(--sage-text))] placeholder:text-[hsl(var(--sage-light))]"
            />
            <Button 
              size="sm" 
              className="ml-2 bg-[hsl(var(--accent-teal))] hover:bg-[hsl(var(--accent-teal))]/90"
            >
              <Tag className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[hsl(var(--warm-medium))] text-[hsl(var(--sage-text))] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[hsl(var(--sage-light))] text-sm">
            No notes found
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center glass-effect rounded-2xl p-12 max-w-md">
            <h3 className="text-2xl font-semibold text-[hsl(var(--sage-text))] mb-4">
              Select a note or create a new one
            </h3>
            <p className="text-[hsl(var(--sage-light))]">
              Start by clicking "New Note" or select an existing note from the sidebar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
