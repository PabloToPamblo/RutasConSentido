import React, { useEffect, useState } from "react";

interface Achievement {
  name: string;
  description: string;
  image: string;
  points: number;
}

interface ProfileCardProps {
  username: string;
  email: string;
  points: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username, points }) => {
  const [allAchievements, setAllAchievements] = useState<Achievement[]>([]);
  
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/achievements/");
        const data = await response.json();
        setAllAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };
    fetchAchievements();
  }, []);

  const unlockedAchievements = allAchievements.filter((ach) => points >= ach.points);

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      padding: "20px",
      marginTop: "100px"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
      }}>
        <h2>Te quiero, {username}!</h2>

        {/* Aquí el color de los puntos cambia dinámicamente */}
        <div style={{
          marginTop: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: points > 0 ? "green" : "red",
        }}>
          Points: {points}
        </div>
        
        <h4 style={{ marginTop: "40px" }}>TUS LOGROS</h4>

        {unlockedAchievements.length === 0 ? (
          <p>Consigue puntos para desbloquear logros</p>
        ) : (
          <div style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxHeight: "400px",
            overflowY: "auto",
          }}>
            {unlockedAchievements.map((ach, idx) => (
              <div key={idx} style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "#fdfdfd",
                textAlign: "center",
              }}>
                <img
                  src={ach.image}
                  alt={ach.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
                />
                <h5 style={{ marginTop: "10px" }}>{ach.name}</h5>
                <p>{ach.description}</p>
                <a
                  href={ach.image}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "6px 12px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  📥 Descargar
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;