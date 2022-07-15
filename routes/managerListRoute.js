const express = require('express');
//No need to require 'mongoose' bc 
const Manager = require('../models/Manager');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    let farmManagerDetails = await Manager.find();
    res.render('farmManagerList', {users:farmManagerDetails, title: 'Farm Manager Details'})
  }
  catch(err){
    console.log(err)
    res.send('failed to retrieve manager details')
  }
});

router.post('/delete', async (req,res) => {
  try{
    await Manager.deleteOne({_id:req.body.id})
    res.redirect('back')
  }
  catch(err){
    res.status(400).send('Unable to delete item in the database');
  }
})

module.exports = router;
