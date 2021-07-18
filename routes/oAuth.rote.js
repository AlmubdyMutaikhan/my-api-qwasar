const { Router } = require('express')
const oAuth = Router()
const passport = require('passport')
 
oAuth.get('/google', passport.authenticate('google', {scope : ["profile", "email"]}))

// <button href="3000/auth/google">

oAuth.get('/google/callback', passport.authenticate('google', {failureRedirect : '/google/failed'}), 
    (req, res) => {
        console.log(req)
        // res.redirect()
        res.json({ "msg" : "sucessful authorized", "success" : true})
})

oAuth.get('/google/logout', (req, res) => {
    req.logout()
    req.user = null
    res.json({"msg" : "succesfully logged out"})
})

oAuth.get('/google/failed', (req, res) => {
    res.json({ "msg" : "unsucessful authorized (redirected to failed)", "success" : false})
})

module.exports = oAuth

/*
read about failure redirect
*/
