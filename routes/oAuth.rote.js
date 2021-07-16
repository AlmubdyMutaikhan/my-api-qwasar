const { Router } = require('express')
const oAuth = Router()
const passport = require('passport')

oAuth.get('/google', passport.authenticate('google', {scope : ["profile", "email"]}))

oAuth.get('/google/callback', passport.authenticate('google', {failureRedirect : '/'}), 
    (req, res) => {
        res.json({"msg" : "succesfully logged in through google"})
})

oAuth.get('/google/logout', (req, res) => {
    req.logout()
    req.user = null
    res.json({"msg" : "succesfully logged out"})
})
module.exports = oAuth