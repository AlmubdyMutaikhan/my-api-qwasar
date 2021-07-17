const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const DB = require('./helper_tools/db')
const init = require('./helper_tools/init')
const middleware = require('./middleware/auth.middle')
const passport = require('passport')
const PORT = process.env.PORT || 3000
//set up configs
dotenv.config()

// set up passport oAuth
require('./config/passport-setup')(passport)

// set up middlewares
app.use(cookieParser());
app.use(express.json())
app.use(session(init.initSessionParams()))
app.use(passport.initialize())
app.use(passport.session())

// import Routes
const authRoute = require('./routes/auth.route')
const jobRoute = require('./routes/jobs.route')
const oAuthRote = require('./routes/oAuth.rote')


// auth route
app.use('/api/user', authRoute)
app.use('/auth/', oAuthRote)
app.use('/api/jobs', middleware.authSession, middleware.userStatus, jobRoute)
// connection to the DB
DB.connectToTheDB()
    .then(ok => {
        app.listen(PORT, () => {console.log(`server is running on (port:${PORT})`)})
    })
    .catch(err => {
        console.log(err)
    })


/**
 * what i learnt 
 * set midllewares for all routes
 */
