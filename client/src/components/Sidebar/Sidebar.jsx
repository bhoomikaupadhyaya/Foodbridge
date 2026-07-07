import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-5">

      <h2 className="text-2xl font-bold text-green-600 mb-8">
        FoodBridge
      </h2>

      <ul className="space-y-4">

        <li>
          <Link
            to="/dashboard"
            className="block p-3 rounded hover:bg-green-100"
          >
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/add-food"
            className="block p-3 rounded hover:bg-green-100"
          >
            🍱 Add Food
          </Link>
        </li>

        <li>
          <Link
            to="/food-list"
            className="block p-3 rounded hover:bg-green-100"
          >
            📋 Food List
          </Link>
        </li>

        <li>
          <Link
            to="/my-donations"
            className="block p-3 rounded hover:bg-green-100"
          >
            ❤️ My Donations
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="block p-3 rounded hover:bg-green-100"
          >
            👤 Profile
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;