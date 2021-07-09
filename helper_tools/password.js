const bcrypt = require('bcryptjs')

const hashPassword = async (plain_password) => {
    const salt = await bcrypt.genSalt(12)
    const hashed_password = await bcrypt.hash(plain_password, salt)
    return hashed_password
}

module.exports = {
    hashPassword
}