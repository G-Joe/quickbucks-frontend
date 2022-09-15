import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SignIn from "pages/Auth/login/SignIn";
import SelectCustomerType from "pages/Auth/signup/SelectCustomerType";
import SignUpOne from "pages/Auth/signup/individual/SignUpOne";
import SignUpTwo from "pages/Auth/signup/individual/SignUpTwo";
import "styles/index.scss";
import SignUpThree from "pages/Auth/signup/individual/SignUpThree";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="bg-1">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SelectCustomerType />} />
        <Route path="/signup/individual/1" element={<SignUpOne />} />
        <Route path="/signup/individual/2" element={<SignUpTwo />} />
        <Route path="/signup/individual/3" element={<SignUpThree />} />
      </Routes>
    </div>
  );
}

export default App;
