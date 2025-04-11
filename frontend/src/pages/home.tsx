import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Navbar />
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
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                maxWidth: "400px",
                width: "100%",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "24px" }}>🌟</span>
              <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
                Cada pequeño gesto construye un mundo mejor
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                maxWidth: "400px",
                width: "100%",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "24px" }}>🔑</span>
              <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
                1- INICIA SESIÓN CON GOOGLE
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                maxWidth: "400px",
                width: "100%",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "24px" }}>🏆</span>
              <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
                2- REVISA TUS PUNTOS Y LOGROS EN TU PERFIL
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                maxWidth: "400px",
                width: "100%",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "24px" }}>📸</span>
              <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
                3- COMPÁRTELO EN INSTAGRAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;