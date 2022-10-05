import DashboardLayout from "pages/Dashboard/DashboardLayout";
import AuthRoutes from "navigation/AuthRoutes";
import DashboardRoutes from "navigation/DashboardRoutes";

function App() {
  return (
    <div>
      <AuthRoutes />

      <DashboardLayout>
        <DashboardRoutes />
      </DashboardLayout>
    </div>
  );
}

export default App;
