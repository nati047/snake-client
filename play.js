const connect = require('./client');

const conn = connect();

console.log("Connecting ...");

conn.on('connect',(user) => {
  conn.write( 'Name: NAT')  
     // conn.write( 'Move: up')
});

conn.on('data',(data) => console.log( data)  );

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const input = setupInput();

const handleUserInput = function (keyStroke) {
  if (keyStroke === '\u0003' ){
    process.exit();
  }
};
input.on('data',handleUserInput);


// (data)=> {
//   if( data === '\u0003')
//     process.exit();
// }

// stdin.on("data", handleUserInput);


//'\u0003'