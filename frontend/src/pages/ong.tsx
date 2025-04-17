import React from "react";
import Navbar from "../components/navbar";

const Ong: React.FC = () => {

  return (
    <>
      <Navbar />
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
            <span role="img" aria-label="ONG" style={{ fontSize: "40px" }}>
              🤝
            </span>
            Nuestra ONG - RutasConSentido
          </h1>

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
            <span style={{ fontSize: "24px" }}>🚀</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              A partir de junio, iniciaremos el sueño de fundar nuestra propia ONG: <strong>RutasConSentido</strong>. Nuestro objetivo es crear una organización transparente y accesible, donde cualquier persona pueda ver exactamente cómo ayudamos y cómo impactamos en la vida de quienes más lo necesitan.
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
            <span style={{ fontSize: "24px" }}>🤲</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Queremos invitar a marcas, empresas y particulares a ser parte de esta cadena de favores global, fomentando un mundo más humano, generoso y sostenible.
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
            <span style={{ fontSize: "24px" }}>🎥</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Cada donación, cada visualización de nuestros vídeos y cada pequeño gesto contará, y todo el proceso será completamente abierto para que cualquiera pueda seguir el impacto real que generamos.
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
            <span style={{ fontSize: "24px" }}>🌍</span>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              Creemos en un mundo donde la ayuda es simple, directa y transparente. Gracias por formar parte de esta nueva aventura.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ong;