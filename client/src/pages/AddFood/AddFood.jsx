import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function AddFood() {
  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    quantity: "",
    category: "Veg",
    expiryDate: "",
    pickupAddress: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post("/food/add", formData);

      alert(res.data.message);

      setFormData({
        foodName: "",
        description: "",
        quantity: "",
        category: "Veg",
        expiryDate: "",
        pickupAddress: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Failed to add food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">

            <h1 className="text-3xl font-bold mb-8">
              Add Food Donation
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                value={formData.foodName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                rows="4"
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option>Veg</option>
                <option>Non-Veg</option>
                <option>Snacks</option>
                <option>Beverages</option>
                <option>Bakery</option>
                <option>Others</option>
              </select>

              <input
                type="datetime-local"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />

              <input
                type="text"
                name="pickupAddress"
                placeholder="Pickup Address"
                value={formData.pickupAddress}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
              >
                {loading ? "Adding..." : "Donate Food"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default AddFood;