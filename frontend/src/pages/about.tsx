import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div
      className="container min-vh-100 d-flex flex-column align-items-center justify-content-start pt-5"
      style={{ marginTop: "80px" }}
    >
              
      {/* NAVBAR */}
      <nav
        style={{
          height: "70px",
          width: "100%",
          backgroundColor: "#ffffff",
          color: "#D88C7B",
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          borderBottom: "1px solid #ddd",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          
          <Link to="/" className="nav-link">RUTASCONSENTIDO</Link> {/* 👈 Nuevo enlace */}

          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Link to="/about" className="nav-link">Sobre Nosotros</Link> {/* 👈 Nuevo enlace */}
            <Link to="/ong" className="nav-link">ONG</Link> {/* 👈 Nuevo enlace */}
            <a
              href="#login"
              style={{
                padding: "8px 16px",
                border: "1px solid #D88C7B",
                borderRadius: "6px",
                background: "transparent",
                color: "#D88C7B",
                fontSize: "16px",
                textDecoration: "none",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = "#ffffff";
                target.style.color = "#D88C7B";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.backgroundColor = "transparent";
                target.style.color = "#D88C7B";
              }}
            >
              Login
            </a>
          </div>
        </div>
      </nav>


      <div className="card shadow p-5" style={{ maxWidth: "800px", width: "100%", backgroundColor: "#ffffff", borderRadius: "12px" }}>
        <div className="card-body text-center">
          <h1 className="mb-4" style={{ color: "#D88C7B" }}>Sobre RutasConSentido</h1>

          <p style={{ fontSize: "18px", color: "#333" }}>
            <strong>RutasConSentido</strong> nace de una idea simple pero poderosa: <br />
            viajar por el mundo, conectar con comunidades locales y crear un impacto positivo real.
          </p>

          <p style={{ fontSize: "18px", color: "#333" }}>
            Cada vídeo que ves, cada "me gusta" que das y cada vez que compartes,
            estás contribuyendo directamente a ayudar a personas reales y a apoyar causas reales en todo el mundo.
          </p>

          <p style={{ fontSize: "18px", color: "#333" }}>
            Nuestra misión es construir una cadena global de favores, donde pequeñas acciones
            se transforman en grandes cambios. Al participar, no solo eres un espectador, sino
            que formas parte de un movimiento que busca hacer del mundo un lugar mejor, una historia a la vez.
          </p>

          <p style={{ fontSize: "18px", color: "#333" }}>
            Juntos, convertimos cada ruta en un viaje con sentido.
          </p>

          <div className="mt-4">
            <a href="#contact" className="btn btn-outline-primary">
              📬 Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;