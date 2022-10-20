import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home";
import Loans from "pages/Dashboard/Loans";
import LoanCalculator from "pages/Dashboard/LoanCalculator";
import Liquidate from "pages/Dashboard/Liquidate";
import Support from "pages/Dashboard/Support";
import Settings from "pages/Dashboard/Settings";
import History from "pages/Dashboard/History";
import DashboardLayout from "pages/Dashboard/DashboardLayout";
import OpenAccount from "pages/Dashboard/Account/pages/OpenAccount";
import DebitCard from "pages/Dashboard/Account/pages/DebitCard/DebitCard";
import DebitCardNew from "pages/Dashboard/Account/pages/DebitCard/DebitCardNew";
import MyDetails from "pages/Dashboard/Account/pages/MyDetails";
import ReferralCode from "pages/Dashboard/Account/pages/ReferralCode";
import DebitCardAdded from "pages/Dashboard/Account/pages/DebitCard/DebitCardAdded";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="loans" element={<Loans />} />
        <Route path="loan-calculator" element={<LoanCalculator />} />
        <Route path="liquidate" element={<Liquidate />} />
        <Route path="support/faq" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account/open-account" element={<OpenAccount />} />
        <Route path="account/debit-card" element={<DebitCard />} />
        <Route path="account/debit-card/new" element={<DebitCardNew />} />
        <Route path="account/debit-card/cards" element={<DebitCardAdded />} />
        <Route path="account/my-details" element={<MyDetails />} />
        <Route path="account/referral-code" element={<ReferralCode />} />
        <Route path="history" element={<History />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
