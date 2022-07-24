const mongoose = require("mongoose");

const CreditsaleSchema = new mongoose.Schema({
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
  duedate:{
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
  location: {
    type: String,
    required: true
  },
  nin: {
    type: String,
    required: true
  },
  saleagent: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Creditsale", CreditsaleSchema);
