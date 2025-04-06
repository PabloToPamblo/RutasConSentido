import React from "react";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Hook de react-router-dom para redireccionar
  
  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      const idToken = credentialResponse.credential;
      const response = await api.post("/auth/google/", { id_token: idToken });

      localStorage.setItem("access_token", response.data.tokens.access);
      localStorage.setItem("refresh_token", response.data.tokens.refresh);

      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      
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
          <span style={{ fontSize: "22px", fontWeight: 700 }}>RutasConSentido</span>

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

      {/* CONTENIDO */}
      <div
        id="login"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          backgroundImage: `url('/images/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "40px 20px",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {/* WRAPPER */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
            height: "100%",
            gap: "50px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* VÍDEO */}
          <div
            style={{
              flex: "0 0 50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "500px", aspectRatio: "16/9", overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TJRzUJPI9w0"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* SEPARADOR */}
          <div
            style={{
                width: "1px",
                height: "80%",
                minHeight: "150px",
                backgroundColor: "black",
                opacity: 0.2,
            }}
          ></div>

          {/* TEXTO Y BOTÓN */}
          <div
            style={{
              flex: "0 0 50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
            }}
          >
            <p style={{ fontSize: "22px", color: "#333", maxWidth: "400px" }}>
              Cada pequeño gesto construye un mundo mejor. CANJEA tus logros, COMPÁRTELOS y ÚNETE a la cadena de favores.
            </p>

            {/* LOGIN BUTTON WITH GOOGLE */}
            <div className="container text-center mt-5">
            <div className="d-flex justify-content-center mt4">
                <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log('Login Failed')}
                />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;