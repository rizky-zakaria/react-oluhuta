import { Routes, Route } from "react-router-dom";
import Login from "../pages/web/Login/Login.jsx";
import Home from "../pages/web/Home/Index.jsx";
import Contact from "../pages/web/Contact/Index.jsx";
import About from "../pages/web/About/Index.jsx";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/user/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      {/* <Route
        path="/user/dashboard"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
}

export default RoutesIndex;
