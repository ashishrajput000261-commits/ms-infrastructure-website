import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn =
    localStorage.getItem("msAdminLoggedIn") === "true";

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;