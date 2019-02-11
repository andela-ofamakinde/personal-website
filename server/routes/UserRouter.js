const express = require('express');
const UserRouter = express.Router();

const User = require('../models/User');

UserRouter.route('/add').post(function (req, res) {
  console.log(req.body, "req.body");
  
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json('User added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save user to database");
    });
});

module.exports = UserRouter;