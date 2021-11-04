const connect = require('./client');

const conn = connect();

console.log("Connecting ...");

conn.on('connect',(user) => {
  conn.write( 'Name: NAT')  
 
    // conn.write( 'Move: up')

 
});



conn.on('data',(data) => console.log( data)  );
