import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/navbar";

interface Achievement {
  name: string;
  description: string;
  image_url: string;
  points: number;
}

interface Profile {
  username: string;
  email: string;
  points: number;
  achievements: Achievement[];
}

const ProfileView: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      const res = await api.get<Profile>("/users/profile/"); 
      setProfile(res.data);
    } catch (err) {
      console.error("Error loading profile:", err);
      setError("Failed to load profile. Please try logging in again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="container text-center mt-5">Loading profile...</div>;
  }

  if (error) {
    return <div className="container text-center mt-5 text-danger">{error}</div>;
  }

  if (!profile) {
    return null; // Esto ya no debería pasar, pero por si acaso
  }

  return (
    <>
    <Navbar/>
    <ProfileCard
      username={profile.username}
      email={profile.email}
      points={profile.points}
    />
    </>
  );
};

export default ProfileView;
