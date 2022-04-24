// body-parser , express, mongoose
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');
const users = require('./routes/api/users');

// initialize express
const app = express();

// applying middleware functions 
// on body-parser
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// pull mongoURI from keys.js
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
            .then(() => console.log("Connected Successfully"))
            .catch(err => console.log(err));
        
// passport middleware
app.use(passport.initialize());

// passport configuration
require('./config/passport')(passport);

app.use("/api/users", users);


// set a port to run the server

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server is running on port : ${port}`));