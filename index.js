const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');

const controllers = require('./controllers');

mongoose.connect('mongodb://localhost:27017/neeter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.send('Neeter');
});

controllers(app);

const port = process.env.PORT || 3000
app.listen(port);