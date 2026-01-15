import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import RoleSelection from "./pages/RoleSelection";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<RoleSelection />} />

        {/* Temporary placeholder routes */}
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/signin/:role" element={<Signin />} />
      </Routes>
    </Router>
  );
}
