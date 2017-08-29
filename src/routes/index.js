const express = require('express');
const {storeMessage} = require('../functional_db.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.post('/new', (req, res) => {
  console.log('body', req.body);
  storeMessage(req.body.username, req.body.context, res);
});

module.exports = router;
