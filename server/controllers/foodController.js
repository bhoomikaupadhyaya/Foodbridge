const Food = require("../models/temfood");

// ===============================
// Add Food Donation
// ===============================
const addFood = async (req, res) => {
  try {
    const {
      foodName,
      description,
      quantity,
      category,
      expiryDate,
      pickupAddress,
    } = req.body;

    const newFood = new Food({
      foodName,
      description,
      quantity,
      category,
      expiryDate,
      pickupAddress,
      donor: req.user.id,
    });

    await newFood.save();

    res.status(201).json({
      message: "Food donation added successfully",
      food: newFood,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============================
// Get All Food Donations
// ===============================
const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find()
      .populate("donor", "fullName email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: foods.length,
      foods,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============================
// Get My Donations
// ===============================
const getMyDonations = async (req, res) => {
  try {
    const foods = await Food.find({
      donor: req.user.id,
    });

    res.status(200).json({
      count: foods.length,
      foods,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
// ===============================
// Update Food Donation
// ===============================
const updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    // Only donor can update
    if (food.donor.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to update this food donation",
      });
    }

    const {
      foodName,
      description,
      quantity,
      category,
      expiryDate,
      pickupAddress,
    } = req.body;

    food.foodName = foodName || food.foodName;
    food.description = description || food.description;
    food.quantity = quantity || food.quantity;
    food.category = category || food.category;
    food.expiryDate = expiryDate || food.expiryDate;
    food.pickupAddress = pickupAddress || food.pickupAddress;

    await food.save();

    res.status(200).json({
      message: "Food donation updated successfully",
      food,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============================
// Delete Food Donation
// ===============================
const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    // Only donor can delete
    if (food.donor.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to delete this donation",
      });
    }

    await Food.findByIdAndDelete(foodId);

    res.status(200).json({
      message: "Food donation deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  addFood,
  getAllFood,
  getMyDonations,
  updateFood,
  deleteFood,
};