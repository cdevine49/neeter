const express = require('express');
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/neeter')

const port = process.env.PORT || 3000
app.listen(port);