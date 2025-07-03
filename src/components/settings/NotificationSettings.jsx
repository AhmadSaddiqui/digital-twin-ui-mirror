
import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ToggleSwitch from "./ToggleSwitch";

const NotificationSettings = ({ settings, onToggle }) => {
  return (
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
            <p className="text-sm text-[hsl(var(--sage-light))]">Receive updates via email</p>
          </div>
          <ToggleSwitch
            checked={settings.email}
            onChange={() => onToggle('email')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-[hsl(var(--sage-text))]">Push Notifications</h3>
            <p className="text-sm text-[hsl(var(--sage-light))]">Get notified on your device</p>
          </div>
          <ToggleSwitch
            checked={settings.push}
            onChange={() => onToggle('push')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-[hsl(var(--sage-text))]">Task Reminders</h3>
            <p className="text-sm text-[hsl(var(--sage-light))]">Reminders for upcoming tasks</p>
          </div>
          <ToggleSwitch
            checked={settings.reminders}
            onChange={() => onToggle('reminders')}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
