import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FoodCard from "../../components/FoodCard/FoodCard";
import API from "../../services/api";

function MyDonations() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    loadMyDonations();
  }, []);

  const loadMyDonations = async () => {
    try {
      const res = await API.get("/food/my");

      setFoods(res.data.foods || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-8">
            My Donations
          </h1>

          {foods.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow">
              You haven't donated any food yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {foods.map((food) => (
                <FoodCard
                  key={food._id}
                  food={food}
                  role="donor"
                />
              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default MyDonations;