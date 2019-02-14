const express = require('express');
const BlogRouter = express.Router();

const BlogPost = require('../models/Blog');

BlogRouter.route('/add').post(function (req, res) {
  const entry = new BlogPost(req.body);
  entry.save()
    .then(entry => {
      res.json('Entry added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save blog entry to database");
    });
});

module.exports = BlogRouter;