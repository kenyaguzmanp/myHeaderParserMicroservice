var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //console.log(req.headers);
  /*
  var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
     */
  var language = req.acceptsLanguages();
  var software = 'OS: ' + req.useragent.os + ', Browser: ' + req.useragent.browser;
  var ip = req.ip;

  //res.json({'ipadress': ip, 'language': language, 'software': software});

  
  console.log("ip: " + ip);
  console.log("language: " + language[0]);
  console.log("user agent: " + software);
});

module.exports = router;
