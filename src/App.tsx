import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SignIn from "pages/Auth/login/SignIn";
import SelectCustomerType from "pages/Auth/signup/SelectCustomerType";
import SignUpOne from "pages/Auth/signup/individual/SignUpOne";
import SignUpTwo from "pages/Auth/signup/individual/SignUpTwo";
import SignUpThree from "pages/Auth/signup/individual/SignUpThree";
import SignUpFour from "pages/Auth/signup/individual/SignUpFour";
import SignUpFive from "pages/Auth/signup/individual/SignUpFive";
import "styles/index.scss";

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
        <Route path="/signup/individual/4" element={<SignUpFour />} />
        <Route path="/signup/individual/5" element={<SignUpFive />} />
      </Routes>
    </div>
  );
}

export default App;
