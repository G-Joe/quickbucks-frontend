import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home";
import Loans from "pages/Dashboard/Loans";
import LoanCalculator from "pages/Dashboard/LoanCalculator";
import Liquidate from "pages/Dashboard/Liquidate";
import Support from "pages/Dashboard/Support";
import Settings from "pages/Dashboard/Settings";
import Account from "pages/Dashboard/Account/open-account";
import History from "pages/Dashboard/History";
import DashboardLayout from "pages/Dashboard/DashboardLayout";
import Referral from "pages/Dashboard/Account/referral"
import DebitCard from "pages/Dashboard/Account/pages/DebitCard/DebitCard";
import DebitCardNew from "pages/Dashboard/Account/pages/DebitCard/DebitCardNew";
import DebitCardAdded from "pages/Dashboard/Account/pages/DebitCard/DebitCardAdded";
import MyDetails from "pages/Dashboard/Account/pages/MyDetails/MyDetails";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="loans" element={<Loans />} />
        <Route path="loan-calculator" element={<LoanCalculator />} />
        <Route path="liquidate" element={<Liquidate />} />
        <Route path="support/faq" element={<Support />} />
        <Route path="account/referral-code" element={<Referral />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account/open-account" element={<Account />} />
        <Route path="account/debit-card" element={<DebitCard />} />
        <Route path="account/debit-card/new" element={<DebitCardNew />} />
        <Route path="account/debit-card/cards" element={<DebitCardAdded />} />
        <Route path="account/my-details" element={<MyDetails />} />
        <Route path="history" element={<History />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
