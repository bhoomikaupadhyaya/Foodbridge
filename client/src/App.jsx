import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import AddFood from "./pages/AddFood/AddFood";
import FoodList from "./pages/FoodList/FoodList";
import MyDonations from "./pages/MyDonations/MyDonations";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Common */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Donor Only */}
      <Route
        path="/add-food"
        element={
          <ProtectedRoute allowedRole="donor">
            <AddFood />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-donations"
        element={
          <ProtectedRoute allowedRole="donor">
            <MyDonations />
          </ProtectedRoute>
        }
      />

      {/* NGO */}
      <Route
        path="/food-list"
        element={
          <ProtectedRoute>
            <FoodList />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
