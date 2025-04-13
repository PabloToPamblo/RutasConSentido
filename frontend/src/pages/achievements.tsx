import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

// Swiper imports
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

interface Achievement {
  id: number;
  title: string;
  description: string;
  points: number;
  image: string;
}

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/achievements/")
      .then((response) => {
        setAchievements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching achievements:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <h3>Cargando logros... ⏳</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          backgroundImage: `url('/images/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card shadow p-5 d-flex flex-column align-items-center"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            width: "90%",
            maxWidth: "1400px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#D88C7B",
              fontWeight: "bold",
              fontSize: "36px",
              marginBottom: "40px",
            }}
          >
            🏆 Todos los Logros
          </h1>

          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "center",
              marginLeft: "100px"
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Grid]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={5}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              loop={false}
              breakpoints={{
                320: { slidesPerView: 1, grid: { rows: 1 } },
                576: { slidesPerView: 2, grid: { rows: 2 } },
                768: { slidesPerView: 3, grid: { rows: 2 } },
                992: { slidesPerView: 4, grid: { rows: 2 } },
                1200: { slidesPerView: 5, grid: { rows: 2 } },
              }}
            >
              {achievements.map((achievement) => (
                <SwiperSlide key={achievement.id}>
                  <div className="card shadow-sm mx-auto" style={{ width: "180px", height: "250px" }}>
                    <img
                      src={achievement.image}
                      className="card-img-top"
                      alt={achievement.title}
                      style={{ height: "180px", objectFit: "contain", padding: "10px" }}
                    />
                    <div className="card-body text-center p-2">
                      <p className="text-muted small mb-0">{achievement.points} puntos</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;