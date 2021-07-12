const authSession = (req, res, next) => {
    if(req.session.auth) {
        next()
    } else {
        res.json({"err_msg" : "user should have sign in"})
    }
}

module.exports = {
    authSession
}