const mongoose = require("mongoose");

const foodRequestSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },

  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  ngo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  status: {
    type: String,
    enum: [
      "Pending",
      "Accepted",
      "Rejected",
      "Completed",
    ],
    default: "Pending",
  },

  requestDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FoodRequest", foodRequestSchema);