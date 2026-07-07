import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          🍽️ FoodBridge
        </h1>

        <div className="flex gap-6 items-center">

          <Link
            to="/dashboard"
            className="hover:text-gray-200"
          >
            Dashboard
          </Link>

          <Link
            to="/food-list"
            className="hover:text-gray-200"
          >
            Food
          </Link>

          <Link
            to="/my-donations"
            className="hover:text-gray-200"
          >
            Donations
          </Link>

          <Link
            to="/profile"
            className="hover:text-gray-200"
          >
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;