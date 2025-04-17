import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/navbar";
import { requestYouTubeAccessToken, enviarAccessToken } from "../services/youtube";

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
      achievements={profile.achievements}
    />
    {profile.achievements.length > 0 && (
      <div className="container mt-5">
        <h3 className="text-center mb-4">🎖️ Logros obtenidos</h3>
        <div className="row justify-content-center">
          {profile.achievements.map((achievement, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4 text-center">
              <img
                src={achievement.image_url}
                alt={achievement.name}
                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h5 className="mt-3">{achievement.name}</h5>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    <div className="text-center mt-4">
      <button
        onClick={() => {
          requestYouTubeAccessToken(async (accessToken: string) => {
            console.log("🔥 Access Token recibido:", accessToken);

            const resultado = await enviarAccessToken(accessToken);
            console.log("🎯 Respuesta del backend:", resultado);
          });
        }}
        style={{
          marginTop: "20px",
          backgroundColor: "#D88C7B",
          color: "white",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
        }}
      >
        🔐 Comprobar suscripción YouTube y dar puntos
      </button>

      <button
        onClick={fetchProfile}
        style={{
          backgroundColor: "#6c63ff",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        🔄 Refrescar puntos
      </button>
  </div>
    </>

  );
};

export default ProfileView;