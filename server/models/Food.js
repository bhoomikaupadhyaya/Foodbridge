const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    enum: [
      "Veg",
      "Non-Veg",
      "Snacks",
      "Beverages",
      "Bakery",
      "Others",
    ],
    required: true,
  },

  expiryDate: {
    type: Date,
    required: true,
  },

  pickupAddress: {
    type: String,
    required: true,
  },

  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  status: {
    type: String,
    enum: ["Available", "Requested", "Picked Up"],
    default: "Available",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Food", foodSchema);