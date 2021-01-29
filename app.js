const express = require('express');
const app = express();
const socket = require('socket.io');

//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/api'));
app.use(require("./routes/chat"));




//setting up router
let server = app.listen(3000, () => {
    console.log("Listening on Port 3000");
})

//io.attach(server)
let io = socket(server);

io.on('connection', (socket)=>{

  //listening for messages from client
    socket.on('postMessage', (msg)=>{

    console.log(msg);
    //broadcast to all connected servers
    io.emit('updateMessages', msg)
    })
})