const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

// const User = require("../models/User");

const authorization = require('./role');

router.get("/", (req, res) => {
  res.render("loginModal", { title: " Login" });
});

router.post("/", passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user;
    const userrole = authorization[req.user.authorization];
    console.log(req.user.authorization);
    if(userrole == "director"){
      res.redirect('/director')
    } else if(userrole == "manager"){
      res.redirect('/manager')
    } else if(userrole == "sales"){
      res.redirect('/sales')
    } else res.render("nonuserform");
  }
);

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    });
  });

module.exports = router;
