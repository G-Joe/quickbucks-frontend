import AuthRoutes from "navigation/AuthRoutes";
import DashboardRoutes from "navigation/DashboardRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
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
