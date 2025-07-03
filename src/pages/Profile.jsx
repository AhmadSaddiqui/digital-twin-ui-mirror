
import { useState } from "react";
import { User, Edit, Camera, MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "Passionate note-taker and productivity enthusiast. Love organizing thoughts and turning ideas into action."
  });

  const stats = [
    { label: "Notes Created", value: "47" },
    { label: "Tasks Completed", value: "128" },
    { label: "Days Active", value: "23" },
    { label: "Words Written", value: "12.5K" }
  ];

  return (
    <div className="min-h-screen warm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-effect rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-[hsl(var(--accent-coral))] mr-3" />
              <h1 className="text-4xl font-bold text-[hsl(var(--sage-text))]">Profile</h1>
            </div>
            <p className="text-[hsl(var(--sage-light))] text-lg">
              Manage your personal information and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="glass-effect border-white/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Personal Information</h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    size="sm"
                    className="border-[hsl(var(--accent-coral))] text-[hsl(var(--accent-coral))] hover:bg-[hsl(var(--accent-coral))] hover:text-white"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-[hsl(var(--accent-coral))] rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[hsl(var(--sage-text))]">{profile.name}</h3>
                      <p className="text-[hsl(var(--sage-light))]">Member since {profile.joinDate}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[hsl(var(--sage-light))]" />
                      <span className="text-[hsl(var(--sage-text))]">{profile.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[hsl(var(--sage-light))]" />
                      <span className="text-[hsl(var(--sage-text))]">{profile.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-[hsl(var(--sage-light))]" />
                      <span className="text-[hsl(var(--sage-text))]">Joined {profile.joinDate}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-[hsl(var(--sage-text))] mb-2">Bio</h4>
                    <p className="text-[hsl(var(--sage-light))]">{profile.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="glass-effect border-white/30">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-[hsl(var(--sage-text))]">Activity Stats</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-white/40 rounded-lg">
                        <div className="text-2xl font-bold text-[hsl(var(--accent-coral))]">{stat.value}</div>
                        <div className="text-sm text-[hsl(var(--sage-light))]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
