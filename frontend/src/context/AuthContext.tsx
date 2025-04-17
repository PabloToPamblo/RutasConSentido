import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useContext } from "react";
import api from "../services/api";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      api.get("/users/profile/")
        .then(res => {
          setUser(res.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          setUser(null);
          setIsAuthenticated(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};