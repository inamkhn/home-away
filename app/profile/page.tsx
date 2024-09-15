"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );

  const handleImageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      {" "}
      {/* Changed from max-w-md to max-w-2xl */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {" "}
        {/* Increased space-y-4 to space-y-6 for better spacing */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <Label htmlFor="profile-image" className="cursor-pointer">
            <Input
              id="profile-image"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageUpdate}
            />
            <Button variant="outline" size="sm">
              Update Profile Image
            </Button>
          </Label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {" "}
          {/* Increased gap-4 to gap-6 */}
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="Susan" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Smith" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="shakeAndBake" />
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
}
