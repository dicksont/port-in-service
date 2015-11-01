var assert = require('assert');
var net = require('net');
var portInService = require('../index.js');
var port = 3000;

describe('portInService', function() {
  var server;

  before(function() {
      server = net.createServer();
  })

  it('should return true when server is up', function(done) {
    server.listen(port, function() {
      portInService(port, function(up) {
        assert.ok(up, 'function call returns true to callback');
        done();
      });
    });
  })

  it('should return false when server is down', function(done) {
    server.close(function() {
      portInService(port, function(up) {
        assert.ok(!up, 'function call returns false to callback');
        done();
      });
    });
  })
})
