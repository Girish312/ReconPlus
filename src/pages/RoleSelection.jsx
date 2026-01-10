import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || "signup";

  const handleRoleSelect = (role) => {
    navigate(`/${mode}/${role}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Navbar />

      <div className="pt-32 px-4 flex justify-center">
        <div className="w-full max-w-6xl border border-cyan-400/50 rounded-2xl p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Select your Role
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["admin", "analyst", "user"].map((role) => (
              <div
                key={role}
                onClick={() => handleRoleSelect(role)}
                className="cursor-pointer bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-xl p-10 text-center border border-cyan-500/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <h2 className="text-lg sm:text-2xl font-semibold capitalize">
                  {role}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
