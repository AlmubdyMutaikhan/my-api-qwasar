const mongoose = require('mongoose')
const Schema = mongoose.Schema
const googleUserSchema = new Schema({
    googleId : {
        type : String,
        required : true
    },
    displayName : {
        type : String,
        required : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    }
})


const googleUserModel = mongoose.model('googleUser', googleUserSchema)
module.exports = googleUserModel
