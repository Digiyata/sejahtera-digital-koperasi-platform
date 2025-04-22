
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Define user types and roles
export type UserRole = "admin" | "user";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

// Define authentication context type
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample user data
const SAMPLE_USERS = [
  {
    id: "1",
    email: "admin@test.com",
    password: "admin123",
    name: "Admin Koperasi",
    role: "admin" as UserRole,
  },
  {
    id: "2",
    email: "user@test.com",
    password: "admin123",
    name: "Pengguna Biasa",
    role: "user" as UserRole,
  },
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("koperasi_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Redirect based on auth status and role
  useEffect(() => {
    if (!isLoading) {
      const isAuthRoute = location.pathname.includes("/landing/login") || 
                         location.pathname.includes("/landing/register");
                         
      if (user) {
        // If user is logged in and on auth route, redirect to dashboard
        if (isAuthRoute) {
          navigate("/dashboard");
        }
      } else {
        // If user is not logged in and on dashboard, redirect to login
        if (location.pathname.includes("/dashboard")) {
          navigate("/landing/login");
        }
      }
    }
  }, [user, location.pathname, isLoading, navigate]);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));
    
    // Find user with matching credentials
    const foundUser = SAMPLE_USERS.find(
      (u) => u.email === email && u.password === password
    );
    
    if (foundUser) {
      // Create user object without password
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("koperasi_user", JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      navigate(`/dashboard`);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("koperasi_user");
    navigate("/landing/beranda");
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
