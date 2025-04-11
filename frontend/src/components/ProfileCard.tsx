import React from "react";

interface Achievement {
  name: string;
  description: string;
  image_url: string;
}

interface ProfileCardProps {
  username: string;
  email: string;
  points: number;
  achievements: Achievement[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username, email, points, achievements }) => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      padding: "20px"
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
        <h2>Welcome, {username}!</h2>
        <h6 style={{ color: "gray" }}>{email}</h6>

        {/* 🔥 Aquí el color de los puntos cambia dinámicamente */}
        <div style={{
          marginTop: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: points > 0 ? "green" : "red",
        }}>
          Points: {points}
        </div>

        {/* 🔥 Botón con efecto hover */}
        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "10px 20px",
              border: "1px solid #007bff",
              borderRadius: "6px",
              background: "white",
              color: "#007bff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "0 auto",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "#007bff";
              target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "white";
              target.style.color = "#007bff";
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width="24"
              height="24"
            />
            Share on Instagram
          </button>
        </div>

        <h4 style={{ marginTop: "40px" }}>TUS LOGROS</h4>

        {achievements.length === 0 ? (
          <p>Consigue puntos para desbloquear logros</p>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {achievements.map((ach, idx) => (
              <div key={idx} style={{
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px"
              }}>
                <img
                  src={ach.image_url}
                  alt={ach.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
                />
                <h5 style={{ marginTop: "10px" }}>{ach.name}</h5>
                <p>{ach.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;