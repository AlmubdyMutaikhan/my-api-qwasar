const jwt = require('jsonwebtoken')

const createToken = (user_id) => {
    const token = jwt.sign({ _id : user_id}, process.env.TOKEN_SECRET)
    return token
}

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Permission denied")
    try {
        console.log("req user is " + req.user)
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    } catch(err) {
        res.status(401).send("Invalid JWT token")
    }
    next()
}

module.exports = {
    createToken,
    verifyToken
}