const Food = require("../models/Food");

const getDashboard = async (req, res) => {
  try {

    const totalDonations = await Food.countDocuments({
      donor: req.user.id,
    });

    const availableFood = await Food.countDocuments({
      donor: req.user.id,
      status: "Available",
    });

    const requestedFood = await Food.countDocuments({
      donor: req.user.id,
      status: "Requested",
    });

    const pickedUpFood = await Food.countDocuments({
      donor: req.user.id,
      status: "Picked Up",
    });

    res.status(200).json({
      totalDonations,
      availableFood,
      requestedFood,
      pickedUpFood,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};