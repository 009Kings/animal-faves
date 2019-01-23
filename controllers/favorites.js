var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', (req, res)=>{
  db.animal.findAll()
  .then(allAnimals=>{
    res.render('favorites', { faves: allAnimals });
  }).catch(err=>{
    console.log(`Big ol error in posting to animals` .red);
    console.log(err);
    res.redirect('error')
  });
})

router.get('/add', (req, res)=>{
  res.render('add');
})

router.post('/', (req, res)=>{
  db.animal.findOrCreate({
    where: { species_name: req.body.species_name },
    defaults: req.body
  }).spread(animal=>{
    res.redirect('/favorites');
  }).catch(err=>{
    console.log(`Big ol error in posting to animals` .red);
    console.log(err);
    res.redirect('error')
  });
})

module.exports = router;