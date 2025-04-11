import React from "react";
import Navbar from "../components/navbar";

const About: React.FC = () => {
  return (
    <div
      className="container min-vh-100 d-flex flex-column align-items-center justify-content-start pt-5"
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
        backgroundImage: `url('/images/background.jpg')`, // Tu imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 20px",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      <Navbar />

      <div className="card shadow p-5" style={{ maxWidth: "800px", width: "100%", backgroundColor: "#ffffff", borderRadius: "12px" }}>
        <div className="card-body text-center">
          <h1
            className="mb-4 d-flex align-items-center justify-content-center"
            style={{
              color: "#D88C7B",
              fontWeight: "bold",
              fontSize: "36px",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span role="img" aria-label="Earth" style={{ fontSize: "40px" }}>
              🌍
            </span>
            Sobre RutasConSentido
          </h1>

          {/* Cada párrafo en una tarjeta */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>✈️</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              <strong>RutasConSentido</strong> nace de una idea simple pero poderosa: viajar por el mundo, conectar con comunidades locales y crear un impacto positivo real.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>👍</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Cada vídeo que ves, cada "me gusta" que das y cada vez que compartes estás contribuyendo directamente a ayudar a personas reales y a apoyar causas reales en todo el mundo.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🤝</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Nuestra misión es construir una cadena global de favores, donde pequeñas acciones se transforman en grandes cambios. 
              Al participar, no solo eres un espectador, sino que formas parte de un movimiento que busca hacer del mundo un lugar mejor, una historia a la vez.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🌟</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Juntos, convertimos cada ruta en un viaje con sentido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;