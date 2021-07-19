const express = require('express')
const authRoute = express.Router()
// link dependencies
const User = require('../model/User.model')
const validator = require('../helper_tools/validate')
const init = require('../helper_tools/init')  

authRoute.post('/register', async (req, res) => {
    const error = await validator.newUserValidation(req.body)
    if(error) {return res.status(400).send({"err_msg" : error})}

    const new_user = await init.userInitialization(req.body)
    try {
        const saved_user_data = await new_user.save()
        res.status(201).send({user : saved_user_data._id})
    } catch(err) {
        res.status(400).send({"err_msg" : err })
    }
})

authRoute.post('/login', async (req, res) => {
    const error = await validator.loggingUserDataValidation(req.body)
    res.cookie("key", "value")
    if(error) {
        res.status(400).send({"err_msg" : error})
    } else {
        const user = await User.findOne({email : req.body.email})
        req.session.auth = true
        req.session.user_id = user._id
        req.session.user_type = "origin"
        console.log("session stored succesfully")
        res.send({"msg" : "succesful sign in"})
    }
})

authRoute.delete('/logout', async (req, res) => {
    req.session.destroy()
    // TODO : method for clearing all cookies
    res.clearCookie('connect.sid')
    res.send({"msg" : "sucessful sign out"})
})


module.exports = authRoute
