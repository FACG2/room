const express = require('express');
const queries = require('../queries/functional_db.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  queries.allMessages((err, dbRes) => {
    if (err) {
      next(err);
    } else {
      res.status(200);
      res.render('home.hbs', {allMessages: dbRes});
    }
  });
});
router.get('/update', (req, res, next) => {
  queries.allMessages((err, dbRes) => {
    if (err) {
      next(err);
    } else {
      res.render('partials/allMessages.hbs', {allMessages: dbRes, layout: false});
    }
  });
});

router.post('/new', (req, res, next) => {
  queries.storeMessage(req.body.username, req.body.context, (err, rows) => {
    if (err) {
      next(err);
    } else {
      res.status(302);
      res.redirect('/');
    }
  });
});

module.exports = router;
