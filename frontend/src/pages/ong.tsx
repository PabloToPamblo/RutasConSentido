import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

const Ong: React.FC = () => {

    const navigate = useNavigate(); // Hook de react-router-dom para redireccionar

    interface TokenResponse {
        access_token: string;
        expires_in: number;
        scope: string;
        token_type: string;
        state?: string;
      }

    const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        try {
        const accessToken = tokenResponse.access_token;
        console.log("Access Token:", accessToken);

        const response = await api.post("/auth/google/", { access_token: accessToken });

        localStorage.setItem("access_token", response.data.tokens.access);
        localStorage.setItem("refresh_token", response.data.tokens.refresh);

        navigate("/profile");
        } catch (error) {
        console.error("Login failed", error);
        }
    },
    onError: () => {
        console.error('Login Failed');
    },
    });

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
    <>
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
            {/* LOGIN BUTTON WITH GOOGLE */}
            <button
            onClick={() => login()}
            style={{
                backgroundColor: "#D88C7B",   // Tu color corporativo
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
            }}
            >
            {/* Puedes incluir aquí un icono pequeño si quieres */}
            LogIn
            </button>
          </div>
        </div>
      </nav>

      <div
        className="container min-vh-100 d-flex flex-column align-items-center justify-content-start pt-5"
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
        <div
          className="card shadow p-5"
          style={{
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
          }}
        >
          <div className="card-body text-center">
            <h1 className="mb-4" style={{ color: "#D88C7B" }}>Nuestra ONG - RutasConSentido</h1>

            <p style={{ fontSize: "18px", color: "#333" }}>
              A partir de junio, iniciaremos el sueño de fundar nuestra propia ONG: <strong>RutasConSentido</strong>.
              Nuestro objetivo es crear una organización transparente y accesible, donde cualquier persona pueda ver
              exactamente cómo ayudamos y cómo impactamos en la vida de quienes más lo necesitan.
            </p>

            <p style={{ fontSize: "18px", color: "#333" }}>
              Queremos invitar a marcas, empresas y particulares a ser parte de esta cadena de favores global,
              fomentando un mundo más humano, generoso y sostenible.
            </p>

            <p style={{ fontSize: "18px", color: "#333" }}>
              Cada donación, cada visualización de nuestros vídeos y cada pequeño gesto contará,
              y todo el proceso será completamente abierto para que cualquiera pueda seguir el impacto real que generamos.
            </p>

            <p style={{ fontSize: "18px", color: "#333" }}>
              Creemos en un mundo donde la ayuda es simple, directa y transparente. 
              Gracias por formar parte de esta nueva aventura.
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-outline-primary">
                📬 Quiero Colaborar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ong;