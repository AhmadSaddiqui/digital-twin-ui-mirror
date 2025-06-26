
import { Link, useLocation } from "react-router-dom";
import { Home, StickyNote, LogIn, UserPlus, CheckSquare } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/notes", label: "Notes", icon: StickyNote },
    { path: "/login", label: "Login", icon: LogIn },
    { path: "/signup", label: "Sign Up", icon: UserPlus },
    { path: "/todo", label: "To-Do", icon: CheckSquare },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-[hsl(var(--brown-text))]">
            <StickyNote className="h-6 w-6 text-[hsl(var(--accent-orange))]" />
            <span>Beige Notes</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[hsl(var(--accent-orange))] text-white shadow-sm"
                      : "text-[hsl(var(--brown-light))] hover:bg-white/50 hover:text-[hsl(var(--brown-text))]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
