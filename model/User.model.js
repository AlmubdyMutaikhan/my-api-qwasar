const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name : {
        type : String,
        required : true,
        min : 2,
        max : 30
    },
    email : {
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    password : {
        type : String,
        required : true,
        min : 7,
        max : 200
    },
    date : {
        type : Date,
        default : Date.now
    },
    status : {
        type : String,
        required : true
    },
    jobsPosted : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Job' 
    }]
})


const userModel = mongoose.model('User', userSchema)
module.exports = userModel
