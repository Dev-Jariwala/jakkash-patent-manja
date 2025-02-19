/* eslint-disable react/prop-types */
import { useAuth } from "@/hooks/authProvider";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/signin" />;
  }

  // If authenticated, render the child routes
  return (
    <>
      <Outlet />
    </>
  );
};
