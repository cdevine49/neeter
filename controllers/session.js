const User = require('../models/users');
const bcrypt = require('bcryptjs');

const sessionController = function(app) {
  app.post('/session', function(req, res) {
    User.findOne({ email: req.body.email}, function(err, user) {
      if (user && bcrypt.compareSync(req.body.password, user.passwordDigest)) {
        const {fullName, email} = user;
        req.session.user = {fullName, email};
        res.send("Pretend logged in");
      } else {
        res.send("Invalid email or password");
      }
    })
  });

  app.delete('/session', function(req, res) {
    req.session.destroy(function(err) {
      if (err) throw err;
      res.send(200);
    });

  })
}

module.exports = sessionController;