const express = require('express');
const BlogRouter = express.Router();

const BlogPost = require('../models/Blog');

BlogRouter.route('/').post(function (req, res) {
  const entry = new BlogPost(req.body);
  entry.save()
    .then(entry => {
      res.json('Entry added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save blog entry to database");
    });
});

BlogRouter.route('/').get(function (req, res) {
  BlogPost.find()
    .then(entry => {
      res.json(entry);
    })
    .catch(err => {
      res.status(400).send("unable to fetch blog entries");
    });
});

BlogRouter.route('/:id').get(function (req, res) {
  BlogPost.findById(req.params.id)
    .then(entry => {
      res.json(entry);
    })
    .catch(err => {
      res.status(400).send("unable to fetch blog entry");
    });
});

BlogRouter.route('delete/:id').get(function (req, res) {
  BlogPost.findByIdAndRemove(req.params.id)
    .then(entry => {
      res.json(entry);
    })
    .catch(err => {
      res.status(400).send("unable to fetch blog entry");
    });
});

module.exports = BlogRouter;