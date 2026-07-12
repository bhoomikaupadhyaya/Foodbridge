import { Link } from "react-router-dom";

function FoodCard({ food, role, onRequest }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold text-green-600">
            {food.foodName}
          </h2>

          <p className="text-gray-500 mt-1">
            {food.category}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            food.status === "Available"
              ? "bg-green-100 text-green-700"
              : food.status === "Requested"
              ? "bg-yellow-100 text-yellow-700"
              : food.status === "Completed"
              ? "bg-purple-100 text-purple-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {food.status}
        </span>

      </div>

      <div className="mt-5 space-y-2">

        <p>
          <strong>Description:</strong> {food.description}
        </p>

        <p>
          <strong>Quantity:</strong> {food.quantity}
        </p>

        <p>
          <strong>Pickup:</strong> {food.pickupAddress}
        </p>

        <p>
          <strong>Expiry:</strong>{" "}
          {new Date(food.expiryDate).toLocaleString()}
        </p>

      </div>

      <div className="mt-6">

        {role === "ngo" && food.status === "Available" && (
          <button
            onClick={() => onRequest(food._id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
          >
            Request Food
          </button>
        )}

        {role === "donor" && (
          <Link
            to={`/edit-food/${food._id}`}
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Edit Donation
          </Link>
        )}

      </div>

    </div>
  );
}

export default FoodCard;