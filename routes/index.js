var express = require('express');
var router = express.Router();
var mock_data = require("../MOCK_DATA.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({mock_data});
});

module.exports = router;
