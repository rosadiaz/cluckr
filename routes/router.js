const express = require('express');
const router = express.Router();
const knex = require('../db/client');

router.get('/new_cluck', (req, res) => {
  res.render('new_cluck');
});

// Enter new cluck
router.post('/new_cluck', (req, res) => {
  username = req.cookies.username;
  knex('clucks')
    .insert({
      username: username,
      content: req.body.content,
      imageUrl: req.body.imageUrl
    })
    .returning('*')
    .then(clucks => {
      console.log(`💭 New Cluck: ${clucks}`)
      res.render('cluck', { cluck: clucks[0], username});
    });
});


module.exports = router;