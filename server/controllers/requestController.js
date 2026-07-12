const Food = require("../models/Food");
const FoodRequest = require("../models/FoodRequest");

// ======================================
// NGO Request Food
// ======================================
const requestFood = async (req, res) => {
  try {
    const foodId = req.params.foodId;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    if (food.status !== "Available") {
      return res.status(400).json({
        message: "Food is not available",
      });
    }

    const existingRequest = await FoodRequest.findOne({
      food: foodId,
      ngo: req.user.id,
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "You have already requested this food",
      });
    }

    const request = new FoodRequest({
      food: food._id,
      donor: food.donor,
      ngo: req.user.id,
      status: "Pending",
    });

    await request.save();

    res.status(201).json({
      message: "Food request sent successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ======================================
// Donor View Requests
// ======================================
const getRequests = async (req, res) => {
  try {
    const requests = await FoodRequest.find({
      donor: req.user.id,
    })
      .populate("food")
      .populate("ngo", "fullName email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: requests.length,
      requests,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ======================================
// NGO View My Requests
// ======================================
const getMyRequests = async (req, res) => {
  try {
    const requests = await FoodRequest.find({
      ngo: req.user.id,
    })
      .populate("food")
      .populate("donor", "fullName email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: requests.length,
      requests,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ======================================
// Accept Request
// ======================================
const acceptRequest = async (req, res) => {
  try {
    const request = await FoodRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    request.status = "Accepted";
    await request.save();

    const food = await Food.findById(request.food);

    if (food) {
      food.status = "Requested";
      await food.save();
    }

    res.status(200).json({
      message: "Food request accepted successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// ======================================
// Reject Request
// ======================================
const rejectRequest = async (req, res) => {
  try {
    const request = await FoodRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    request.status = "Rejected";
    await request.save();

    res.status(200).json({
      message: "Food request rejected successfully",
      request,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  requestFood,
  getRequests,
  getMyRequests,
  acceptRequest,
  rejectRequest,
};