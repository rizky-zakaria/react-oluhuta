import Cookies from "js-cookie";

import { Navigate } from "react-router-dom";

function privateRoutes({ children }) {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to="/user/login" replace />;
  }

  return children;
}

export default privateRoutes;
