module.exports = function(app) {
  require('./users')(app);
  require('./session')(app);
}