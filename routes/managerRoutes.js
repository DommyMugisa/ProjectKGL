const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Inventory = require("../models/Inventory");

// router.get("/", (req, res) => {
//   res.render("indexManager", { title: "Manager Dashboard" });
// });
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

//Copied from VueJs ManagerRoutes - This should all belong to the InventoryRoutes.js

router.get("/", async (req, res) => {
  try {
    const inventoryList = await Inventory.find({});
    res.status(200).render('indexManager', {
      inventories: inventoryList
    });
    console.log(inventoryList);
  } catch (error) {
    res.status(400).send("Failed to find Inventory");
    console.log(error);
  }
});

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
