const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const DB = require('./helper_tools/db')
const init = require('./helper_tools/init')
const middleware = require('./middleware/auth.middle')
const passport = require('passport')
const swagger = require('swagger-ui-express')
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '80')
const apidoc = require('./api-documentation-swagger')
const cors = require('cors')
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
app.use(cors({origin : '*',
methods : ['GET','PUT','POST','DELETE']})) // allow everyone to use rsrcs
app.use('/api-doc',swagger.serve, swagger.setup(apidoc)) // used for swagger api documentation

// import Routes
const authRoute = require('./routes/auth.route')
const jobRoute = require('./routes/jobs.route')
const oAuthRote = require('./routes/oAuth.rote')

// root 
app.get('/', (req, res) => {
    res.json({"success" : "true", "desc" : "restful api with edu purposes", "link to doc" : "<current_domain>/api-doc" })
})

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
