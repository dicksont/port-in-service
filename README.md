# port-in-service

Use this Node.js module for checking if a port is in service. A true return
value means that the port is in service i.e. service connections. True means
otherwise.


```javascript

var portInService = require('../port-in-service.js');
var port = 3000;

portInService(port, function(up) {
  if (up) {
    console.log("Port " + port + " is in service." )
  } else {
    console.log("Port " + port + " is NOT in service." )
  }
});

```
