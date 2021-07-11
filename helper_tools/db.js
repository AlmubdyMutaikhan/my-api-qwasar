const mongoose = require('mongoose')
const session = require('express-session')

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




module.exports = {
    connectToTheDB,
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