const express = require("express");
const router = express.Router();

const {
  addFood,
  getAllFood,
  getMyDonations,
} = require("../controllers/foodController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Food
router.post("/add", authMiddleware, addFood);

// Get All Food
router.get("/", authMiddleware, getAllFood);

// Get My Donations
router.get("/my", authMiddleware, getMyDonations);

module.exports = router;