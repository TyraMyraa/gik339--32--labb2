var express = require('express');
var server = express();

server
 .use(express.json())
 .use(express.urlencoded({ extended: false }))
 .use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', '*');
 res.header('Access-Control-Allow-Methods', '*');
 next();
 });

//
server.listen(1000, () => {
    console.log('Server port 1000');
});

// Skapa route
server.get('/users', (req, res) => {
    //Tomt
});

