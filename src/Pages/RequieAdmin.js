import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Components/Loading/Loading";
import auth from "../firebaseConfig";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    // If user is not authenticated, redirect to the login page
    // Save the current location to redirect the user back after successful login
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
