
import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ToDo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <div className="min-h-screen beige-gradient">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-[hsl(var(--accent-orange))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--brown-text))]">
                Magical To-Do List
              </h1>
            </div>
            <p className="text-[hsl(var(--brown-light))] text-lg">
              Turn chaos into calm with one{" "}
              <span className="text-[hsl(var(--accent-orange))]">✨ task ✨</span>{" "}
              at a time.
            </p>
          </div>

          {/* Add Task Input */}
          <div className="flex space-x-3 mb-8">
            <Input
              placeholder="Add a delightful task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              className="flex-1 bg-white/80 border-white/30 text-[hsl(var(--brown-text))] placeholder:text-[hsl(var(--brown-light))]"
            />
            <Button
              onClick={addTask}
              className="bg-[hsl(var(--accent-orange))] hover:bg-[hsl(var(--accent-orange))]/90 text-white px-6"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Empty State */}
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[hsl(var(--brown-light))] italic text-lg">
                Your enchanted task garden is empty 🌱
              </p>
            </div>
          )}

          {/* Tasks List */}
          {tasks.length > 0 && (
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-white/60 rounded-lg p-4 border border-white/30 text-[hsl(var(--brown-text))]"
                >
                  {task}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
