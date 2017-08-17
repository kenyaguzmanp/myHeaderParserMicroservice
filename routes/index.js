var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var language = req.acceptsLanguages();
  var software = 'OS: ' + req.useragent.os + ', Browser: ' + req.useragent.browser;
  var ip = req.ip;

  res.json({'ipadress': ip, 'language': language[0], 'software': software});
});

module.exports = router;
