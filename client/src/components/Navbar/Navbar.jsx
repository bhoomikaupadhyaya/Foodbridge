import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-green-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="text-2xl font-bold">
          🍽️ FoodBridge
        </div>

        <div className="flex items-center gap-6">

          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>

          {role === "donor" && (
            <>
              <Link to="/add-food" className="hover:text-gray-200">
                Add Food
              </Link>

              <Link to="/my-donations" className="hover:text-gray-200">
                My Donations
              </Link>
            </>
          )}

          {role === "ngo" && (
            <>
              <Link to="/food-list" className="hover:text-gray-200">
                Browse Food
              </Link>

              <Link to="/my-requests" className="hover:text-gray-200">
                My Requests
              </Link>
            </>
          )}

          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>

          <span className="font-semibold">
            {user?.fullName}
          </span>

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