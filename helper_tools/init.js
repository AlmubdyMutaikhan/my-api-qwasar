const User = require('../model/User.model')
const password = require('../helper_tools/password')
const session = require('express-session')
const MongoDBStore = require("connect-mongodb-session")(session)

const userInitialization = async (obj) => { 
    const hashed_password = await password.hashPassword(obj.password)       
    const user = new User({
        name : obj.name,
        email : obj.email,
        password : hashed_password,
        status : obj.status
    })
    
    return user
}

const initSessionParams = () => {
    
    // init DB session store object
    const store = new MongoDBStore({
            uri: process.env.DB_CONNECTION,
            collection: "sessions",
            cookie: {
                maxAge: 1000 * 15 // 1 week
            },
    });

    // catch errors while creating that object
    store.on('error', (err)=>{console.log(err)})

    const obj = {
        secret : process.env.SESSION_SECRET_SIGN_KEY,
        resave : false,
        saveUninitialized : true,
        store : store
    }
    return obj
}

const initGoogleUser = (profile) => {
    const google_user = {
            googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email : profile.emails[0].value
    }
    return google_user
}

module.exports = { userInitialization, initSessionParams, initGoogleUser }