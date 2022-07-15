const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("indexManager", { title: "Manager Dashboard" });
});
router.get("/creditors", (req, res) => {
  res.render("managerCreditors", { title: "Manager Creditors" });
});
router.get("/purchases", (req, res) => {
  res.render("managerPurchases", { title: "Manager Purchases" });
});
router.get("/sales", (req, res) => {
  res.render("managerSales", { title: "Manager Sales" });
});
router.get("/suppliers", (req, res) => {
  res.render("managerSuppliers", { title: "Manager Suppliers" });
});

module.exports = router;
