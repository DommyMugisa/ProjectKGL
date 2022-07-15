const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const SalesAgSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});

// Export Model
SalesAgSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("SalesAg", SalesAgSchema);
