// const net = require("net");
const connect = require('./client');
const conn = connect();

console.log("Connecting ...");
conn.on('data',(data) => console.log( data)  )
conn.on('connect',(user) => conn.write( 'Name: NAT')  );