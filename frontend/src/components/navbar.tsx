import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { GoogleLogin } from '@react-oauth/google';
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
        
        <Link
          to="/"
          style={{
            backgroundColor: "#D88C7B",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "1px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          🌍 RutasConSentido
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                backgroundColor: "#D88C7B",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
            {menuOpen && (
              <div style={{ position: "absolute", top: "70px", right: "0", backgroundColor: "#fff", border: "1px solid #ddd", padding: "20px", zIndex: 999 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link to="/about">📝 Sobre Nosotros</Link>
                  <Link to="/ong">❤️ ONG</Link>
                  <Link to="/achievements">🏆 Logros</Link>
                  {isAuthenticated && (
                    <>
                      <Link to="/reclamar">🎁 Reclamar</Link>
                      <Link to="/profile">👤 Perfil</Link>
                      <button onClick={logout}>🚪 Logout</button>
                    </>
                  )}
                  {!isAuthenticated && (
                    <GoogleLogin
                      onSuccess={async credentialResponse => {
                        const idToken = credentialResponse.credential;
                        const response = await api.post("/auth/google/", { id_token: idToken });
                        localStorage.setItem("access_token", response.data.tokens.access);
                        localStorage.setItem("refresh_token", response.data.tokens.refresh);
                        login();
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        navigate("/profile");
                      }}
                      onError={() => console.error("Login Failed")}
                    />
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Link
              to="/about"
              style={{
                backgroundColor: "#D88C7B",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📝 Sobre Nosotros
            </Link>
            <Link
              to="/ong"
              style={{
                backgroundColor: "#D88C7B",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ❤️ ONG
            </Link>
            <Link
              to="/achievements"
              style={{
                backgroundColor: "#D88C7B",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              🏆 Logros
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/reclamar"
                  style={{
                    backgroundColor: "#D88C7B",
                    color: "#ffffff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  🎁 Reclamar
                </Link>
                <Link
                  to="/profile"
                  style={{
                    backgroundColor: "#D88C7B",
                    color: "#ffffff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  👤 Perfil
                </Link>
                <button
                  onClick={logout}
                  style={{
                    backgroundColor: "#D88C7B",
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
                  🚪 Logout
                </button>
              </>
            ) : (
              <GoogleLogin
                onSuccess={async credentialResponse => {
                  const idToken = credentialResponse.credential;
                  console.log("ID Token:", idToken);

                  try {
                    const response = await api.post("/auth/google/", { id_token: idToken });

                    localStorage.setItem("access_token", response.data.tokens.access);
                    localStorage.setItem("refresh_token", response.data.tokens.refresh);

                    login();
                    await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
                    navigate("/profile");
                  } catch (error) {
                    console.error("Login failed", error);
                  }
                }}
                onError={() => {
                  console.error('Login Failed');
                }}
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;