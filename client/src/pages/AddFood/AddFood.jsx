import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function AddFood() {
  const [food, setFood] = useState({
    foodName: "",
    description: "",
    quantity: "",
    category: "",
    expiryDate: "",
    pickupAddress: "",
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
      const response = await API.post("/food/add", food);

      alert(response.data.message);

      setFood({
        foodName: "",
        description: "",
        quantity: "",
        category: "",
        expiryDate: "",
        pickupAddress: "",
      });

    } catch (error) {
      console.log(error.response?.data);
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
            className="bg-white p-8 rounded-xl shadow-lg max-w-xl space-y-4"
          >
            <input
              type="text"
              name="foodName"
              placeholder="Food Name"
              value={food.foodName}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={food.description}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={food.quantity}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category (Veg, Non-Veg, Snacks...)"
              value={food.category}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="datetime-local"
              name="expiryDate"
              value={food.expiryDate}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="pickupAddress"
              placeholder="Pickup Address"
              value={food.pickupAddress}
              onChange={handleChange}
              className="w-full border p-3 rounded"
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