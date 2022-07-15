const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// const Manager = require("../models/Manager");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("loginModal", { title: " Login" });
});

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    });
  });

module.exports = router;
