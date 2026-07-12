import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function MyDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    loadMyDonations();
  }, []);

  const loadMyDonations = async () => {
    try {
      const response = await API.get("/food/my");
      setDonations(response.data.foods);
    } catch (error) {
      console.error(error);
      alert("Unable to load your donations");
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

          {donations.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow">
              You haven't donated any food yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donations.map((food) => (
                <div
                  key={food._id}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-bold text-green-600">
                    {food.foodName}
                  </h2>

                  <p className="mt-2">
                    <strong>Quantity:</strong> {food.quantity}
                  </p>

                  <p>
                    <strong>Location:</strong> {food.location}
                  </p>

                  <p>
                    <strong>Status:</strong> {food.status}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {new Date(food.createdAt).toLocaleString()}
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

export default MyDonations;