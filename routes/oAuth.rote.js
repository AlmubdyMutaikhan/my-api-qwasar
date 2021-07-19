const { Router } = require('express')
const oAuth = Router()
const passport = require('passport')
 
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

module.exports = oAuth

/*
read about failure redirect
*/
