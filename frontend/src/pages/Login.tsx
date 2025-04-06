import { GoogleLogin } from '@react-oauth/google';
import api from "../services/api";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

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
    <div className="container text-center mt-5">
      <h2>Login to RutasConSentido</h2>
      <div className="d-flex justify-content-center mt-4">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Login Failed')}
        />
      </div>
    </div>
  );
};

export default Login;