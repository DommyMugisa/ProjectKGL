const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");
const Creditor = require("../models/Creditor");

// router.get("/", (req, res) => {
//   res.render("indexSales", { title: "SalesAgent Dashboard" });
// });
// router.get("/creditors", (req, res) => {
//   res.render("salesAgCreditors", { title: "SalesAgent Creditors" });
// });
router.get("/sales", (req, res) => {
  res.render("salesAgSales", { title: "SalesAgent Sales" });
});
// router.get("/suppliers", (req, res) => {
//   res.render("salesAgSuppliers", { title: "SalesAgent Suppliers" });
// });


////////////////////////////////////////////////////


router.get("/", async (req, res) => {
  try {
    const inventoryList = await Inventory.find({});
    res.status(200).render('indexSales', {
      inventories: inventoryList
    });
    console.log(inventoryList);
  } catch (error) {
    res.status(400).send("Failed to find Inventory");
    console.log(error);
  }
});

router.get("/suppliers", async (req, res) => {
  try {
    const supplierList = await Supplier.find({});
    res.status(200).render('salesAgSuppliers', {
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
    res.status(200).render('salesAgCreditors', {
      creditors: creditorList
    });
    console.log(creditorList);
  } catch (error) {
    res.status(400).send("Failed to generate creditor list");
    console.log(error);
  }
});

///////////////////////////////////////////////////////


router.post("/", async (req, res) => {
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



//////////////////////////////////////////////////////


router.post("/delete", async (req, res) => {
  try {
    await Inventory.deleteOne({ _id: req.body.id });
    // res.json({ message: "Inventory Item successfully deleted" });
    console.log(req.body.id);
  } catch (error) {
    res.status(400).send(["unable to delete Inventory Item"]);
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


///////////////////////////////////////////////////////


router.post("/edit", async (req, res) => {
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
