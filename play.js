// const net = require("net");
const connect = require('./client');

console.log("Connecting ...");
connect().on('data',(data) => console.log( data)  )