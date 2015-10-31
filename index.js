var net = require('net');

function portInService(port, cb) {
  var connected = false;

  var client = net.connect(port, function() {
    connected = true;
    client.end();
  });

  client.on('timeout', function() {
    client.end();
  });

  client.on('error', function(err) {
  });

  client.on('close', function() {
    cb(connected);
  });
}

module.exports = portInService;
