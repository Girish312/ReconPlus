import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const roleTitleMap = {
    admin: "Admin",
    analyst: "Analyst",
    user: "User",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary validation
    if (!formData.terms) {
      alert("Please accept the terms");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Later: send data + role to backend
    console.log("Signup data:", { ...formData, role });

    navigate("/signup-success", { state: { role } });
  };

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/signup-bg.png')",
      }}
    >
      <Navbar />

      <div className="pt-32 px-6 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT SECTION */}
          <div className="hidden lg:flex flex-col items-start w-1/2">
            <img
              src="/images/illustrations/security-illustration.png"
              alt="Security Illustration"
              className="w-[420px] mb-10"
            />

            <h1 className="text-5xl font-bold leading-tight mb-4">
              All Insights.
              <br />
              One Platform.
            </h1>

            <p className="text-gray-300 max-w-md">
              Unified vulnerability analysis from multiple security sources.
            </p>
          </div>

          {/* RIGHT SECTION - FORM */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-cyan-500/30 rounded-3xl px-10 py-12 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8 text-center">
                {roleTitleMap[role] || "User"} Sign Up
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-base mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-base mb-2">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-base mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white text-black outline-none pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex text-gray-500 items-center justify-center"
                    >
                      <img
                        src="/images/hidepass.png"
                        alt="hidepass"
                        className="h-5 w-5 object-contain"
                      />
                    </button>
                  </div>
                  <p className="text-sm  text-gray-400 mt-2">
                    Use 6 or more characters with a mix of numbers, letters and symbols
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-base mb-2">Repeat Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                    required
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">
                    I accept the{" "}
                    <span className="text-cyan-400 cursor-pointer hover:underline">
                      Terms
                    </span>
                  </span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                >
                  Sign Up
                </button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-400 mt-6">
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate(`/signin/${role}`)}
                    className="text-cyan-400 cursor-pointer hover:underline"
                  >
                    Sign in
                  </span>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
