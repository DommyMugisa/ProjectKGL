const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userrole: {
    type: String,
    required: true
  },
});

// Export Model
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("User", UserSchema);
