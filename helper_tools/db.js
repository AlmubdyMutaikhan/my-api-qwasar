const mongoose = require('mongoose')
const mongoDBSessionStore = require('connect-mongodb-session')(session)

// Method which connects to the DataBase of a server 
const connectToTheDB = async () => {
    try {
          const conn = await mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology : true, useNewUrlParser : true})
          console.log("succesfully connected to the DB")
          return true 
    } catch(err) {
        console.log("error while connecting to DB")
        throw new Error(err)
    } 
}


// mongoDB class object to store the sessions
const store = new mongoDBSessionStore({
    uri : process.env.DB_CONNECTION,
    collection : "sessions"
})

store.on('error', (err) => {
    console.log("error occured while initializing mongodb session store object")
    console.log(err)
})

module.exports = {
    connectToTheDB,
    store
}


// what i learnt

/*
    return values of async await
    try {
        return "success"
    } catch() {
        throw new <Exception>
    }


 */