const express = require('express');
const queries = require('../queries/functional_db.js');
const router = express.Router();

router.get('/', (req, res) => {
  queries.allMessages((dbRes) => {
    res.status(200);
    res.render('home.hbs', {allMessages: dbRes});
  });
});
router.get('/update', (req, res) => {
  queries.allMessages((dbRes) => {
    res.status(200);
    res.render('partials/allMessages.hbs', {allMessages: dbRes});
  });
});
router.post('/new', (req, res) => {
  console.log('body', req.body);
  queries.storeMessage(req.body.username, req.body.context, res);
});

module.exports = router;
