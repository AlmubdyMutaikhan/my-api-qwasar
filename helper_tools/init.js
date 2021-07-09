const User = require('../model/User')
const password = require('../helper_tools/password')

const userInitialization = async (obj) => { 
    const hashed_password = await password.hashPassword(obj.password)       
    const user = new User({
        name : obj.name,
        email : obj.email,
        password : hashed_password
    })
    
    return user
}

module.exports = { userInitialization }