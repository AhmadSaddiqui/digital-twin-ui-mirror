
import { Palette } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AppearanceSettings = ({ settings, onThemeChange, onFontSizeChange }) => {
  const themes = ["light", "dark", "auto"];
  const fontSizes = ["small", "medium", "large"];

  return (
    <Card className="glass-effect border-white/30">
      <CardHeader>
        <div className="flex items-center">
          <Palette className="h-5 w-5 text-[hsl(var(--accent-teal))] mr-2" />
          <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Appearance</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Theme</h3>
          <div className="flex space-x-2">
            {themes.map((theme) => (
              <Button
                key={theme}
                variant={settings.theme === theme ? "default" : "outline"}
                size="sm"
                onClick={() => onThemeChange(theme)}
                className={`capitalize ${
                  settings.theme === theme
                    ? "bg-[hsl(var(--accent-coral))] text-white"
                    : "border-[hsl(var(--sage-light))] text-[hsl(var(--sage-text))]"
                }`}
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Font Size</h3>
          <div className="flex space-x-2">
            {fontSizes.map((size) => (
              <Button
                key={size}
                variant={settings.fontSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => onFontSizeChange(size)}
                className={`capitalize ${
                  settings.fontSize === size
                    ? "bg-[hsl(var(--accent-teal))] text-white"
                    : "border-[hsl(var(--sage-light))] text-[hsl(var(--sage-text))]"
                }`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
