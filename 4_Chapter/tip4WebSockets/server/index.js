const WebSocketServer = require('ws').Server;

const port = 3001;
const wss = new WebSocketServer({ port });


wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('recieved: %s', message);

    wss.clients.forEach(client => {
      if (client !== ws) {
        console.log('Client does not equal websockets');
        client.send(message);
      }
    });
  });
});

console.log(`Web Socket Server running on port: ${port}`);
