import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home";
import Loans from "pages/Dashboard/Loans";
import LoanCalculator from "pages/Dashboard/LoanCalculator";
import Liquidate from "pages/Dashboard/Liquidate";
import Support from "pages/Dashboard/Support";
import Settings from "pages/Dashboard/Settings";
import Account from "pages/Dashboard/Account";
import History from "pages/Dashboard/History";
import DashboardLayout from "pages/Dashboard/DashboardLayout";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="loans" element={<Loans />} />
        <Route path="loan-calculator" element={<LoanCalculator />} />
        <Route path="liquidate" element={<Liquidate />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="history" element={<History />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
