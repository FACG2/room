const express = require('express');
const queries = require('../queries/functional_db.js');
const router = express.Router();

router.get('/', (req, res) => {
  queries.allMessages((err, dbRes) => {
    if (err) {
      res.status(500);
      res.write('Server Error');
    } else {
      res.status(200);
      res.render('home.hbs', {allMessages: dbRes});
    }
  });
});
router.get('/update', (req, res) => {
  queries.allMessages((err, dbRes) => {
    // res.setHeader('Last-Modified', (new Date()).toUTCString());
    res.render('allMessages.hbs', {allMessages: dbRes, layout: false});
  });
});

router.post('/new', (req, res) => {
  res.status(302);
  queries.storeMessage(req.body.username, req.body.context, (err, rows) => {
    if (err) {
      res.status(500);
      res.write('Server Error');
    } else {
      console.log('aa', rows);
      res.redirect('/');
    }
  });
});

module.exports = router;
