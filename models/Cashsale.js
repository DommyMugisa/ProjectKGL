const mongoose = require("mongoose");

const CashsaleSchema = new mongoose.Schema({
  producename: {
    type: String,
    required: true
  },
  producetype: {
    type: String,
    required: true
  },
  salequantity: {
    type: Number,
    required: true
  },
  sellingprice: {
    type: Number,
    required: true
  },
  dateofsale:{
    type: String,
    required: true
  },
  salecategory: {
    type: String,
    required: true
  },
  buyername: {
    type: String,
    required: true
  },
  buyercontact: {
    type: Number,
    required: true
  },
  saleagent: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Cashsale", CashsaleSchema);
