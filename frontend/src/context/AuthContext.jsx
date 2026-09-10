


import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContextValue";
import { STORAGE_KEYS } from "../constants/storage";

const demoUser = {
  fullName: "Student",
  email: "student@example.com",
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem(STORAGE_KEYS.USER)),
  );

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) ||
        null
      );
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);

  const login = async (userData) => {
    setLoading(true);

    try {
      const nextUser = {
        ...demoUser,
        ...userData,
      };

      localStorage.setItem(
        STORAGE_KEYS.USER,
        JSON.stringify(nextUser),
      );

      setCurrentUser(nextUser);
      setIsAuthenticated(true);

      return {
        success: true,
        user: nextUser,
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);

    try {
      localStorage.setItem(
        "pendingRegistration",
        JSON.stringify(userData),
      );

      return {
        success: true,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      currentUser,
      loading,
      login,
      register,
      logout,
    }),
    [isAuthenticated, currentUser, loading],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};