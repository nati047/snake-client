const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);



// const connect = require('./client');

// const conn = connect();

// console.log("Connecting ...");

conn.on('connect',(user) => {
  conn.write( 'Name: NAT')  
     
});

// conn.on('data',(data) => console.log( data)  );







