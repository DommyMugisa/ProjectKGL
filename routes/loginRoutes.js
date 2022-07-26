const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

// const User = require("../models/User");

const authorization = require("./role");

router.get("/", (req, res) => {
  res.render("loginModal", { title: " Login" });
});

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user;
    const userrole = authorization[req.user.userrole];
    console.log("this is your role", req.user.userrole);
    if (userrole == "Director") {
      res.redirect("/director");
    } else if (userrole == "Manager") {
      res.redirect("/manager");
    } else if (userrole == "Sales") {
      res.redirect("/sales");
    } else res.render("nonuserform");
  }
);

// router.post('/', passport.authenticate('local'), (req,res) => {
//       res.send('this user login message')
//   });

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
