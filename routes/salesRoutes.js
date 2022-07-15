const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("indexSales", { title: "SalesAgent Dashboard" });
});
router.get("/creditors", (req, res) => {
  res.render("salesAgCreditors", { title: "SalesAgent Creditors" });
});
router.get("/sales", (req, res) => {
  res.render("salesAgSales", { title: "SalesAgent Sales" });
});
router.get("/suppliers", (req, res) => {
  res.render("salesAgSuppliers", { title: "SalesAgent Suppliers" });
});

module.exports = router;
