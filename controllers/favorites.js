var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', (req, res)=>{
  res.render('favorites');
})

router.get('/add', (req, res)=>{
  res.render('add');
})

router.post('/', (req, res)=>{
  // db.animal.findOrCreate({
  //   where: { name: req.body.name }
  // })
  res.send(`You did it, you posted the ${req.body.species_name}`);
})

module.exports = router;