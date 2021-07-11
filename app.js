const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const DB = require('./helper_tools/db')
const MongoDBStore = require("connect-mongodb-session")(session);
//set up configs
dotenv.config()

// import Routes
const authRoute = require('./routes/auth.route')

// connection to the DB
DB.connectToTheDB()
    .then(ok => {
        app.listen(3000, () => {console.log("server is on (port:3000)")})
    })
    .catch(err => {
        console.log(err)
    })





const store = new MongoDBStore({
    uri: process.env.DB_CONNECTION,
    collection: "sessions",
  });
  
// set up middlewares
app.use(cookieParser());
app.use(express.json())
app.use(session({
    secret : process.env.SESSION_SECRET_SIGN_KEY,
    resave : false,
    saveUninitialized : true,
    store : store
}))

// auth route
app.use('/api/user', authRoute)


app.get('/secret/greet', (req, res)=> { 
    if(req.session.auth) {
        res.send("Hello, user with id: ", req.session._id)
    }
})

