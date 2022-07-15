const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
  },
  status: {
    type: String,
  },
});

// Export Model

module.exports = mongoose.model("Product", ProductSchema);
