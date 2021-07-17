const Joi = require('@hapi/joi')
const User = require('../model/User.model')
const bcrypt = require('bcryptjs')

// validating user data on registering 
const userValidationSchema = Joi.object({
    name : Joi
        .string()
        .min(2)
        .max(30)
        .alphanum(),
    email : Joi
        .string()
        .email()
        .max(100)
        .min(6),
    password : Joi
        .string()
        .min(7)
        .max(1024),
    status : Joi
        .string()
        .alphanum()
})

const jobValidationSchema = Joi.object({
    job_title : Joi
        .string()
        .min(2)
        .max(30),
    skills : Joi
        .string()
        .min(2)
        .max(1000),
    salary : Joi
        .string()
        .min(1)
        .max(11),
    location : Joi
        .string()
        .min(1)
        .max(20)
})


// method used to check general common data of a user 
const userDataValidation = async (params) => {
    const user_with_this_email = await User.findOne({email : params.email})

    let { error } = userValidationSchema.validate(params)
    let err_obj = { "err_msg" : (error) ? error.details[0].message : null, 
                    "email_exist" : user_with_this_email ? user_with_this_email : false,
                    "status_ok" : params.status === "employee" || params.status === "employer" 
    }  
    return err_obj
}

const loggingUserDataValidation = async (params) => {
    const err_obj = await userDataValidation(params)
    let res_error_msg = null
    // if user email is invalid
    if(!err_obj.email_exist) {
        res_error_msg = "email or password incorrect :|"
    } else {
        const valid_pass = await bcrypt.compare(params.password, err_obj.email_exist.password)
        if(!valid_pass) {
            res_error_msg = "password or email incorrect :|"
        }
    }
    
    return res_error_msg
}
// TODO : try catch (throw errors)
const newUserValidation = async (params) => {
    const err_obj = await userDataValidation(params)
    let res_error_msg = null
    if(err_obj.err_msg) {
        res_error_msg = err_obj.err_msg
    } else if(err_obj.email_exist) {
        res_error_msg = "this email already exists :|"
    } else if(!err_obj.status_ok) {
        res_error_msg = "status should be employee or employer :|"
    } 
    return res_error_msg
}

const jobDocumentValidation = (params) => {
    let { error } = jobValidationSchema.validate(params)
    return error
}

const getParams = (params) => {
    const obj = {
        
    }
    return obj
}

module.exports = { newUserValidation, loggingUserDataValidation, jobDocumentValidation }

// read standard JS style code