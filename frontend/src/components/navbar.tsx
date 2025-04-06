import { Link } from "react-router-dom";      
      
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
            <a href="#ong" style={{ color: "#D88C7B", textDecoration: "none", fontSize: "16px" }}>ONG</a>
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