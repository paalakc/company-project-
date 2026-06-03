import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  role: string;
  initials: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const DEMO_USER: User = {
  name: "John Doe",
  email: "john.doe@corp.com",
  role: "Administrator",
  initials: "JD",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string): boolean => {
    const initials = email
      .split("@")[0]
      .split(".")
      .map((p) => p[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);
    setUser({ ...DEMO_USER, email, initials: initials || "U" });
    return true;
  };

  const register = (name: string, email: string, _password: string): boolean => {
    const initials = name
      .split(" ")
      .map((p) => p[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);
    setUser({ name, email, role: "User", initials: initials || "U" });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
