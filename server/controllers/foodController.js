const Food = require("../models/Food");

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

module.exports = {
  addFood,
  getAllFood,
  getMyDonations,
};