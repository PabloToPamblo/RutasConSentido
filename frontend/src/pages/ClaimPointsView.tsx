import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

interface VideoAction {
  id: number;
  action_name: string;
  points: number;
}

interface Video {
  id: number;
  title: string;
  youtube_url: string;
  thumbnail_url: string;
  actions: VideoAction[];
}

const ClaimPointsView = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [doneActions, setDoneActions] = useState<number[]>([]);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await api.get("/users/videos/");
        setVideos(res.data);
      } catch (err) {
        console.error("Error al cargar videos:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchVideos();
    }
  }, [user]);

  const handleAction = async (videoId: number, actionId: number) => {
    try {
      const res = await api.post(`/users/videos/${videoId}/acciones/`, {
        action_id: actionId,
      });
      alert(res.data.message);
      setDoneActions((prev) => [...prev, actionId]);
    } catch (err: any) {
      alert(err.response?.data?.error || "Error al reclamar puntos");
    }
  };

  if (authLoading) {
    return (
      <>
        <Navbar />
        <div className="container mt-4 text-center">
          <div className="alert alert-warning">🔄 Cargando datos de usuario...</div>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="container mt-4 text-center">
          <div className="alert alert-danger">🚫 Por favor inicia sesión para reclamar puntos.</div>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mt-4 text-center">
          <div className="alert alert-info">📺 Cargando vídeos disponibles...</div>
        </div>
      </>
    );
  }

  return (
    <>
    <Navbar />
    <div 
      className="container mt-4"
      style={{
        backgroundImage: `url('/images/BackgroundPing.png')`,
        marginTop: "0px",
        width: "100%",
      }}
    >
      <h1 className="mb-5">Reclamar</h1>
      <div className="alert alert-info text-center">
      </div>
      {videos.map((video) => (
        <div
          key={video.id}
          className="d-flex flex-column align-items-center mb-5 p-4 shadow"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "12px",
            border: "1px solid #cfe2ff",
            marginBottom: "40px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 className="mb-3">{video.title}</h2>
          </div>
          <img
            src={video.thumbnail_url}
            alt={video.title}
            className="img-fluid rounded mb-3"
            style={{
              width: "90%",
              marginTop: "10px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
            }}
          />
          <div style={{ textAlign: "center", marginBottom:"10px" }}>
            <a
              href={video.youtube_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary mb-3" 
            >
              ▶️ Ver en YouTube
            </a>
            <div className="d-flex flex-wrap justify-content-center mt-3">
              {video.actions.map((action) => (
                <button
                  key={action.id}
                  className="btn btn-success m-2"
                  disabled={doneActions.includes(action.id)}
                  onClick={() => handleAction(video.id, action.id)}
                >
                  {action.action_name} (+{action.points}⭐)
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ClaimPointsView;
