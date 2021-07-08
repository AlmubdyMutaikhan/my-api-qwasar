const express = require('express')
const app = express()
const dotenv = require('dotenv')

const mongoose = require('mongoose')


//set up configs
dotenv.config()

// import Routes
const authRoute = require('./routes/auth.route')
// middlewares
app.use(express.json())
app.use('/api/user', authRoute)


mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology : true, useNewUrlParser : true})
    .then((res) => {
        console.log("successful connection to DB")
    })
    .catch(err => {
        console.log(err)
    })

app.listen(3000, () => {console.log("server is on (port:3000)")})

