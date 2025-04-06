import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProfileCard from "../components/ProfileCard";

interface Achievement {
  name: string;
  description: string;
  image_url: string;
}

interface Profile {
  username: string;
  email: string;
  points: number;
  achievements: Achievement[];
}

const ProfileView: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await api.get<Profile>("/users/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div className="container text-center mt-5">Loading profile...</div>;
  }

  return (
    <ProfileCard
      username={profile.username}
      email={profile.email}
      points={profile.points}
      achievements={profile.achievements}
    />
  );
};

export default ProfileView;