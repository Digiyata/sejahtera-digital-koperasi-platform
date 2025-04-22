
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";

export function useRequireAuth(requiredRole?: UserRole) {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/landing/login");
      } else if (requiredRole && user.role !== requiredRole) {
        navigate("/dashboard");
      }
    }
  }, [user, isLoading, navigate, requiredRole]);

  return { user, isLoading };
}
