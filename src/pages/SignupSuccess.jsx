import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignupSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  // role passed from signup page
  const role = location.state?.role || "user";

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Navbar />

      <div className="pt-32 px-4 flex justify-center items-center">
        <div className="w-full max-w-md bg-gradient-to-br from-[#0f172a] to-[#020617] border border-cyan-500/30 rounded-3xl px-10 py-14 text-center shadow-2xl">

          {/* Title */}
          <h1 className="text-3xl font-bold mb-8">
            Sign Up Successful
          </h1>

          {/* Check Icon */}
          <div className="flex justify-center mb-10">
            <div className="h-28 w-28 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-6xl">✓</span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(`/signin/${role}`)}
            className="w-full py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Sign In Here
          </button>

        </div>
      </div>
    </div>
  );
}
