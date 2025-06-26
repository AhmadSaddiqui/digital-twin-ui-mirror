
import { useState } from "react";
import { Settings as SettingsIcon, Bell, Shield, Palette, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      reminders: true
    },
    privacy: {
      profileVisible: true,
      shareAnalytics: false
    },
    appearance: {
      theme: "light",
      fontSize: "medium"
    }
  });

  const handleToggle = (category: string, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...(prev as any)[category],
        [setting]: !(prev as any)[category][setting]
      }
    }));
  };

  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-[hsl(var(--accent-coral))]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <SettingsIcon className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--sage-text))]">Settings</h1>
            </div>
            <p className="text-[hsl(var(--sage-light))] text-lg">
              Customize your experience and manage your preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Notifications */}
            <Card className="glass-effect border-white/30">
              <CardHeader>
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-[hsl(var(--accent-coral))] mr-2" />
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Notifications</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[hsl(var(--sage-text))]">Email Notifications</h3>
                    <p className="text-sm text-[hsl(var(--sage-light))]">Receive updates and reminders via email</p>
                  </div>
                  <ToggleSwitch
                    checked={settings.notifications.email}
                    onChange={() => handleToggle('notifications', 'email')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[hsl(var(--sage-text))]">Push Notifications</h3>
                    <p className="text-sm text-[hsl(var(--sage-light))]">Get instant notifications on your device</p>
                  </div>
                  <ToggleSwitch
                    checked={settings.notifications.push}
                    onChange={() => handleToggle('notifications', 'push')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[hsl(var(--sage-text))]">Task Reminders</h3>
                    <p className="text-sm text-[hsl(var(--sage-light))]">Remind me about upcoming tasks</p>
                  </div>
                  <ToggleSwitch
                    checked={settings.notifications.reminders}
                    onChange={() => handleToggle('notifications', 'reminders')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="glass-effect border-white/30">
              <CardHeader>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[hsl(var(--accent-teal))] mr-2" />
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Privacy & Security</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[hsl(var(--sage-text))]">Public Profile</h3>
                    <p className="text-sm text-[hsl(var(--sage-light))]">Make your profile visible to other users</p>
                  </div>
                  <ToggleSwitch
                    checked={settings.privacy.profileVisible}
                    onChange={() => handleToggle('privacy', 'profileVisible')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[hsl(var(--sage-text))]">Share Analytics</h3>
                    <p className="text-sm text-[hsl(var(--sage-light))]">Help improve our service with usage data</p>
                  </div>
                  <ToggleSwitch
                    checked={settings.privacy.shareAnalytics}
                    onChange={() => handleToggle('privacy', 'shareAnalytics')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card className="glass-effect border-white/30">
              <CardHeader>
                <div className="flex items-center">
                  <Palette className="h-5 w-5 text-[hsl(var(--accent-coral))] mr-2" />
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Appearance</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Theme</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, appearance: { ...prev.appearance, theme: 'light' } }))}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        settings.appearance.theme === 'light'
                          ? 'border-[hsl(var(--accent-coral))] bg-[hsl(var(--accent-coral))]/10'
                          : 'border-white/30 bg-white/20'
                      }`}
                    >
                      <Sun className="h-4 w-4" />
                      <span className="text-[hsl(var(--sage-text))]">Light</span>
                    </button>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, appearance: { ...prev.appearance, theme: 'dark' } }))}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        settings.appearance.theme === 'dark'
                          ? 'border-[hsl(var(--accent-coral))] bg-[hsl(var(--accent-coral))]/10'
                          : 'border-white/30 bg-white/20'
                      }`}
                    >
                      <Moon className="h-4 w-4" />
                      <span className="text-[hsl(var(--sage-text))]">Dark</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-[hsl(var(--sage-text))] mb-3">Font Size</h3>
                  <select
                    value={settings.appearance.fontSize}
                    onChange={(e) => setSettings(prev => ({ ...prev, appearance: { ...prev.appearance, fontSize: e.target.value } }))}
                    className="px-3 py-2 rounded-md bg-white/80 border border-white/30 text-[hsl(var(--sage-text))]"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button className="bg-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))]/90 text-white">
                Save Changes
              </Button>
              <Button variant="outline" className="border-[hsl(var(--sage-light))] text-[hsl(var(--sage-text))]">
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
