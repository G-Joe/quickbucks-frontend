import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home/Home";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default DashboardRoutes;
