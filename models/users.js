const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  passwordDigest: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;