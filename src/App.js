import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import RoleSelection from "./pages/RoleSelection";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<RoleSelection />} />

        {/* Temporary placeholder routes */}
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/signin/:role" element={<div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center">Sign In Page</div>} />
      </Routes>
    </Router>
  );
}
