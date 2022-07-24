const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  business: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  businesstelephone: {
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  businessemail:{
    type: String
  },
  physicaladdress: {
    type: String,
    required: true
  },
  physicaladdress2: {
    type: String,
    required: true
  },
  nin: {
    type: String,
    required: true
  },
  tin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Supplier", SupplierSchema);
