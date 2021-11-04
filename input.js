// const { connect } = require("./client");
// let conn = connect();
const handleUserInput = function (keyStroke) {
  if (keyStroke === '\u0003') {
    process.exit();
  }
};
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  stdin.on('data', (keyStroke) => {
    if (keyStroke === 'w') {
      keyStroke = "Move: up"
      connection.write(keyStroke);
    }
    if (keyStroke === 'a') {
      keyStroke = "Move: left"
      connection.write(keyStroke);
    }
    if (keyStroke === 's') {
      keyStroke = "Move: down"
      connection.write(keyStroke);
    }
    if (keyStroke === 'd') {
      keyStroke = "Move: right"
      connection.write(keyStroke);
    }
    if (keyStroke === '1') {
      keyStroke = "Say: gotcha!"
      connection.write(keyStroke);
    }
    if (keyStroke === '2') {
      keyStroke = "Say: run for ur life!"
      connection.write(keyStroke);
    }

  })
  return stdin;
};

module.exports = { setupInput }

