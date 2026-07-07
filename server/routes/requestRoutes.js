const express = require("express");
const router = express.Router();

const {
  requestFood,
  getRequests,
  acceptRequest,
  rejectRequest,
} = require("../controllers/requestController");

const authMiddleware = require("../middleware/authMiddleware");

// NGO requests food
router.post("/:foodId", authMiddleware, requestFood);

// Donor views requests
router.get("/", authMiddleware, getRequests);

// Donor accepts request
router.patch("/:id/accept", authMiddleware, acceptRequest);

// Donor rejects request
router.patch("/:id/reject", authMiddleware, rejectRequest);

module.exports = router;