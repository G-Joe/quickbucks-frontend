import Navbar from "components/Dashboard/Navbar/Navbar";
import Sidebar from "components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
