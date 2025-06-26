
import { StickyNote, Sparkles, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen beige-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="glass-effect rounded-3xl p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <StickyNote className="h-12 w-12 text-[hsl(var(--accent-orange))] mr-3" />
              <h1 className="text-5xl font-bold text-[hsl(var(--brown-text))]">
                Welcome to{" "}
                <span className="text-[hsl(var(--accent-orange))]">Beige Notes</span>!
              </h1>
            </div>
            
            <div className="space-y-6 text-lg text-[hsl(var(--brown-light))]">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-[hsl(var(--accent-orange))]" />
                <p>Start organizing your thoughts with style and clarity.</p>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <FileText className="h-5 w-5 text-[hsl(var(--accent-orange))]" />
                <p>Click <strong>"Notes"</strong> in the sidebar to begin!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bear illustration placeholder */}
        <div className="flex justify-center">
          <div className="glass-effect rounded-2xl p-8 w-64 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🐻</div>
              <p className="text-[hsl(var(--brown-light))] text-sm">Your friendly note companion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
