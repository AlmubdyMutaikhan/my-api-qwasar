const googleUser = require('../../../model/googleUser.model')
const init = require('../../../helper_tools/init')

const hasAlreadyRegisteredGoogleUser = async (googleID) => {
    try {
        const google_user = await googleUser.findOne({googleId : googleID})
        return google_user ? true : false
    } catch(err) {
        console.log(err)
        return "bad_request"
    }
}

const createAndWriteGoogleUser = async (profile) => {
    const google_user_obj = init.initGoogleUser(profile)
    try {
        const google_user = await googleUser.create(google_user_obj)
        console.log("succesfully saved the user")
        console.log(google_user)
        return {"msg" : "ok"}
    } catch(err) {
        console.log(err)
        return {"msg" : err}
    }
}

module.exports = {
    hasAlreadyRegisteredGoogleUser,
    createAndWriteGoogleUser
}

/*
    
*/