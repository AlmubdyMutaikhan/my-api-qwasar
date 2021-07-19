const { Router } = require('express')
const oAuth = Router()
const passport = require('passport')
const googleUser = require('../model/googleUser.model')

oAuth.get('/google', passport.authenticate('google', {scope : ["profile", "email"]}))

// <button href="3000/auth/google">

oAuth.get('/google/callback', passport.authenticate('google', {failureRedirect : '/google/failed'}), 
    (req, res) => {
        req.session.user_id = req.user.id
        req.session.auth = true
        req.session.user_type = "google"
        res.json({ "msg" : "sucessful authorized", "success" : true, "user" : req.user})
})

oAuth.delete('/google/logout', (req, res) => {
    req.logout()
    req.user = null
    req.session.destroy()
    res.json({"msg" : "succesfully logged out"})
})

oAuth.get('/google/failed', (req, res) => {
    res.json({ "msg" : "unsucessful authorized (redirected to failed)", "success" : false})
})

oAuth.put('/google/user/status/', async (req, res) => {
    const status = req.query.status
    
    if(!(status == "employer" || status === "employee")) {
        return res.send({"err" : "status should be employer or employee"})
    }

    try {
        const googleUserDoc = await googleUser.findOneAndUpdate({googleId : req.session.user_id},{status : status}, {new : true})
        res.send({"updated user" : googleUserDoc}) 
    } catch(err) {
        res.send(err)
    }
})

module.exports = oAuth

/*
read about failure redirect
*/
