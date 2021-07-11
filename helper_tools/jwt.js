const jwt = require('jsonwebtoken')

const createToken = (user_id) => {
    const token = jwt.sign({ _id : user_id}, process.env.TOKEN_SECRET)
    return token
}

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt_token
    console.log(req.cookies)
    if(!token) return res.status(401).send("Permission denied")
    try {
        console.log("req user is " + req.user)
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)

        console.log(verified)
        req.user = verified
        next()
    } catch(err) {
        res.status(401).send("Invalid JWT token")
    }
    
}

module.exports = {
    createToken,
    verifyToken
}