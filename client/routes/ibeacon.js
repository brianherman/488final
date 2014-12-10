var express = require('express');
var Bleacon = require('bleacon');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

Bleacon.startScanning();
	Bleacon.on('discover', function(bleacon) {
	    res.send({"ibeacon":"You Win!"});  
	});
    res.send({"ibeacon":"Invalid Beacon are you trying to cheat?"});
});

module.exports = router;