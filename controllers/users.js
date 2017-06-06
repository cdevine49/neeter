const User = require('../models/users');
const bcrypt = require('bcryptjs');

const usersController = function(app) {
  app.post('/users', function(req, res) {
    var user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      passwordDigest: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    user.save(function(err) {
      var error;
      if (err) {
        if (err.code === 11000) {
          error = "Email already taken"
          res.send(error);
        } else {
          throw err;
        }
      } else {
        const {fullName, email} = user;
        req.session.user = {fullName, email};
        res.send(user);
      }
    })
  })
}

module.exports = usersController;