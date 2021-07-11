const express = require('express')
const authRoute = express.Router()
// link dependencies
const User = require('../model/User')
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
        res.status(400).send({"err" : err })
    }
})

authRoute.post('/login', async (req, res) => {
    const error = await validator.loggingUserDataValidation(req.body)
    
    if(error) {
        res.status(400).send({"err_msg" : error})
    } else {
        console.log("cookies are " + req.cookies)
        const user = await User.findOne({email : req.body.email})
        const token = my_jwt.createToken(user._id)
        res.cookie('jwt_token', token, {expires : new Date(new Date().getTime() + 30 * 1000), httpOnly : true})
        console.log("cookies are created succesfully")
        res.header('auth-token', token).send(token)
    }
})

module.exports = authRoute
