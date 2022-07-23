const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true
  },
  itemtype: {
    type: String,
    required: true
  },
  purchaseprice: {
    type: Number,
    required: true
  },
  sellingprice: {
    type: Number,
    required: true
  },
  leadtime: {
    type: String,
  },
  cycletime: {
    type: String,
  },
  supplycategory: {
    type: String,
    required: true
  },
  suppliername: {
    type: String,
  },
});

module.exports = mongoose.model("Inventory", InventorySchema);
