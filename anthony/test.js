var Bleacon = require('bleacon');

Bleacon.startScanning();
    Bleacon.on('discover', function(bleacon) {
        console.log("Hello" + bleacon.proximity);
        console.log("Hello" + bleacon.accuracy);
                    });

