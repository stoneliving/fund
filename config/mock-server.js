const mockServer = require('mockserver-node');
const client = require('mockserver-client').mockServerClient;

mockServer.start_mockserver({
  serverPort: 8080,
  trace:true
});

client("localhost", 8080).mockAnyResponse({
  "httpRequest": {
    "method": "POST",
    "path": "/login",
    "body": "{username: 'foo', password: 'bar'}"
  },
  "httpResponse": {
    "statusCode": 200,
    "headers": {
      "Location": ["https://www.mock-server.com"]
    },
    "cookies": {
      "sessionId": "2By8LOhBmaW5nZXJwcmludCIlMDAzMW"
    }
  }
});