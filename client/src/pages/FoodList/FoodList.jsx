import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await API.get("/food");
      setFoods(response.data.foods);
    } catch (error) {
      console.error(error);
      alert("Unable to load food donations");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-8">
            Available Food Donations
          </h1>

          {foods.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow">
              No food donations available.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {foods.map((food) => (

                <div
                  key={food._id}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-bold text-green-600">
                    {food.foodName}
                  </h2>

                  <p className="mt-3">
                    <strong>Quantity:</strong> {food.quantity}
                  </p>

                  <p>
                    <strong>Location:</strong> {food.location}
                  </p>

                  <p>
                    <strong>Expiry:</strong>{" "}
                    {new Date(food.expiry).toLocaleString()}
                  </p>

                  <p className="mt-3 text-sm text-gray-500">
                    Status: {food.status}
                  </p>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default FoodList;