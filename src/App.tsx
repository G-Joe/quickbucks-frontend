import Layout from "layout";
import AuthRoutes from "navigation/AuthRoutes";
import DashboardRoutes from "navigation/DashboardRoutes";

function App() {
  return (
    <div className="bg-1">
      <AuthRoutes />

      <Layout>
        <DashboardRoutes />
      </Layout>
    </div>
  );
}

export default App;
