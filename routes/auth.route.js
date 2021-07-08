const express = require('express')
const authRoute = express.Router()
// link dependencies
const User = require('../model/User')
const validator = require('../helper_tools/validate')
const init = require('../helper_tools/init')  

authRoute.post('/register', async (req, res) => {
    const { error } = validator.newUserValidation(req.body)
    if(error) {return res.status(400).send({"err_msg" : error.details[0].message})}

    const user = init.userInitialization(req.body)
    try {
        const saved_usr_data = await user.save()
        res.status(201).send(saved_usr_data)
    } catch(err) {
        res.status(400).send({"err" : err })
    }
})

module.exports = authRoute
