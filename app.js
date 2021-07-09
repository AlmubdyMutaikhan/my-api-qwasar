const express = require('express')
const app = express()
const dotenv = require('dotenv')

const mongoose = require('mongoose')

const my_jwt = require('./helper_tools/jwt')
//set up configs
dotenv.config()

// import Routes
const authRoute = require('./routes/auth.route')
// middlewares
app.use(express.json())
app.use('/api/user', authRoute)
app.get('/secret/hello', my_jwt.verifyToken, (req, res) => {
    res.send("Sssh..., secret.... (password)")
})

mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology : true, useNewUrlParser : true})
    .then((res) => {
        console.log("successful connection to DB")
    })
    .catch(err => {
        console.log(err)
    })

app.listen(3000, () => {console.log("server is on (port:3000)")})

