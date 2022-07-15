const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("indexDirector", { title: "Director Dashboard" });
});
router.get("/creditors", (req, res) => {
  res.render("directorCreditors", { title: "Director Creditors" });
});
router.get("/purchases", (req, res) => {
  res.render("directorPurchases", { title: "Director Purchases" });
});
router.get("/sales", (req, res) => {
  res.render("directorSales", { title: "Director Sales" });
});
router.get("/suppliers", (req, res) => {
  res.render("directorSuppliers", { title: "Director Suppliers" });
});
router.get("/managerDash", (req, res) => {
  res.render("dirMangDash", { title: "Director - Manager Dash" });
});

module.exports = router;
