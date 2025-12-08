import { useState, useEffect } from "react";

const AUTH_KEY = "smartdine_auth";

interface User {
  email: string;
  name: string;
}

// Hardcoded credentials
const VALID_CREDENTIALS = {
  email: "demo@smartdine.com",
  password: "demo123",
  name: "Demo User",
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      const userData = { email, name: VALID_CREDENTIALS.name };
      localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  return { user, isLoading, login, logout };
};
