const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  producename: {
    type: String,
    required: true
  },
  producetype: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  duedelivery: {
    type: String,
    required: true
  },
  purchaseprice: {
    type: Number,
    required: true
  },
  status:{
    type: String
  },
  suppliername: {
    type: String,
    required: true
  },
  suppliercontact: {
    type: Number,
    required: true
  },
  farmlocate: {
    type: String,
    required: true
  },
  farmcontact: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
