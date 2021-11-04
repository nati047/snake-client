const net = require("net");
const connect = function () {
  const conn = net.createConnection({ // establishes a connection with the game server
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding("utf8");   // interpret incoming data as text
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  return conn;
};

  module.exports = connect;
