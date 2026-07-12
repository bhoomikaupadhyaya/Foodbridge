import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FoodCard from "../../components/FoodCard/FoodCard";
import API from "../../services/api";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await API.get("/food");
      setFoods(res.data.foods || []);
    } catch (err) {
      console.log(err);
    }
  };

  const requestFood = async (foodId) => {
    try {
      await API.post("/request", {
        foodId,
      });

      alert("Food request sent successfully.");

      fetchFoods();
    } catch (err) {
      alert(err.response?.data?.message || "Unable to send request.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-8">
            Available Food
          </h1>

          {foods.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow">
              No food donations available.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {foods.map((food) => (
                <FoodCard
                  key={food._id}
                  food={food}
                  role={role}
                  onRequest={requestFood}
                />
              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default FoodList;