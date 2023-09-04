import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

import Login from "../pages/admin/Login.jsx";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesIndex;
