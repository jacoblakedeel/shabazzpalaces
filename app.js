const express = require('express');
const app = express();


//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/albums'))




//setting up router
app.listen(3000, () => {
    console.log("Listening on Port 3000");
})