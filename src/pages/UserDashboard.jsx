import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import NavbarDashboard from "../components/NavbarDashboard";
import RiskScoreCard from "../components/RiskScoreCard";
import VulnerabilityRiskSummary from "../components/VulnerabilityRiskSummary";
import RiskSummary from "../components/RiskSummary";
import KeyVulnerabilities from "../components/KeyVulnerabilities";
import SecurityScanStatus from "../components/SecurityScanStatus";


export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample tool data - will be replaced by backend JSON
  const toolsData = {
    riskScores: [
      { name: "SQL Injection", value: 35, color: "#06b6d4" },
      { name: "XSS Attack", value: 25, color: "#0891b2" },
      { name: "CSRF", value: 20, color: "#0e7490" },
      { name: "Others", value: 20, color: "#164e63" },
    ],
    vulnerabilities: {
      critical: 4,
      high: 10,
      medium: 3,
      low: 5,
    },
    riskSummary: [
      { icon: "⚠️", text: "The system shows a Warning level of risk." },
      { icon: "⚠️", text: "A small number of high-risk issues require attention." },
      { icon: "✓", text: "No critical threats impacting business operations were detected." },
    ],
    keyVulnerabilities: [
      { name: "SQL Injection", status: "Detected", color: "#ef4444" },
      { name: "Outdated Software Components", status: "Detected", color: "#f97316" },
      { name: "Weak password policy", status: "Detected", color: "#eab308" },
    ],
    scanStatus: {
      progress: 65,
      estimatedTime: "10:00",
      lastScan: "Today, 3:20 PM",
      status: "In Progress",
    },
  };

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!isMounted) return;

      if (!currentUser) {
        navigate("/", { replace: true });
        return;
      }

      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: userData.name || "User",
            role: userData.role || "user",
          });
        } else {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: currentUser.displayName || "User",
            role: "user",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName || "User",
          role: "user",
        });
      }

      setLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-cyan-400 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Navbar */}
      {user && (
        <NavbarDashboard
          userName={user?.name || user?.email}
          userRole={user?.role}
          dashboardType="user"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Main Content */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <>
              {/* Section 2: Risk Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <RiskScoreCard data={toolsData.riskScores} />
                <VulnerabilityRiskSummary data={toolsData.vulnerabilities} />
              </div>

              {/* Section 3: Risk Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <RiskSummary items={toolsData.riskSummary} />
                <KeyVulnerabilities items={toolsData.keyVulnerabilities} />
              </div>

              {/* Section 4: Security Scan Status */}
              <SecurityScanStatus data={toolsData.scanStatus} />
            </>
          )}

          {activeTab === "tools" && (
            <div className="text-center py-12">
              <p className="text-gray-400">Tools section coming soon...</p>
            </div>
          )}

          {activeTab === "history" && (
            <div className="text-center py-12">
              <p className="text-gray-400">History section coming soon...</p>
            </div>
          )}

          {activeTab === "access-token" && (
            <div className="text-center py-12">
              <p className="text-gray-400">Access Token section coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
