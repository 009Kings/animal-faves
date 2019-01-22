var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  res.render('favorites');
})

router.get('/add', (req, res)=>{
  res.render('add');
})

router.post('/', (req, res)=>{
  res.send('You did it, you posted the thing');
})

module.exports = router;