const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const DB = require('./helper_tools/db')

//set up configs
dotenv.config()

// import Routes
const authRoute = require('./routes/auth.route')

// set up middlewares
app.use(cookieParser());
app.use(express.json())
app.use(session({
    secret : process.env.SESSION_SECRET_SIGN_KEY,
    resave : false,
    saveUninitialized : true,
    store : DB.store
}))

// auth route
app.use('/api/user', authRoute)

// connection to the DB
DB.connectToTheDB()
    .then(ok => {
        app.listen(3000, () => {console.log("server is on (port:3000)")})
    })
    .catch(err => {
        console.log(err)
    })

