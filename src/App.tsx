import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthRoutes from "navigation/AuthRoutes";
import DashboardRoutes from "navigation/DashboardRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AuthRoutes />
      <Routes>
        <Route path="dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
}

export default App;
