const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const sessions = require('express-session');
const path = require('path');
const fs = require('fs');

const controllers = require('./controllers');

mongoose.connect('mongodb://localhost:27017/neeter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname)));

app.use(sessions({
  secret: 'ajsldjf093ujrgj9824asdfjLFJjlsdfj32094SA',
  saveUninitialized: true,
  resave: false
}))

app.get('/', function(req, res, next) {
  let file = fs.readFileSync(path.join(__dirname+'/views/index.html'), 'utf-8')
  if (req.session.user) {
    file = file
    .replace('_id_', req.session.user._id)
    .replace('_email_', req.session.user.email)
    .replace('_fullName_', req.session.user.fullName)
  } else {
    file = file
    .replace('_id_', "")
    .replace('_email_', "")
    .replace('_fullName_', "")
  }
  res.send(file);
});

controllers(app);

const port = process.env.PORT || 3000
app.listen(port);