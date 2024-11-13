const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = 3000;

// MongoDB connection string
const connection = 'mongodb+srv://darceymckelvey:Anim8ors123!!!@tutorial-db.kk9kn.mongodb.net/?retryWrites=true&w=majority&appName=tutorial-db';

// Session store configuration
const sessionStore = MongoStore.create({
    mongoUrl: connection
});

// Session options with cookie settings
const sessionOptions = {
    secret: 'some secret stuff dawg',  
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 20000, // 20 seconds
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax'
    }
};

app.use(session(sessionOptions));

// Route to check the cookie
app.get('/', (req, res) => {
    console.log('Session:', req.session);
    res.send('<h1>Hello, world!</h1>');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}); 