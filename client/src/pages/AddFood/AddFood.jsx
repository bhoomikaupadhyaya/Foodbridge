import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function AddFood() {
  const [food, setFood] = useState({
    foodName: "",
    quantity: "",
    location: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/food", food);

      alert(response.data.message);

      setFood({
        foodName: "",
        quantity: "",
        location: "",
        expiry: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Failed to add food");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-8">
            Add Food Donation
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg max-w-xl"
          >

            <input
              type="text"
              name="foodName"
              placeholder="Food Name"
              value={food.foodName}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={food.quantity}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Pickup Location"
              value={food.location}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="datetime-local"
              name="expiry"
              value={food.expiry}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-6"
              required
            />

            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Donate Food
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default AddFood;