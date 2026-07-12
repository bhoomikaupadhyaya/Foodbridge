import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";
import API from "../../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalDonations: 0,
    availableFood: 0,
    pendingRequests: 0,
    completedDonations: 0,
  });

  const role = localStorage.getItem("role");

  const loadDashboard = async () => {
    try {
      const res = await API.get("/dashboard");

      setStats({
        totalDonations: res.data.totalDonations || 0,
        availableFood: res.data.availableFood || 0,
        pendingRequests: res.data.pendingRequests || 0,
        completedDonations: res.data.completedDonations || 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-8">
            {role === "donor"
              ? "Restaurant Dashboard"
              : "NGO Dashboard"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Donations"
              value={stats.totalDonations}
              color="text-green-600"
              icon="🍱"
            />

            <StatsCard
              title="Available Food"
              value={stats.availableFood}
              color="text-blue-600"
              icon="📦"
            />

            <StatsCard
              title="Pending Requests"
              value={stats.pendingRequests}
              color="text-orange-500"
              icon="🚚"
            />

            <StatsCard
              title="Completed"
              value={stats.completedDonations}
              color="text-purple-600"
              icon="❤️"
            />
          </div>

          <div className="bg-white rounded-xl shadow mt-10 p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to FoodBridge
            </h2>

            <p className="text-gray-600 leading-7">
              {role === "donor"
                ? "Manage your food donations, track requests from NGOs, and help reduce food waste."
                : "Browse available food donations, send collection requests, and manage your requests."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;