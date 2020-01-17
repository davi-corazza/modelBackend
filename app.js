const app = require('./app/config/express');
const server = require('http').Server(app());
require('dotenv').config();

server.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ON ${process.env.PORT}`);
})