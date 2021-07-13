const User = require('../model/User.model')

const authSession = (req, res, next) => {
    if(req.path === '/') {
        return next()
    } 

    if(req.session.auth) {
        next()
    } else {
        res.json({"err_msg" : "user should have sign in"})
    }
}

const userStatus = async (req, res, next) => {
    if(req.path === '/') {
        return next()
    } 
    
    if(req.session.user_id) {
        const user = await User.findById(req.session.user_id)
        if(user.status === "employer") {
            next()
        } else {
            return res.json({"err_msg" : "'employer' status is required"})
        }
    } else {
        res.json({"err_msg" : "invalid user id"})
    }
}


module.exports = {
    authSession,
    userStatus
}