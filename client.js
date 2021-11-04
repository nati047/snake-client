const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({ // establishes a connection with the game server
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");   // interpret incoming data as text

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })

  return conn;
};

module.exports = { connect }
