const express = require('express');
const router = express.Router();
const knex = require('../db/client');
const moment = require('moment')

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
    .orderBy('createdAt', 'desc')
    .then(clucks => {
      res.render('index', { clucks, username, moment});
    });
});

// List all cucks in an index from newest to oldest
router.get(['/clucks', '/'], (req, res) => {
  username = req.cookies.username
  knex('clucks')
    .orderBy('createdAt', 'desc')
    .then(clucks => {
      res.render('index', { clucks , username, moment});
    });;
});


module.exports = router;