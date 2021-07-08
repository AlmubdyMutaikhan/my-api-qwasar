const User = require('../model/User')

const userInitialization = (obj) => {    
    const user = new User({
        name : obj.name,
        email : obj.email,
        password : obj.password
    })
    return user
}

module.exports = { userInitialization }