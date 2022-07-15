const express = require("express");

const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("productSale");
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect("productList/lists");
    console.log(req.body);
  } catch (err) {
    res
      .status(400)
      .render("productSale");
  }
});

//delete from the database via a form input submit delete button
router.get('/lists', async (req, res) => {
  try{
    let product = await Product.find();
    res.render('productList', {products:product, title:'Product List'})
  }
  catch(err){
    console.log(err)
    res.send('failed to retrieve product list')
  }
});

//edit in the database
router.get('/edit/:id', (req, res)=>{
    Product.findById(req.params.id, (err, product)=>{
      res.render('edit_products', {
        title: '',
        product: product
      });
    });
  });

  // update submit new product 
router.post('/products/edit/:id', (req, res)=>{
    let product = {};
    product.name = req.body.name;
    product.type = req.body.type;
    product.price = req.body.price;
    
  
    let query = {_id: req.params.id};
  
    Product.update(query, product, (err)=>{
      if(err) {
        console.error(err);
        return;
      } else {
        req.flash('success', 'Product Updated');
        res.redirect('');
      }
    })
  });
  
router.get('/editproduct', (req, res) => {
      res.render('edit_products')
    })

module.exports = router;
