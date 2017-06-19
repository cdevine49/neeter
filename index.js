const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const sessions = require('express-session');
const path = require('path');

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
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

controllers(app);

const port = process.env.PORT || 3000
app.listen(port);