import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import AddFood from "./pages/AddFood/AddFood";
import FoodList from "./pages/FoodList/FoodList";
import MyDonations from "./pages/MyDonations/MyDonations";
import MyRequests from "./pages/MyRequests/MyRequests";
import RestaurantRequests from "./pages/RestaurantRequests/RestaurantRequests";
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

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Donor Routes */}
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

      <Route
        path="/restaurant-requests"
        element={
          <ProtectedRoute allowedRole="donor">
            <RestaurantRequests />
          </ProtectedRoute>
        }
      />

      {/* NGO Routes */}
      <Route
        path="/food-list"
        element={
          <ProtectedRoute allowedRole="ngo">
            <FoodList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <ProtectedRoute allowedRole="ngo">
            <MyRequests />
          </ProtectedRoute>
        }
      />

      {/* Common Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;