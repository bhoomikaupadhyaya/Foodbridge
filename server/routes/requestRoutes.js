const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  requestFood,
  getRequests,
  getMyRequests,
  acceptRequest,
  rejectRequest,
} = require("../controllers/requestController");

// NGO requests food
router.post("/:foodId", authMiddleware, requestFood);

// Donor views all requests received
router.get("/", authMiddleware, getRequests);

// NGO views its own requests
router.get("/my", authMiddleware, getMyRequests);

// Donor accepts request
router.patch("/:id/accept", authMiddleware, acceptRequest);

// Donor rejects request
router.patch("/:id/reject", authMiddleware, rejectRequest);

module.exports = router;