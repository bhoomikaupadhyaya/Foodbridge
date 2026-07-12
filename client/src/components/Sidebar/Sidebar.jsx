import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg">

      <div className="p-6">

        <h2 className="text-2xl font-bold text-green-600 mb-8">
          FoodBridge
        </h2>

        <nav className="space-y-3">

          <Link
            to="/dashboard"
            className="block p-3 rounded-lg hover:bg-green-100"
          >
            🏠 Dashboard
          </Link>

          {role === "donor" && (
            <>
              <Link
                to="/add-food"
                className="block p-3 rounded-lg hover:bg-green-100"
              >
                🍱 Add Food
              </Link>

              <Link
                to="/my-donations"
                className="block p-3 rounded-lg hover:bg-green-100"
              >
                ❤️ My Donations
              </Link>
            </>
          )}

          {role === "ngo" && (
            <>
              <Link
                to="/food-list"
                className="block p-3 rounded-lg hover:bg-green-100"
              >
                📋 Browse Food
              </Link>

              <Link
                to="/my-requests"
                className="block p-3 rounded-lg hover:bg-green-100"
              >
                📦 My Requests
              </Link>
            </>
          )}

          <Link
            to="/profile"
            className="block p-3 rounded-lg hover:bg-green-100"
          >
            👤 Profile
          </Link>

        </nav>

      </div>

    </aside>
  );
}

export default Sidebar;