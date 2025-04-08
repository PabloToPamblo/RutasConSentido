import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileView from "./pages/ProfileView";
import Login from "./pages/Login";
import Home from "./pages/home";
import About from "./pages/about";
import Ong from "./pages/ong";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} /> {/* 👈 Añade esta línea */}
        <Route path="/ong" element={<Ong />} /> {/* 👈 Añade esta línea */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
