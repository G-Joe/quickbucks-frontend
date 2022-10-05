import { Navigate, Route, Routes } from "react-router-dom";
import {
  SignIn,
  SelectCustomerType,
  SignUpOne,
  SignUpTwo,
  SignUpThree,
  SignUpFour,
  SignUpFive,
  ForgotPasswordOne,
  ForgotPasswordTwo,
  ForgotPasswordThree,
} from "pages/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SelectCustomerType />} />
      <Route path="signup/individual/1" element={<SignUpOne />} />
      <Route path="signup/individual/2" element={<SignUpTwo />} />
      <Route path="signup/individual/3" element={<SignUpThree />} />
      <Route path="signup/individual/4" element={<SignUpFour />} />
      <Route path="signup/individual/5" element={<SignUpFive />} />
      <Route path="forgot-password/1" element={<ForgotPasswordOne />} />
      <Route path="forgot-password/2" element={<ForgotPasswordTwo />} />
      <Route path="forgot-password/3" element={<ForgotPasswordThree />} />
    </Routes>
  );
};

export default AuthRoutes;
