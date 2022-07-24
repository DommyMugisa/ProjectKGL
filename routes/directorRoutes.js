const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Inventory = require("../models/Inventory");
const Purchase = require("../models/Purchase");
const Supplier = require("../models/Supplier");
const Creditor = require("../models/Creditor");
const Creditsale = require("../models/Creditsale");
const Cashsale = require("../models/Cashsale");

router.get("/", (req, res) => {
  res.render("indexDirector", { title: "Director Dashboard" });
});
// router.get("/creditors", (req, res) => {
//   res.render("directorCreditors", { title: "Director Creditors" });
// });
// router.get("/purchases", (req, res) => {
//   res.render("directorPurchases", { title: "Director Purchases" });
// });
// router.get("/sales", (req, res) => {
//   res.render("directorSales", { title: "Director Sales" });
// });
// router.get("/suppliers", (req, res) => {
//   res.render("directorSuppliers", { title: "Director Suppliers" });
// });
// router.get("/managerDash", (req, res) => {
//   res.render("dirMangDash", { title: "Director - Manager Dash" });
// });


///////////////////////////////////////////////


router.get("/managerDash", async (req, res) => {
  try {
    const inventoryList = await Inventory.find({});
    res.status(200).render('dirMangDash', {
      inventories: inventoryList
    });
    console.log(inventoryList);
  } catch (error) {
    res.status(400).send("Failed to find Inventory");
    console.log(error);
  }
});

router.get("/purchases", async (req, res) => {
  try {
    const purchaseList = await Purchase.find({});
    res.status(200).render('directorPurchases', {
      purchases: purchaseList
    });
    console.log(purchaseList);
  } catch (error) {
    res.status(400).send("Failed to find Purchase");
    console.log(error);
  }
});

router.get("/sales", async (req, res) => {
    res.render("directorSales", { title: "Director Sales" });
  try {
    const creditsaleList = await Creditsale.find({});
    res.status(200).render({
      creditsales: creditsaleList
    });
    console.log(creditsaleList);

    const cashsaleList = await Cashsale.find({});
    res.status(200).render({
      cashsales: cashsaleList
    });
    console.log(cashsaleList);

  } catch (error) {
    res.status(400).send("Failed to find Sale");
    console.log(error);
  }
});

router.get("/suppliers", async (req, res) => {
  try {
    const supplierList = await Supplier.find({});
    res.status(200).render('directorSuppliers', {
      suppliers: supplierList
    });
    console.log(supplierList);
  } catch (error) {
    res.status(400).send("Failed to generate supplier list");
    console.log(error);
  }
});

router.get("/creditors", async (req, res) => {
  try {
    const creditorList = await Creditor.find({});
    res.status(200).render('directorCreditors', {
      creditors: creditorList
    });
    console.log(creditorList);
  } catch (error) {
    res.status(400).send("Failed to generate creditor list");
    console.log(error);
  }
});

/////////////////////////////////////////////////


router.post("/managerDash", async (req, res) => {
  try {
    const newInventory = new Inventory(req.body);
    await newInventory.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newInventory);
  } catch (error) {
    res.status(400).send("failed to register Inventory Item");
    console.log(error);
  }
});

router.post("/purchases", async (req, res) => {
  try {
    const newPurchase = new Purchase(req.body);
    await newPurchase.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newPurchase);
  } catch (error) {
    res.status(400).send("failed to register Purchase Order");
    console.log(error);
  }
});

router.post("/sales", async (req, res) => {
  try {
    const newCashSale = new Cashsale(req.body);
    await newCashSale.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newCashSale);

    const newCredSale = new Creditsale(req.body);
    await newCredSale.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newCredSale);

  } catch (error) {
    res.status(400).send("failed to register Sale");
    console.log(error);
  }
});

router.post("/suppliers", async (req, res) => {
  try {
    const newSupplier = new Supplier(req.body);
    await newSupplier.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newSupplier);
  } catch (error) {
    res.status(400).send("failed to register Supplier");
    console.log(error);
  }
});

router.post("/creditors", async (req, res) => {
  try {
    const newCreditor = new Creditor(req.body);
    await newCreditor.save();
    // res.json({ message: "new Inventory Item registered", newInventory });
    console.log(newCreditor);
  } catch (error) {
    res.status(400).send("failed to register Creditor");
    console.log(error);
  }
});


/////////////////////////////////////////////////////////////


router.post("/managerDash/delete", async (req, res) => {
  try {
    await Inventory.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Inventory Item"]);
    console.log(error);
  }
});

router.post("/purchases/delete", async (req, res) => {
  try {
    await Purchase.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Purchase Order"]);
    console.log(error);
  }
});

router.post("/sales/delete", async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Sale Entry"]);
    console.log(error);
  }
});

router.post("/suppliers/delete", async (req, res) => {
  try {
    await Supplier.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Supplier"]);
    console.log(error);
  }
});

router.post("/creditors/delete", async (req, res) => {
  try {
    await Creditor.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Creditor"]);
    console.log(error);
  }
});


/////////////////////////////////////////////////////////


router.post("/managerDash/edit", async (req, res) => {
  try {
    const options = { new: true };
    const updatedInventory = await Inventory.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          itemname: req.body.itemname,
          itemtype: req.body.itemtype,
          purchaseprice: req.body.purchaseprice,
          sellingprice: req.body.sellingprice,
          leadtime: req.body.leadtime,
          cycletime: req.body.cycletime,
          supplycategory: req.body.supplycategory,
          suppliername: req.body.suppliername,
        },
      },
      options
    );
    // res.json({ message: "Inventory member updated", updatedInventory });
    console.log(updatedInventory);
  } catch (error) {
    res.status(400).send("unrecognized Id");
    console.log(error);
  }
});

module.exports = router;
