const User = require('../models/users');

const usersController = function(app) {
  app.post('/users', function(req, res) {
    var user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
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
        res.send(user);
      }
    })
  })
}

module.exports = usersController;