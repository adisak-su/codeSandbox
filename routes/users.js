var express = require('express');
var router = express.Router();
const fs = require('fs');

var myUser = JSON.parse(fs.readFileSync("./test.json","utf-8"));
console.log(myUser);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(myUser);
  res.send('respond with a resource ' + myUser.name);
});

module.exports = router;
