const express = require("express");
const router = express.Router();

const {
  addFood,
  getAllFood,
  getMyDonations,
  updateFood,
} = require("../controllers/foodController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Food Donation
router.post("/add", authMiddleware, addFood);

// Get All Food Donations
router.get("/", authMiddleware, getAllFood);

// Get Logged-in User Donations
router.get("/my", authMiddleware, getMyDonations);

// Update Food Donation
router.put("/:id", authMiddleware, updateFood);

module.exports = router;