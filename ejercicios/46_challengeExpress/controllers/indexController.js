const self = {}

self.redirect = function(req, res, next) {
  res.redirect('/user/form');
}

module.exports = self;