import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileView from "./pages/ProfileView";
import Login from "./pages/Login";
import Home from "./pages/home";
import About from "./pages/about";
import Ong from "./pages/ong";
import Achievements from "./pages/achievements";
import ClaimPointsView from "./pages/ClaimPointsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/ong" element={<Ong />} /> 
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/reclamar" element={<ClaimPointsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
