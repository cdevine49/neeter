const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const sessions = require('express-session');

const controllers = require('./controllers');

mongoose.connect('mongodb://localhost:27017/neeter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
  secret: 'ajsldjf093ujrgj9824asdfjLFJjlsdfj32094SA',
  saveUninitialized: true,
  resave: false
}))

app.get('/', function(req, res, next) {
  if (req.session.user) {
    res.send('Neeter');
  } else {
    res.status(401).send("Requires Login");
  }
});

controllers(app);

const port = process.env.PORT || 3000
app.listen(port);