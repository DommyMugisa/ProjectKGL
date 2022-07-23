const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  res.render('registerModal', {title: 'Register'});
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  await User.register(user, req.body.password, (err) => {
    console.log(user)
    if (err) {
      res.status(400).render('registerModal', {
        title: 'Register User',
      });
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

module.exports = router;
