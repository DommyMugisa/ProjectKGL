const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const DirectorSchema = new mongoose.Schema({
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
DirectorSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Director", DirectorSchema);
