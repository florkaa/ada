const self = {}

self.send = function(req, res, next) {
  res.render('ping');
}

module.exports = self;